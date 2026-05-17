'use client';

import Image from 'next/image';
import { Terminal, Shield, Award, Cpu, Linkedin, Building2, FileText, Lock } from 'lucide-react';

const ProfileCard: React.FC<{
  initials: string;
  name: string;
  title: string;
  bio: string;
  linkedin: string;
  roles: { label: string; org: string }[];
  domains: string[];
  alt?: string;
}> = ({ initials, name, title, bio, linkedin, roles, domains, alt }) => {
  return (
    <div style={{ border: '1px solid var(--line)', padding: '2rem', borderRadius: 'var(--r-card)', background: 'var(--brand-void)' }}>
      <div className="flex items-start space-x-6">
        <div className="w-20 h-20 overflow-hidden relative flex-shrink-0"
          style={{ borderRadius: '8px', border: '1px solid var(--line)', background: 'var(--n-800)' }}>
          <Image
            src={`/headshots/${initials}.jpg`}
            alt={alt ?? `${name} - ${title} at Nihilo`}
            fill
            sizes="80px"
            className="object-cover"
            style={{ objectPosition: '50% 20%' }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start w-full gap-2">
            <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '26px', fontWeight: 600, color: 'var(--fg)', letterSpacing: '-0.02em', textTransform: 'uppercase', fontStyle: 'italic', margin: 0 }}>
              {name}
            </h3>
            <a href={linkedin} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--fg-faint)', transition: 'color 0.2s', padding: '6px', flexShrink: 0 }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = '#0077b5')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--fg-faint)')}>
              <Linkedin size={18} />
            </a>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--fg-dim)', marginTop: '8px' }}>
            {title}
          </div>
          <div style={{ borderTop: '1px solid var(--line)', marginTop: '14px', paddingTop: '14px' }}>
            <p style={{ color: 'var(--fg-dim)', fontSize: '14px', lineHeight: 1.65, fontWeight: 300 }}>{bio}</p>
          </div>
        </div>
      </div>

      {/* Experience roles */}
      {roles.length > 0 && (
        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--fg-faint)', display: 'block', marginBottom: '10px' }}>
            Experience
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {roles.map(role => (
              <div key={role.label} className="flex items-center gap-2">
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--brand-azure)', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--fg-mute)' }}>
                  {role.label}
                </span>
                {role.org && (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--fg-faint)' }}>
                    · {role.org}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Domain tags */}
      <div className="grid grid-cols-2 gap-3 mt-5">
        {domains.map((d) => (
          <div key={d} className="flex items-center gap-2.5" style={{ border: '1px solid var(--line)', padding: '10px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--brand-azure)', boxShadow: '0 0 5px var(--brand-azure)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--fg-mute)' }}>{d}</span>
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
    title: 'Co-Founder · Lead AI Architect',
    linkedin: 'https://linkedin.com/in/samoakes',
    bio: 'Sam designs and builds the AI systems that power Nihilo\'s enterprise deployments. With a background spanning AI architecture and security analysis, he has led projects for enterprise clients — building AI-driven pipelines, security-hardened cloud systems, and automation tools that eliminate manual operations. He has written case studies on real-world AI deployments and holds hands-on experience across the full Azure and AWS stack.',
    roles: [
      { label: 'Lead AI Architect', org: 'Nihilo Solutions' },
      { label: 'Junior Security Analyst', org: 'BlackPenguin' },
      { label: 'Enterprise Project Lead', org: 'Multiple Clients' },
    ],
    domains: ['AI Architecture', 'Security Analysis', 'Cloud Infrastructure', 'Enterprise Automation'],
  };

  const vance = {
    initials: 'JI',
    name: 'Jake Ice',
    title: 'Co-Founder · Head of Business Operations',
    linkedin: 'https://linkedin.com/in/jake-ice-nihilo',
    bio: 'Jake runs the commercial side — partnerships, client relationships, and making sure every engagement delivers measurable ROI. With over a decade in B2B enterprise sales and operations at leading SaaS and cloud consulting firms, he translates complex technical capabilities into clear business outcomes.',
    roles: [
      { label: 'Head of Business Operations', org: 'Nihilo Solutions' },
      { label: 'Enterprise Sales Lead', org: 'SaaS & Cloud Consulting' },
    ],
    domains: ['Client Success', 'Sales Operations', 'Business Development', 'Financial Operations'],
  };

  return (
    <section id="about" className="py-24" style={{ background: 'var(--brand-void)' }}>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-12">
          <span className="eyebrow mb-3 block">04 // The Team</span>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em', color: 'var(--fg)', fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
            Built by Engineers, <em style={{ color: 'var(--brand-azure-lit)' }}>Not Salespeople.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <ProfileCard {...sam} alt="Sam Oakes - Lead AI Architect at Nihilo Solutions" />
            <div className="mt-6">
              <ProfileCard {...vance} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">

            {/* Technical pedigree */}
            <div className="flex flex-col" style={{ border: '1px solid var(--line)', padding: '2rem', borderRadius: 'var(--r-card)', background: 'rgba(255,255,255,0.015)' }}>
              <div className="flex items-center gap-3 mb-5">
                <Terminal size={16} style={{ color: 'var(--brand-azure)' }} />
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '18px', fontWeight: 600, color: 'var(--fg)', textTransform: 'uppercase', fontStyle: 'italic', margin: 0 }}>
                  Technical Background
                </h3>
              </div>

              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--fg-faint)', marginBottom: '20px', lineHeight: 1.7 }}>
                Core skills and cloud credentials that shape every project.
              </p>

              <div className="mb-8">
                <h4 className="flex items-center gap-2 mb-4" style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--brand-azure)', margin: '0 0 14px' }}>
                  <Cpu size={11} /> Core Skills
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['AI System Design & Architecture', 'Security Analysis & Hardening', 'Workflow & Process Automation', 'Cloud-Native Infrastructure', 'Enterprise RAG Pipelines'].map(item => (
                    <li key={item} className="flex items-center gap-3" style={{ borderBottom: '1px solid var(--line)', paddingBottom: '8px', fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--fg-mute)' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--brand-azure)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 mb-4" style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--brand-azure)', margin: '0 0 14px' }}>
                  <Award size={11} /> Certifications
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {['AWS Solutions Architect Pro', 'Azure Solutions Architect Expert', 'AWS Security Specialty', 'CISSP Framework Aligned'].map(cert => (
                    <div key={cert} className="flex items-center justify-between" style={{ padding: '10px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--line)', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--fg-mute)' }}>
                      {cert}
                      <Shield size={9} style={{ color: 'var(--fg-faint)', flexShrink: 0 }} />
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.4em', color: 'var(--fg-faint)' }}>
                  Verified Production Standards
                </span>
              </div>
            </div>

            {/* Azure Partner badge */}
            <div className="flex flex-col items-start" style={{ border: '1px solid rgba(45,107,255,0.3)', padding: '1.5rem', borderRadius: 'var(--r-card)', background: 'rgba(45,107,255,0.06)' }}>
              <div className="flex items-center gap-3 mb-3">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L2 7v8l9 5 9-5V7L11 2z" stroke="var(--brand-azure-lit)" strokeWidth="1.5" fill="none" /><path d="M11 2v18M2 7l9 4 9-4" stroke="var(--brand-azure-lit)" strokeWidth="1.25" /></svg>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--brand-azure-lit)', fontWeight: 600 }}>
                  Microsoft Azure Partner
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', lineHeight: 1.65, color: 'var(--fg-dim)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Recognized Azure partner — vetted for enterprise-grade AI deployments on Microsoft infrastructure.
              </p>
            </div>

            {/* Enterprise work highlights */}
            <div style={{ border: '1px solid var(--line)', padding: '1.5rem', borderRadius: 'var(--r-card)', background: 'rgba(255,255,255,0.015)' }}>
              <div className="flex items-center gap-3 mb-4">
                <Building2 size={15} style={{ color: 'var(--brand-azure)' }} />
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--fg-dim)', margin: 0 }}>
                  Enterprise Work
                </h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Enterprise AI pipeline builds',
                  'Security audits & assessments',
                  'Published case studies',
                  'Azure infrastructure projects',
                  'Compliance-ready deployments',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--brand-azure)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--fg-mute)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case studies callout */}
            <div style={{ border: '1px solid var(--line)', padding: '1.5rem', borderRadius: 'var(--r-card)', background: 'rgba(255,255,255,0.015)' }}>
              <div className="flex items-center gap-3 mb-3">
                <FileText size={15} style={{ color: 'var(--brand-azure)' }} />
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--fg-dim)', margin: 0 }}>
                  Case Studies
                </h4>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', lineHeight: 1.65, color: 'var(--fg-faint)', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Real-world results from enterprise AI deployments — documented and published.
              </p>
              <a href="#case-studies" style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--brand-azure-lit)', textDecoration: 'none' }}>
                View Case Studies →
              </a>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
