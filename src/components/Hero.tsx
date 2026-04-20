
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
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-light bg-navy-800/50 px-3 py-1.5 border border-navy-700 rounded-full">
              System Architecture & AI Engineering
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 font-heading">
            AI Automations That Cut Ops Costs 30–60%
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-navy-200 font-normal leading-relaxed mb-10 border-l-2 border-accent/30 pl-8">
            We build AI automations deployed inside your cloud, not ours. Azure-native. Production in 4–6 weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="https://intake.nihilosolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-white rounded-lg bg-accent hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20"
            >
              <span>Start Readiness Protocol</span>
              <ArrowRight size={18} className="ml-2" />
            </a>

            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 font-bold text-navy-100 rounded-lg bg-navy-800/40 hover:bg-navy-800 transition-all duration-300 border border-navy-700 hover:border-navy-600">
              <span>View Services</span>
              <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="absolute bottom-0 w-full border-t border-navy-800 py-6 px-12 bg-navy-950/80 backdrop-blur-md hidden lg:block">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-xs font-medium text-navy-400 tracking-wider uppercase">
          <div className="flex gap-8">
            <span>Cloud Native</span>
            <span>Security First</span>
          </div>
          <div className="tracking-widest flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            SYSTEMS OPERATIONAL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
