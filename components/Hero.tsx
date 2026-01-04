
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
          
          <h1 className="text-6xl md:text-[clamp(4.5rem,8vw,10rem)] font-bold text-white leading-[0.9] tracking-tighter mb-12">
            CLOUD-NATIVE <br />
            <span className="text-zinc-500">INTELLIGENCE.</span>
          </h1>
          
          <p className="max-w-2xl text-xl text-zinc-400 font-light leading-relaxed mb-16 border-l-2 border-zinc-800 pl-10">
            Nihilo Solutions designs and deploys custom AI ecosystems and automated workflows on AWS and Azure. We bridge the gap between complex data and actionable enterprise intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#services" 
              className="group flex items-center justify-center space-x-3 px-10 py-5 bg-white text-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-zinc-200 transition-all"
            >
              <span>View Solutions</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="flex items-center justify-center space-x-3 px-10 py-5 border border-zinc-800 bg-zinc-900/40 text-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-zinc-800 transition-all"
            >
              <span>Our Expertise</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom status bar */}
      <div className="absolute bottom-0 w-full border-t border-zinc-900 py-6 px-12 bg-zinc-950/50 backdrop-blur-sm hidden lg:block">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-[10px] mono text-zinc-600">
          <div className="flex space-x-12">
            <span className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              <span>AZURE CERTIFIED PARTNER</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.5)]"></span>
              <span>AWS ADVANCED TIER</span>
            </span>
          </div>
          <div className="tracking-widest">
            STABLE_ENGINE_V4.0 // STATUS: OPERATIONAL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
