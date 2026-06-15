import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-zinc-950">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-600/15 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/30 rounded-full blur-[150px]"></div>

      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80"></div>

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12 w-full pt-24 md:pt-32">
        <div className="max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4 md:mb-6">
            Production AI Automation, Deployed in Your Cloud.
          </h1>

          <p className="max-w-2xl text-base md:text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-6 md:mb-8 border-l-2 border-zinc-800 pl-4 md:pl-8">
            Tenant-local RAG and agentic workflows on Azure and AWS. SOC 2 / ISO 27001 ready by default. Production in 4 to 8 weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4">
            <Link
              href="/intake"
              aria-label="Talk to a principal"
              className="btn-primary"
            >
              <span>Talk to a principal</span>
              <ArrowRight size={14} />
            </Link>

            <a href="#services" className="btn-secondary">
              <span>See how it works</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full border-t border-zinc-900 py-6 px-12 bg-zinc-950/50 backdrop-blur-sm hidden lg:block">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-[10px] mono text-zinc-600">
          <div />
          <div className="tracking-widest">
            PRODUCTION-READY
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
