'use client';

import { useState } from 'react';

interface IntakePayload {
  name: string;
  email: string;
  company: string;
  working_on: string;
  referral_source: string;
  source: string;
}

async function submitIntake(payload: IntakePayload): Promise<boolean> {
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
    console.error('Intake submission failed:', err);
    return false;
  }
}

const FIELD_INPUT_CLASS =
  'w-full px-4 py-3 bg-white text-slate-900 border border-[#C7CBD4] outline-none ' +
  'placeholder:text-slate-400 ' +
  'focus:border-[#2D6BFF] focus:ring-2 focus:ring-[#2D6BFF]/30 transition';

const LABEL_CLASS = 'block text-sm font-medium text-slate-700 mb-2';

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    working_on: '',
    referral_source: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const payload: IntakePayload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      working_on: formData.working_on.trim(),
      referral_source: formData.referral_source.trim(),
      source: '/intake',
    };

    const ok = await submitIntake(payload);

    if (ok) {
      // GA4 generate_lead fires on every successful submit, independent of which
      // backend (Formspree, Power Automate, etc.) is wired up at FORM_ENDPOINT.
      window.gtag?.('event', 'generate_lead', {
        event_category: 'contact',
        event_label: 'intake_form',
      });
      setSubmitted(true);
    } else {
      alert('Submission failed. Please email sam@nihilosolutions.com directly.');
    }

    setIsSending(false);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-2xl mx-auto px-6 pt-32 pb-24" style={{ fontFamily: 'var(--font-inter)' }}>
        <p
          className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-6"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          01 / Intake
        </p>

        <h1
          className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Talk to a principal.
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-xl">
          Tell us what you&apos;re working on. We&apos;ll tell you if we can help.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="intake-name" className={LABEL_CLASS}>
                Name
              </label>
              <input
                id="intake-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={FIELD_INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor="intake-email" className={LABEL_CLASS}>
                Email
              </label>
              <input
                id="intake-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={FIELD_INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor="intake-company" className={LABEL_CLASS}>
                Company
              </label>
              <input
                id="intake-company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={FIELD_INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor="intake-working-on" className={LABEL_CLASS}>
                What are you working on?
              </label>
              <textarea
                id="intake-working-on"
                required
                rows={4}
                value={formData.working_on}
                onChange={(e) => setFormData({ ...formData, working_on: e.target.value })}
                className={`${FIELD_INPUT_CLASS} resize-y`}
              />
            </div>

            <div>
              <label htmlFor="intake-referral" className={LABEL_CLASS}>
                How did you hear about us?{' '}
                <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                id="intake-referral"
                type="text"
                value={formData.referral_source}
                onChange={(e) => setFormData({ ...formData, referral_source: e.target.value })}
                className={FIELD_INPUT_CLASS}
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="mt-4 px-8 py-3 bg-[#2D6BFF] text-white font-medium hover:bg-[#1f54d6] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </form>
        ) : (
          <div className="border-l-2 border-[#2D6BFF] pl-6 py-2">
            <p className="text-lg text-slate-900 leading-relaxed">
              Received. We review every submission personally and will be in touch within 1 business day.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
