import { NextRequest, NextResponse } from 'next/server';
import { sendMetaCapiEvent, hashValue, hashPhone } from '@/lib/meta-capi';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, email, phone, name, externalId } = body;

    if (event !== 'ViewContent' && event !== 'InitiateCheckout') {
      return NextResponse.json({ error: 'Invalid event type' }, { status: 400 });
    }

    // Get client details from headers
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || '';
    
    // Extract Meta Pixel specific cookies if available
    const fbp = request.cookies.get('_fbp')?.value || null;
    const fbc = request.cookies.get('_fbc')?.value || null;

    // Split name into first and last name components if present
    let firstName: string | null = null;
    let lastName: string | null = null;
    if (name) {
      const nameParts = String(name).trim().split(/\s+/);
      firstName = nameParts[0] || null;
      lastName = nameParts.slice(1).join(' ') || null;
    }

    // Hash PII using SHA-256
    const hashedEmail = email ? hashValue(email) : null;
    const hashedPhone = phone ? hashPhone(phone) : null;
    const hashedFirstName = firstName ? hashValue(firstName) : null;
    const hashedLastName = lastName ? hashValue(lastName) : null;

    const result = await sendMetaCapiEvent({
      eventName: event,
      userData: {
        em: hashedEmail,
        ph: hashedPhone,
        fn: hashedFirstName,
        ln: hashedLastName,
        external_id: externalId || null,
        client_ip_address: ip,
        client_user_agent: userAgent,
        fbp,
        fbc,
      },
      customData: {
        currency: 'BRL',
        value: 247.00,
      },
      actionSource: 'website',
    });

    return NextResponse.json({ success: result.success });
  } catch (error: any) {
    console.error('Error in events route:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
