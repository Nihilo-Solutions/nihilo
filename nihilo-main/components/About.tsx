
import React from 'react';
import { FOUNDERS } from '../constants';
import { ShieldCheck, Cpu, Code2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 border border-zinc-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-zinc-900 pb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] mono uppercase tracking-[0.4em] text-zinc-600 mb-6 block">02 // The Principals</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase italic leading-none mb-6">
              Founded on <br /><span className="text-zinc-500">Expertise.</span>
            </h2>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-zinc-600 mono text-[10px] uppercase tracking-widest leading-relaxed max-w-xs">
              Direct access to senior engineering talent. We do not outsource. We do not delegate core architecture.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {FOUNDERS.map((founder, idx) => (
            <div key={idx} className="group relative">
              {/* Card Container */}
              <div className="relative z-10 bg-zinc-900/10 border border-zinc-800 p-8 md:p-12 hover:border-zinc-500 transition-all duration-700 h-full flex flex-col">
                
                {/* Header with Avatar Placeholder */}
                <div className="flex items-start justify-between mb-12">
                  <div className="w-20 h-20 bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
                    <div className="text-2xl font-bold text-zinc-700 mono">{founder.initials}</div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 to-transparent opacity-50"></div>
                    {/* Decorative Scanline */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-indigo-500/20 animate-[scan_4s_linear_infinite]"></div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] mono text-zinc-600 uppercase tracking-widest">TENURE</div>
                    <div className="text-xl font-bold text-white tracking-tighter italic">{founder.experience}</div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">{founder.name}</h3>
                  <p className="text-xs mono text-zinc-500 uppercase tracking-widest mb-8 border-b border-zinc-800 pb-6">
                    {founder.role}
                  </p>
                  
                  <div className="space-y-6 mb-12">
                    <p className="text-zinc-400 text-lg font-light leading-relaxed">
                      {founder.bio}
                    </p>
                    <div className="flex items-center space-x-3 text-zinc-500">
                      <Cpu size={14} className="text-zinc-700" />
                      <span className="text-xs mono uppercase tracking-wider">{founder.specialization}</span>
                    </div>
                  </div>
                </div>

                {/* Technical Stack Pills */}
                <div>
                  <h4 className="text-[10px] mono uppercase text-zinc-700 mb-6 flex items-center">
                    <span className="w-4 h-[1px] bg-zinc-800 mr-2"></span>
                    Primary Domains
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {founder.focus.map((skill, i) => (
                      <div key={i} className="px-4 py-3 bg-zinc-900/50 border border-zinc-800 flex items-center space-x-3 group-hover:border-zinc-700 transition-colors">
                        <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
                        <span className="text-[10px] mono text-zinc-400 uppercase tracking-widest">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-zinc-800 group-hover:border-zinc-500 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-zinc-800 group-hover:border-zinc-500 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Studio Philosophy Placeholder */}
        <div className="mt-24 p-12 bg-zinc-900/20 border border-zinc-800 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded border border-zinc-800">
                <ShieldCheck size={18} className="text-zinc-500" />
              </div>
              <h5 className="text-sm font-bold text-white uppercase tracking-widest">Absolute Compliance</h5>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Every AI pipeline is built with data residency and enterprise security protocols at its core.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded border border-zinc-800">
                <Code2 size={18} className="text-zinc-500" />
              </div>
              <h5 className="text-sm font-bold text-white uppercase tracking-widest">Scalable Logic</h5>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                We design architectures that scale linearly without increasing technical debt or manual overhead.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded border border-zinc-800">
                <ArrowRight size={18} className="text-zinc-500" />
              </div>
              <h5 className="text-sm font-bold text-white uppercase tracking-widest">Direct Engagement</h5>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Your point of contact is the engineer building your system. Zero communication loss.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(400%); }
        }
      `}</style>
    </section>
  );
};

const ArrowRight = ({ size, className }: { size: number, className: string }) => (
  <svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
    strokeLinejoin="round" className={className}
  >
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export default About;
