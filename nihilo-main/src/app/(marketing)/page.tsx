import Link from 'next/link';
import { Hero, Services, Security, About, Booking, WhyTenantLocal, HowWeWork } from '@/components/features';
import { Footer } from '@/components/shared';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-200 selection:bg-blue-500/30">
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        {/* WhyTenantLocal acts as the Philosophy section per the UI overhaul brief */}
        <WhyTenantLocal />

        <section
          id="ready-to-start"
          style={{ backgroundColor: '#F4F5F7', paddingTop: '96px', paddingBottom: '96px' }}
        >
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
            <p
              className="uppercase"
              style={{
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '11px',
                color: '#9AA0AE',
                letterSpacing: '0.3em',
                marginBottom: '24px',
              }}
            >
              READY TO START
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '32px',
                fontWeight: 600,
                color: '#0B0D14',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              Tell us what you&apos;re dealing with.
            </h2>
            <p
              className="max-w-xl"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                color: '#6B7280',
                lineHeight: 1.6,
                marginBottom: '32px',
              }}
            >
              No pitch. No pressure. Fill out a brief and we will tell you if we can help.
            </p>
            <Link
              href="/intake"
              style={{
                display: 'inline-block',
                backgroundColor: '#0B0D14',
                color: '#FFFFFF',
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 500,
                padding: '14px 28px',
                borderRadius: 0,
                textDecoration: 'none',
              }}
            >
              Talk to a principal
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
