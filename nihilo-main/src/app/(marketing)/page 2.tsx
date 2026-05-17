import Link from 'next/link';
import { Activity, ArrowUpRight } from 'lucide-react';
import { Hero, Services, Stats, Security, About, Booking, CaseStudy } from '@/components/features';
import { Footer } from '@/components/shared';

export default function HomePage() {
  return (
    <div className="relative min-h-screen" style={{ background: 'var(--brand-ink)', color: 'var(--fg)' }}>
      <main>
        <Hero />
        <Services />
        <CaseStudy />
        <Stats />

        {/* Assessment CTA */}
        <section id="assessment" style={{ padding: '6rem 0', background: 'var(--brand-ink)', borderTop: '1px solid var(--line)' }}>
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full"
              style={{ border: '1px solid rgba(45,107,255,0.3)', background: 'rgba(45,107,255,0.06)' }}>
              <Activity size={13} style={{ color: 'var(--brand-azure-lit)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-azure-lit)' }}>
                Free Assessment Available
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 'clamp(28px, 4vw, 52px)', color: 'var(--fg)', letterSpacing: '-0.03em', fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '32px' }}>
              Is Your Business Ready for AI?
            </h2>
            <p style={{ color: 'var(--fg-dim)', fontSize: '17px', fontWeight: 300, lineHeight: 1.65, maxWidth: '520px', margin: '0 auto 32px' }}>
              Answer a few questions and we&apos;ll tell you exactly where AI can cut your costs — before you commit to anything.
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center gap-4 group"
              style={{ padding: '14px 28px', background: 'var(--n-800)', border: '1px solid var(--line)', color: 'var(--fg)', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.28em', textDecoration: 'none', transition: 'border-color 0.24s, background 0.24s', borderRadius: '2px' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-azure)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)'; }}
            >
              <span>Take the Free Assessment</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>

        <Security />
        <About />
        <Booking />
      </main>

      <Footer />
    </div>
  );
}
