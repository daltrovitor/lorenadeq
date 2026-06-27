import crypto from 'crypto';

const PIXEL_ID = process.env.META_PIXEL_ID || '673959250163272';
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || 'EAANZB1OwzrOUBR9U0QZBl6gZCNkouM1zVeFeqdkZBtdlWVZAZBFmFc8zrAQIUoRcnGQw68vaZCz6Gk18RM00ffuzA4qq8I5zFGUYxBSG1stvqZBwBvGRwUACXsHwYuZCZAKHb3GG3ffFeLt4WW0nlSPzTdKJhi5m3fumBuvMSI4ZC0jBCAQdPJxmVFqCXA4TPIqPa1hwgZDZD';

export function hashValue(value: any): string | null {
  if (!value) return null;
  const cleaned = String(value).trim().toLowerCase();
  return crypto.createHash('sha256').update(cleaned).digest('hex');
}

export function hashPhone(phone: any): string | null {
  if (!phone) return null;
  // Keep only digits
  let cleaned = String(phone).replace(/\D/g, '');
  // If it's a Brazilian phone number without country code
  if (cleaned.length === 10 || cleaned.length === 11) {
    cleaned = '55' + cleaned;
  }
  return crypto.createHash('sha256').update(cleaned).digest('hex');
}

interface UserData {
  em?: string | null;
  ph?: string | null;
  fn?: string | null;
  ln?: string | null;
  client_ip_address?: string | null;
  client_user_agent?: string | null;
  fbp?: string | null;
  fbc?: string | null;
}

interface CustomData {
  value?: number;
  currency?: string;
  [key: string]: any;
}

interface CapiEventOptions {
  eventName: string;
  userData: UserData;
  customData?: CustomData;
  eventSourceUrl?: string;
  actionSource?: 'website' | 'system_generated' | 'app' | 'other';
  eventId?: string;
}

export async function sendMetaCapiEvent({
  eventName,
  userData,
  customData,
  eventSourceUrl = 'https://amamentacao.dralorenacaramaschi.com.br/',
  actionSource = 'website',
  eventId,
}: CapiEventOptions) {
  const eventTime = Math.floor(Date.now() / 1000);

  // Clean user data to omit null/undefined fields
  const cleanUserData: Record<string, any> = {};
  if (userData.em) cleanUserData.em = [userData.em];
  if (userData.ph) cleanUserData.ph = [userData.ph];
  if (userData.fn) cleanUserData.fn = [userData.fn];
  if (userData.ln) cleanUserData.ln = [userData.ln];
  if (userData.client_ip_address) cleanUserData.client_ip_address = userData.client_ip_address;
  if (userData.client_user_agent) cleanUserData.client_user_agent = userData.client_user_agent;
  if (userData.fbp) cleanUserData.fbp = userData.fbp;
  if (userData.fbc) cleanUserData.fbc = userData.fbc;

  const eventData: Record<string, any> = {
    event_name: eventName,
    event_time: eventTime,
    action_source: actionSource,
    user_data: cleanUserData,
  };

  if (customData) {
    eventData.custom_data = customData;
  }

  if (actionSource === 'website') {
    eventData.event_source_url = eventSourceUrl;
  }

  if (eventId) {
    eventData.event_id = eventId;
  }

  const payload = {
    data: [eventData],
  };

  const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!response.ok) {
      console.error('Meta CAPI Error:', result);
      return { success: false, error: result };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Meta CAPI Fetch Exception:', error);
    return { success: false, error };
  }
}
