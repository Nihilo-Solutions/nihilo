import { NextRequest, NextResponse } from 'next/server';

interface LeadPayload {
  firstName: string;
  lastName?: string;
  email: string;
  company?: string;
  phone?: string;
  websiteUrl?: string;
  /** Free text from the contact form: the process the visitor wants to discuss. */
  message?: string;
  source?: string;
  scores?: {
    speed?: number;
    seo?: number;
    mobile?: number;
    overall?: number;
  };
}

class LeadSyncError extends Error {}

/**
 * Creates the contact in HubSpot, throwing if it does not land.
 *
 * Every property sent here has to exist in the portal. HubSpot rejects the
 * whole request with a 400 if even one does not, so a stray property name
 * loses the lead rather than just that field. Verified present in portal
 * 246987281: email, firstname, lastname, company, phone, website, message.
 *
 * The scores below write custom number properties that still have to be
 * created in HubSpot as nihilo_speed_score, nihilo_seo_score and
 * nihilo_mobile_score before anything sends a scores object. Nothing on the
 * site sends one today, and if something starts, this route now fails loudly
 * instead of silently dropping the lead.
 */
async function createHubSpotContact(payload: LeadPayload): Promise<void> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    throw new LeadSyncError('HUBSPOT_ACCESS_TOKEN is not set');
  }

  const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      properties: {
        email: payload.email,
        firstname: payload.firstName,
        lastname: payload.lastName ?? '',
        ...(payload.company && { company: payload.company }),
        ...(payload.phone && { phone: payload.phone }),
        ...(payload.websiteUrl && { website: payload.websiteUrl }),
        ...(payload.message && { message: payload.message }),
        ...(payload.scores?.speed != null && { nihilo_speed_score: payload.scores.speed }),
        ...(payload.scores?.seo != null && { nihilo_seo_score: payload.scores.seo }),
        ...(payload.scores?.mobile != null && { nihilo_mobile_score: payload.scores.mobile }),
      },
    }),
  });

  if (!res.ok) {
    throw new LeadSyncError(`HubSpot returned ${res.status}: ${await res.text()}`);
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!body.firstName || !body.email) {
    return NextResponse.json(
      { error: 'firstName and email are required' },
      { status: 400 },
    );
  }

  try {
    await createHubSpotContact(body);
  } catch (err: unknown) {
    // A lead that does not reach the CRM has to reach the visitor's own mail
    // client instead. The contact form only shows its mailto fallback on a
    // non-ok response, so returning 200 here would lose the lead in silence.
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[leads] sync failed:', message);
    return NextResponse.json({ error: 'Lead sync failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
