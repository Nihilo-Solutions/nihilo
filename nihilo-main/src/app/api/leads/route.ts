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

async function createHubSpotContact(payload: LeadPayload): Promise<void> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    console.warn('HUBSPOT_ACCESS_TOKEN not set — skipping HubSpot sync');
    return;
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
        hs_lead_source: 'WEBSITE',
        lead_source: payload.source ?? 'Website',
        // Custom number properties — create these in HubSpot before going live:
        // nihilo_speed_score, nihilo_seo_score, nihilo_mobile_score (Number type)
        ...(payload.scores?.speed != null && { nihilo_speed_score: payload.scores.speed }),
        ...(payload.scores?.seo != null && { nihilo_seo_score: payload.scores.seo }),
        ...(payload.scores?.mobile != null && { nihilo_mobile_score: payload.scores.mobile }),
      },
    }),
  });

  if (!res.ok) {
    // Non-fatal: log the error but don't surface it to the visitor
    console.error('HubSpot contact creation failed:', await res.text());
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = (await req.json()) as LeadPayload;

    if (!body.firstName || !body.email) {
      return NextResponse.json(
        { error: 'firstName and email are required' },
        { status: 400 },
      );
    }

    await createHubSpotContact(body);

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[leads] error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
