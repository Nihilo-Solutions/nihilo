import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Nihilo Solutions',
  description:
    'Get in touch with Nihilo Solutions. Talk to the principals who design and build your website, SEO program, or AI automation system.',
  alternates: {
    canonical: 'https://nihilosolutions.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: '#05060A' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 pt-32 pb-24">

        <div className="max-w-xl">
          <p className="label mb-4" style={{ color: '#3A3F4A' }}>Contact</p>

          <h1
            className="text-[#F0F1F3] tracking-tight leading-tight mb-4"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 600,
            }}
          >
            Talk to a principal.
          </h1>

          <p className="text-[#9AA0AE] text-[15px] leading-relaxed mb-10 max-w-md">
            We review every inquiry personally and respond within 1 business day.
            Book a call to talk through your situation, or email us directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <Link href="/intake" className="btn-primary">
              Book a discovery call
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
            <a href="mailto:sam@nihilosolutions.com" className="btn-secondary">
              sam@nihilosolutions.com
            </a>
          </div>

          <div
            className="space-y-4 pt-10"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p className="text-[13px]" style={{ color: '#3A3F4A', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
              Microsoft Azure Partner · ISC2 CC · Connecticut, USA
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
