
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-zinc-950">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80"></div>
      
      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-12 w-full pt-32">
        <div className="max-w-5xl">
          <div className="mb-10 flex items-center space-x-4">
            <span className="text-[11px] mono uppercase tracking-[0.4em] text-zinc-500 bg-zinc-900/50 px-3 py-1 border border-zinc-800 rounded">
              System Architecture & AI Engineering
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Zero-to-One Enterprise AI
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-8 border-l-2 border-zinc-800 pl-8">
            We design, implement and productionize tenant-local RAG pipelines and agentic automation on Azure and AWS — secure, auditable, and engineered for scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="https://outlook.office.com/book/NihiloSolutions1@nihilosolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Discovery - opens in new tab"
              className="relative inline-flex items-center px-6 py-3 font-mono uppercase tracking-[0.1em] text-white rounded-sm border border-blue-400 bg-zinc-800 transition-all duration-300"
              style={{ boxShadow: '2px 2px 0 rgba(0,0,0,1)' }}
            >
              <span className="text-blue-400 mr-2">[</span>
              <span className="flex items-center gap-2">
                <span>Book Discovery</span>
                <ArrowRight size={14} />
              </span>
              <span className="text-blue-400 ml-2">]</span>
            </a>

            <a href="#services" className="inline-flex items-center justify-center space-x-3 px-6 py-3 font-mono uppercase tracking-[0.1em] border border-slate-700 text-zinc-200 rounded-sm bg-transparent hover:bg-white hover:text-black transition-all duration-300">
              <span className="mr-1">View Services</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom status bar (neutral production status) */}
      <div className="absolute bottom-0 w-full border-t border-zinc-900 py-6 px-12 bg-zinc-950/50 backdrop-blur-sm hidden lg:block">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-[10px] mono text-zinc-600">
          <div />
          <div className="tracking-widest">
            PRODUCTION-READY // STATUS: OPERATIONAL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
