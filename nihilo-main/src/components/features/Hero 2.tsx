import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: 'var(--brand-void)' }}>
      {/* Grid backdrop */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Azure halos */}
      <div className="absolute top-[20%] -left-[10%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'rgba(45,107,255,0.22)', filter: 'blur(140px)' }} />
      <div className="absolute bottom-[10%] -right-[5%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'rgba(91,139,255,0.14)', filter: 'blur(120px)' }} />

      {/* Fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-transparent to-[#05060A]/60 pointer-events-none" />

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12 w-full pt-24 md:pt-36">
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <div className="mb-8 md:mb-10">
            <span className="inline-block eyebrow px-3 py-1.5 border rounded-sm"
              style={{ background: 'rgba(11,13,20,0.5)', borderColor: 'var(--line)' }}>
              Microsoft Azure Partner · AI Engineering
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 600,
            fontSize: 'clamp(42px, 6.5vw, 88px)',
            lineHeight: 1.04,
            letterSpacing: '-0.035em',
            color: 'var(--fg)',
            margin: '0 0 28px',
          }}>
            AI That Cuts Your<br />
            Operating Costs{' '}
            <span style={{ color: 'var(--brand-azure-lit)', fontStyle: 'italic' }}>30–60%.</span>
          </h1>

          {/* Sub */}
          <p className="max-w-xl text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 pl-5 md:pl-8"
            style={{ color: 'var(--fg-dim)', borderLeft: '2px solid var(--n-700)' }}>
            We build AI automation that runs <em>inside your own systems</em> — not some third-party cloud.
            Your data stays yours. You're live in 4–6 weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="https://intake.nihilosolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start Readiness Protocol - opens in new tab"
              className="btn-primary"
            >
              <span>Get Started</span>
              <ArrowRight size={14} />
            </a>
            <a href="#services" className="btn-secondary">
              <span>See What We Build</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Hero foot bar */}
      <div className="absolute bottom-0 w-full hidden lg:block" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="max-w-screen-2xl mx-auto px-12 py-5 flex justify-between items-center"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}>
          <span>EX // NIHILO · MMXXVI</span>
          <span>PRODUCTION-READY · AZURE-NATIVE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
