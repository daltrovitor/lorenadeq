import { NextRequest, NextResponse } from 'next/server';
import { sendMetaCapiEvent, hashValue, hashPhone } from '@/lib/meta-capi';

export async function POST(request: NextRequest) {
  try {
    const hottokHeader = request.headers.get('x-hotmart-hottok');
    const expectedHottok = process.env.HOTMART_HOTTOK;

    // Security check: validate token if configured in process.env
    if (expectedHottok && hottokHeader !== expectedHottok) {
      console.warn('Unauthorized Hotmart Webhook attempt: token mismatch');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await request.json();
    console.log('Received Hotmart Webhook:', JSON.stringify(payload));

    const { event, data } = payload;

    // We only process approved purchase events
    if (event !== 'PURCHASE_APPROVED') {
      return NextResponse.json({ message: `Event ${event} is ignored` }, { status: 200 });
    }

    if (!data) {
      return NextResponse.json({ error: 'Missing data field in payload' }, { status: 400 });
    }

    // Extract buyer information
    const buyer = data.buyer || {};
    const buyerName = buyer.name || '';
    const buyerEmail = buyer.email || '';
    const buyerPhone = buyer.phone || buyer.cellphone || '';

    // Split buyer name into first and last name
    const nameParts = buyerName.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Hash PII using SHA-256 for Meta Graph API matching
    const hashedEmail = hashValue(buyerEmail);
    const hashedFirstName = hashValue(firstName);
    const hashedLastName = hashValue(lastName);
    const hashedPhone = hashPhone(buyerPhone);

    // Resolve transaction order price details
    let value = 247.00; // Default price from page.tsx
    let currency = 'BRL';

    if (data.purchase?.price?.value !== undefined) {
      value = Number(data.purchase.price.value);
      currency = data.purchase.price.currency_value || 'BRL';
    } else if (data.order?.payment?.value !== undefined) {
      value = Number(data.order.payment.value);
      currency = data.order.payment.currency || 'BRL';
    }

    // Use transaction id for deduplication and matching
    const transactionId = data.purchase?.transaction || data.order?.id || payload.id || '';

    // Try to extract client IP and user agent if Hotmart includes them in the payload
    const clientIpAddress = payload.buyer_ip || data.buyer_ip || data.purchase?.buyer_ip || data.buyer?.ip || null;
    const clientUserAgent = payload.buyer_user_agent || data.buyer_user_agent || null;

    // Send server-side event
    const result = await sendMetaCapiEvent({
      eventName: 'Purchase',
      userData: {
        em: hashedEmail,
        ph: hashedPhone,
        fn: hashedFirstName,
        ln: hashedLastName,
        client_ip_address: clientIpAddress,
        client_user_agent: clientUserAgent,
      },
      customData: {
        currency,
        value,
      },
      actionSource: 'system_generated',
      eventId: transactionId,
    });

    if (!result.success) {
      console.error('Failed to send Purchase event to Meta CAPI:', result.error);
      return NextResponse.json({ error: 'Meta CAPI request failed', details: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Purchase event processed and sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Exception in Hotmart webhook handler:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
