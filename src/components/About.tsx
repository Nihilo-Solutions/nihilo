import React from 'react';
import { Terminal, Shield, Award, Cpu } from 'lucide-react';

// 1. RE-DEFINING PROFILECARD (This was likely missing)
const ProfileCard: React.FC<{
  initials: string;
  name: string;
  title: string;
  bio: string;
  domains: string[];
  alt?: string;
}> = ({ initials, name, title, bio, domains, alt }) => {
  return (
    <div className="border border-white/10 p-8 rounded-lg bg-[#0a0a0a]">
      <div className="flex items-start space-x-6">
        <div className="w-20 h-20 overflow-hidden rounded-md border border-white/10 bg-transparent">
          <img
            src={`/headshots/${initials}.jpg`}
            loading="lazy"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = `/headshots/placeholder.svg`; }}
            alt={alt ?? `${name} - ${title} at Nihilo`}
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 20%' }}
          />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white uppercase italic tracking-tighter">{name}</h3>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mt-2">{title}</div>
          <div className="border-t border-white/5 mt-4 pt-4">
            <p className="text-zinc-400 text-sm leading-relaxed font-light">{bio}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {domains.map((d) => (
          <div key={d} className="border border-white/10 p-3 rounded-md flex items-center gap-3 bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]" />
            <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-300">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const sam = {
    initials: 'SO',
    name: 'Sam Oakes',
    title: 'Co-Founder / AI Strategy',
    bio: 'Focused on bridging the AI adoption gap, aligning product strategy, technical feasibility, and organizational change to deliver measurable outcomes.',
    domains: ['AI Strategy', 'Workflow Automation', 'Cognitive Computing', 'Growth Engineering'],
  };

  const vance = {
    initials: 'JI', // Matches your "Jake Ice" initials
    name: 'Jake Ice',
    title: 'Co-Founder / Head of Business Operations',
    bio: 'Leads client acquisition, sales operations, and commercial strategy, managing proposals, partnerships, and financial operations to drive growth.',
    domains: ['Client Acquisition', 'Sales Operations', 'Proposals & BD', 'Financial Ops'],
  };

  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: FOUNDERS */}
          <div className="lg:col-span-2">
            <ProfileCard {...sam} alt={"Sam Oakes - AI Strategy Consultant at Nihilo"} />
            <div className="mt-6">
              <ProfileCard {...vance} />
            </div>
          </div>

          {/* RIGHT: UPDATED TECHNICAL PEDIGREE */}
          <aside className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Terminal size={18} className="text-blue-500" />
                <h3 className="text-white font-bold uppercase italic tracking-tighter text-xl">Technical Pedigree</h3>
              </div>
              
              <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-8 leading-relaxed">
                Core competencies and cloud certifications that shape our delivery.
              </p>

              <div className="mb-10">
                <h4 className="text-blue-500 text-[9px] font-mono uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                   <Cpu size={12} /> Core Competencies
                </h4>
                <ul className="text-zinc-300 text-[11px] font-mono uppercase tracking-widest space-y-3">
                  <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full" />
                    LLMOps & RAG Architecture
                  </li>
                  <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full" />
                    Agentic Workflow Orchestration
                  </li>
                  <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full" />
                    Cloud-native Modernization
                  </li>
                  <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full" />
                    Secure Tenant Deployments
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-blue-500 text-[9px] font-mono uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                  <Award size={12} /> Cloud Certifications
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-sm text-zinc-200 text-[9px] font-mono uppercase tracking-widest flex items-center justify-between">
                    AWS Certified <Shield size={10} className="text-zinc-500" />
                  </div>
                  <div className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-sm text-zinc-200 text-[9px] font-mono uppercase tracking-widest flex items-center justify-between">
                    Azure Solutions Architect <Shield size={10} className="text-zinc-500" />
                  </div>
                  <div className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-sm text-zinc-200 text-[9px] font-mono uppercase tracking-widest flex items-center justify-between">
                    CISSP Framework <Shield size={10} className="text-zinc-500" />
                  </div>
                  <div className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-sm text-zinc-200 text-[9px] font-mono uppercase tracking-widest flex items-center justify-between">
                    ISO27001 Ready <Shield size={10} className="text-zinc-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.4em]">
                Verified Production Standards
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;