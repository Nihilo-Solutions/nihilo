import React from 'react';

const ProfileCard: React.FC<{
  initials: string;
  name: string;
  title: string;
  bio: string;
  domains: string[];
}> = ({ initials, name, title, bio, domains }) => {
  return (
    <div className="border border-white/10 p-8 rounded-lg bg-[#0a0a0a]">
      <div className="flex items-start space-x-6">
        <div className="w-20 h-20 flex items-center justify-center rounded-md border border-white/10 bg-transparent text-white/80 text-lg font-bold">
          {initials}
        </div>

        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white">{name}</h3>
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mt-2">{title}</div>
          <div className="border-t border-white/5 mt-4 pt-4">
            <p className="text-zinc-400 text-sm leading-relaxed">{bio}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {domains.map((d) => (
          <div key={d} className="border border-white/10 p-3 rounded-md flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const sam = {
    initials: 'JI',
    name: 'Jake Ice',
    title: 'Co-Founder / Head of Business Operations',
    bio: 'Leads client acquisition, sales operations, and commercial strategy — managing proposals, partnerships, and financial operations to drive growth.',
    domains: ['Client Acquisition', 'Sales Operations', 'Proposals & BD', 'Financial Ops'],
  };

  const vance = {
    initials: 'AV',
    name: 'A. Vance',
    title: 'Principal Engineer / Technical Architecture',
    bio: 'Focused on the intersection of distributed systems and cognitive computing. Previously led technical strategy for cloud-native modernization across financial and logistics sectors.',
    domains: ['LLM Operations', 'Azure Architecture', 'System Resiliency', 'RAG Design'],
  };

  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProfileCard {...sam} />
          <ProfileCard {...vance} />
        </div>
      </div>
    </section>
  );
};

export default About;
