import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Nihilo Solutions. Talk to the principals who design and build your website, SEO program, or AI automation system.',
  alternates: {
    canonical: 'https://nihilosolutions.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-4">
      <div className="max-w-2xl mx-auto">

        <p
          className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-6"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          Contact
        </p>

        <h1
          className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Talk to a principal.
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-4 max-w-xl">
          Tell us what you are working on. We review every submission personally and respond within 1 business day.
        </p>

        <p className="text-sm text-slate-500 mb-12">
          Prefer email?{' '}
          <a
            href="mailto:sam@nihilosolutions.com"
            className="text-blue-600 hover:text-blue-500 underline transition-colors"
          >
            sam@nihilosolutions.com
          </a>
        </p>

        {/* MICROSOFT_FORM_EMBED_PLACEHOLDER */}
        <div className="border border-slate-200 bg-slate-50 rounded-lg p-8 text-center">
          <p className="text-slate-400 text-sm font-mono">
            Contact form coming soon.
            <br />
            Email us directly at{' '}
            <a
              href="mailto:sam@nihilosolutions.com"
              className="text-blue-600 underline"
            >
              sam@nihilosolutions.com
            </a>
          </p>
        </div>

      </div>
    </main>
  );
}
