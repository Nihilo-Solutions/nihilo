'use client';

import { useState } from 'react';

interface NDARequestPayload {
  name: string;
  email: string;
  company: string;
  role: string;
  nda_acknowledged: boolean;
  source: string;
}

async function submitNDARequest(payload: NDARequestPayload): Promise<boolean> {
  // TODO: swap Formspree endpoint for Power Automate HTTP trigger URL
  // Power Automate flow: SharePoint log → Outlook notification → Teams alert
  const FORM_ENDPOINT = 'https://formspree.io/f/mreoogrw';

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch (err) {
    console.error('NDA request submission failed:', err);
    return false;
  }
}

const FIELD_INPUT_CLASS =
  'w-full px-4 py-3 bg-white text-slate-900 border border-[#C7CBD4] outline-none ' +
  'placeholder:text-slate-400 ' +
  'focus:border-[#2D6BFF] focus:ring-2 focus:ring-[#2D6BFF]/30 transition';

const LABEL_CLASS = 'block text-sm font-medium text-slate-700 mb-2';

export default function SecurityNDA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
  });
  const [ndaAck, setNdaAck] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const payload: NDARequestPayload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      role: formData.role.trim(),
      nda_acknowledged: ndaAck,
      source: 'security-nda-request',
    };

    const ok = await submitNDARequest(payload);

    if (ok) {
      // GA4 generate_lead fires on every successful submit, independent of which
      // backend (Formspree, Power Automate, etc.) is wired up at FORM_ENDPOINT.
      window.gtag?.('event', 'generate_lead', {
        event_category: 'contact',
        event_label: 'security_nda_request',
      });
      setSubmitted(true);
    } else {
      alert('Request failed. Please email sam@nihilosolutions.com directly.');
    }

    setIsSending(false);
  };

  if (submitted) {
    return (
      <div className="border-l-2 pl-6 py-2 max-w-2xl" style={{ borderColor: '#2D6BFF' }}>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '16px',
            color: '#0B0D14',
            lineHeight: 1.7,
          }}
        >
          Request received. We will review and respond within 1 business day with next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <p
        className="uppercase"
        style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: '11px',
          color: '#9AA0AE',
          letterSpacing: '0.3em',
          marginBottom: '16px',
        }}
      >
        NDA REQUIRED FOR ACCESS
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nda-name" className={LABEL_CLASS}>Full Name</label>
          <input
            id="nda-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={FIELD_INPUT_CLASS}
          />
        </div>

        <div>
          <label htmlFor="nda-email" className={LABEL_CLASS}>Business Email</label>
          <input
            id="nda-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={FIELD_INPUT_CLASS}
          />
        </div>

        <div>
          <label htmlFor="nda-company" className={LABEL_CLASS}>Company</label>
          <input
            id="nda-company"
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={FIELD_INPUT_CLASS}
          />
        </div>

        <div>
          <label htmlFor="nda-role" className={LABEL_CLASS}>Role / Title</label>
          <input
            id="nda-role"
            type="text"
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className={FIELD_INPUT_CLASS}
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={ndaAck}
            onChange={(e) => setNdaAck(e.target.checked)}
            className="mt-1 w-4 h-4 border border-[#C7CBD4] text-[#2D6BFF] focus:ring-[#2D6BFF]"
          />
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
            I agree to the terms of Nihilo Solutions standard NDA and understand that documents shared are confidential.
          </span>
        </label>

        <button
          type="submit"
          disabled={isSending}
          className="px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed transition"
          style={{
            backgroundColor: '#0B0D14',
            color: 'white',
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            fontWeight: 500,
            border: 'none',
            borderRadius: 0,
          }}
        >
          {isSending ? 'Sending...' : 'Request Document Access'}
        </button>
      </form>

      <p
        className="mt-8"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '13px',
          color: '#9AA0AE',
          lineHeight: 1.6,
        }}
      >
        Documents are shared via secure link after NDA confirmation. Contact sam@nihilosolutions.com with any questions.
      </p>
    </div>
  );
}
