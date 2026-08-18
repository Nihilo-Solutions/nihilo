import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const DIFFERENTIATORS = [
  'Microsoft Azure Partner',
  'ISC² Certified',
  'Principal-led delivery',
  'Connecticut-based',
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#05060A]">

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/6" />

      {/* Main content — vertically centered */}
      <div className="flex-1 flex flex-col justify-center max-w-screen-xl mx-auto w-full px-6 lg:px-16 pt-32 pb-24">

        {/* Eyebrow */}
        <p className="label mb-8 text-[#5A6070]">
          Website · SEO · AI Automation
        </p>

        {/* Headline */}
        <h1
          className="font-bold text-[#F0F1F3] leading-[1.02] tracking-[-0.03em] mb-6"
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: 'clamp(52px, 7.5vw, 100px)',
          }}
        >
          We build
          <br />
          from nothing.
        </h1>

        {/* Subhead */}
        <p
          className="text-[#9AA0AE] leading-relaxed mb-10 max-w-lg"
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

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          {DIFFERENTIATORS.map((item, i) => (
            <span
              key={item}
              className="flex items-center gap-x-8"
            >
              <span className="label text-[#3A3F4A]">{item}</span>
              {i < DIFFERENTIATORS.length - 1 && (
                <span className="hidden sm:block w-px h-3 bg-white/10" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
