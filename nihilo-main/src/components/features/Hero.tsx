import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-zinc-950">
      {/* Background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-600/15 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/30 rounded-full blur-[150px]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80" />

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12 w-full pt-24 md:pt-32">
        <div className="max-w-4xl">

          <span className="text-[10px] mono uppercase tracking-[0.4em] text-zinc-500 mb-6 block">
            Website · SEO · AI Automation
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Grow your business.
            <br />
            <span className="text-blue-400">We build what moves the needle.</span>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-8 border-l-2 border-zinc-800 pl-6">
            Modern websites, search-engine growth, and AI automation for small and mid-size businesses.
            Scoped, priced, and delivered by the principals who design it. No hand-offs to junior staff.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link href="/assessment" aria-label="Get a free growth assessment" className="btn-primary">
              <span>Get a free assessment</span>
              <ArrowRight size={14} />
            </Link>

            <a href="#services" className="btn-secondary">
              <span>See what we build</span>
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Social proof bar */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            <span className="text-[11px] mono uppercase tracking-[0.25em] text-zinc-600">Microsoft Azure Partner</span>
            <span className="text-zinc-800 hidden sm:block">|</span>
            <span className="text-[11px] mono uppercase tracking-[0.25em] text-zinc-600">ISC2 Certified</span>
            <span className="text-zinc-800 hidden sm:block">|</span>
            <span className="text-[11px] mono uppercase tracking-[0.25em] text-zinc-600">Principal-led delivery</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full border-t border-zinc-900 py-6 px-12 bg-zinc-950/50 backdrop-blur-sm hidden lg:block">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-[10px] mono text-zinc-600">
          <div />
          <div className="tracking-widest">NIHILO SOLUTIONS · CONNECTICUT</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
