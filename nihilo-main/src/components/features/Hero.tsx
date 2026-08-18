import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-white">

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />

      {/* Main content — vertically centered */}
      <div className="flex-1 flex flex-col justify-center max-w-screen-xl mx-auto w-full px-6 lg:px-16 pt-32 pb-24">

        {/* Eyebrow */}
        <p className="label mb-8">
          Website · SEO · AI Automation
        </p>

        {/* Headline */}
        <h1
          className="font-bold text-[#0F0F0F] leading-[1.02] tracking-[-0.03em] mb-6"
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: 'clamp(52px, 7.5vw, 100px)',
          }}
        >
          We build
          <br />
          <span style={{ color: 'var(--orange)' }}>from nothing.</span>
        </h1>

        {/* Subhead */}
        <p
          className="text-[#52525B] leading-relaxed mb-10 max-w-lg"
          style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}
        >
          We help small and mid-size businesses get found online, generate qualified leads, and automate the manual work that stalls growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/tools/growth-assessment" className="btn-primary">
            Get a free assessment
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
          <Link href="#services" className="btn-secondary">
            See what we build
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
