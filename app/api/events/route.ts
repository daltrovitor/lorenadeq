import { NextRequest, NextResponse } from 'next/server';
import { sendMetaCapiEvent } from '@/lib/meta-capi';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event } = body;

    if (event !== 'ViewContent' && event !== 'InitiateCheckout') {
      return NextResponse.json({ error: 'Invalid event type' }, { status: 400 });
    }

    // Get client details from headers
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || '';
    
    // Extract Meta Pixel specific cookies if available
    const fbp = request.cookies.get('_fbp')?.value || null;
    const fbc = request.cookies.get('_fbc')?.value || null;

    const result = await sendMetaCapiEvent({
      eventName: event,
      userData: {
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
