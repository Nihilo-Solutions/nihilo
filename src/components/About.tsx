import React from 'react';
import { Terminal, Shield, Award, Cpu, Linkedin } from 'lucide-react';

const ProfileCard: React.FC<{
  initials: string;
  name: string;
  title: string;
  bio: string;
  linkedin: string;
  domains: string[];
  alt?: string;
}> = ({ initials, name, title, bio, linkedin, domains, alt }) => {
  return (
    <div className="border border-white/10 p-8 rounded-lg bg-[#0a0a0a]">
      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <div className="w-20 h-20 shrink-0 overflow-hidden rounded-md border border-white/10 bg-transparent mb-6 md:mb-0">
          <img
            src={`/headshots/${initials}.jpg`}
            loading="lazy"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = `/headshots/placeholder.svg`; }}
            alt={alt ?? `${name} - ${title} at Nihilo`}
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 20%' }}
          />
        </div>

        <div className="flex-1 w-full">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase italic tracking-tighter">{name}</h3>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-[#0077b5] transition-colors p-2">
              <Linkedin size={20} />
            </a>
          </div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mt-1">{title}</div>
          <div className="border-t border-white/5 mt-4 pt-4">
            <p className="text-zinc-400 text-sm leading-relaxed font-light">{bio}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {domains.map((d) => (
          <div key={d} className="border border-white/10 p-3 rounded-md flex items-center gap-3 bg-white/5">
            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]" />
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
    linkedin: 'https://linkedin.com/in/samoakes',
    bio: 'Bridging the gap between specialized AI deployments and measurable enterprise outcomes. Previously led engineering and cloud orchestration projects at top-tier firms, orchestrating tenant-local LLM and zero-trust cloud infrastructure. Architected automated systems yielding 30-60% reduction in manual operations.',
    domains: ['AI Strategy', 'Workflow Auto', 'Cloud Arch', 'Growth Eng'],
  };

  const vance = {
    initials: 'JI',
    name: 'Jake Ice',
    title: 'Co-Founder / Business Operations',
    linkedin: 'https://linkedin.com/in/jake-ice-nihilo',
    bio: 'Driving commercial strategy, partnerships, and operations. Over a decade of B2B enterprise sales and operational scaling experience at leading SaaS and cloud consultancy providers. Specializes in aligning technical RAG and agentic pipelines with core business KPIs and client success initiatives.',
    domains: ['Client Acq', 'Sales Ops', 'BD Strategy', 'Financial Ops'],
  };

  return (
    <section id="about" className="py-24 bg-navy-950 border-t border-navy-900 border-b">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-12">
                <span className="text-cyan-DEFAULT font-mono text-[10px] uppercase tracking-widest font-semibold block mb-4">Leadership</span>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-2 font-heading">
                    The Principals
                </h2>
                <p className="text-slate-400">Direct-access model. You work directly with the architects who build your systems.</p>
            </div>
            
            <ProfileCard {...sam} alt={"Sam Oakes - AI Strategy Consultant at Nihilo"} />
            <ProfileCard {...vance} />
          </div>

          <aside className="bg-navy-900/40 border border-navy-800 p-8 rounded-lg flex flex-col justify-between mt-12 lg:mt-0">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Terminal size={18} className="text-cyan-DEFAULT" />
                <h3 className="text-white font-bold uppercase tracking-tighter text-xl">Technical Pedigree</h3>
              </div>
              
              <p className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-8 leading-relaxed">
                Core competencies and cloud certifications that shape our delivery.
              </p>

              <div className="mb-10">
                <h4 className="text-cyan-DEFAULT text-[9px] font-mono uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                   <Cpu size={12} /> Core Competencies
                </h4>
                <ul className="text-slate-300 text-[11px] font-mono uppercase tracking-widest space-y-3">
                  <li className="flex items-center gap-3 border-b border-navy-800 pb-2">
                    <span className="w-1 h-1 bg-cyan-DEFAULT rounded-full" />
                    LLMOps & RAG Architecture
                  </li>
                  <li className="flex items-center gap-3 border-b border-navy-800 pb-2">
                    <span className="w-1 h-1 bg-cyan-DEFAULT rounded-full" />
                    Agentic Workflow Orchestr.
                  </li>
                  <li className="flex items-center gap-3 border-b border-navy-800 pb-2">
                    <span className="w-1 h-1 bg-cyan-DEFAULT rounded-full" />
                    Cloud-native Modernization
                  </li>
                  <li className="flex items-center gap-3 border-b border-navy-800 pb-2">
                    <span className="w-1 h-1 bg-cyan-DEFAULT rounded-full" />
                    Secure Tenant Deployments
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-cyan-DEFAULT text-[9px] font-mono uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                  <Award size={12} /> Key Certifications
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="p-3 bg-navy-950/50 border border-navy-800 rounded-sm text-slate-300 text-[9px] font-mono uppercase tracking-widest flex items-center justify-between">
                    AWS Solutions Architect Pro <Shield size={10} className="text-slate-500" />
                  </div>
                  <div className="p-3 bg-navy-950/50 border border-navy-800 rounded-sm text-slate-300 text-[9px] font-mono uppercase tracking-widest flex items-center justify-between">
                    AWS Security Specialty <Shield size={10} className="text-slate-500" />
                  </div>
                  <div className="p-3 bg-navy-950/50 border border-navy-800 rounded-sm text-slate-300 text-[9px] font-mono uppercase tracking-widest flex items-center justify-between">
                    Azure Solutions Architect Exp <Shield size={10} className="text-slate-500" />
                  </div>
                  <div className="p-3 bg-navy-950/50 border border-navy-800 rounded-sm text-slate-300 text-[9px] font-mono uppercase tracking-widest flex items-center justify-between">
                    CISSP Framework Aligned <Shield size={10} className="text-slate-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-800">
              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-[0.4em]">
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
