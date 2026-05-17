'use client';

import {
  Github,
  Linkedin,
  Terminal,
  Cpu,
  Zap,
  ShieldCheck,
  Hash,
  Command,
  Activity
} from 'lucide-react';

const Footer: React.FC = () => (
  <footer style={{ paddingTop: '6rem', paddingBottom: '3rem', background: 'var(--brand-void)', borderTop: '1px solid var(--line)' }}>
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">

        {/* Brand column */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <svg width="32" height="32" viewBox="0 0 80 80" fill="none" style={{ color: 'white' }}>
              <rect x="8" y="8" width="64" height="64" rx="3" stroke="currentColor" strokeWidth="1.25" fill="none" opacity="0.4"/>
              <rect x="22" y="18" width="6" height="44" fill="currentColor"/>
              <rect x="52" y="18" width="6" height="44" fill="currentColor"/>
              <path d="M28 18 L58 62 L58 54 L28 18 Z" fill="currentColor"/>
              <rect x="36" y="36" width="8" height="8" fill="#0B0D14"/>
              <rect x="38" y="38" width="4" height="4" fill="#2D6BFF"/>
            </svg>
            <div>
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '17px', letterSpacing: '-0.02em', color: 'white' }}>nihilo</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '8px', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.4)', display: 'block', textTransform: 'uppercase', lineHeight: 1.2 }}>SOLUTIONS</span>
            </div>
          </div>

          <p style={{ color: 'var(--fg-dim)', maxWidth: '300px', marginBottom: '28px', fontWeight: 300, lineHeight: 1.65, fontSize: '14px' }}>
            We build AI automation that runs inside your cloud — cutting operating costs 30–60% and going live in 4–6 weeks.
          </p>

          {/* Azure partner badge */}
          <div className="flex items-center gap-2 mb-8 px-3 py-2 rounded" style={{ border: '1px solid rgba(45,107,255,0.3)', background: 'rgba(45,107,255,0.06)', display: 'inline-flex' }}>
            <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
              <path d="M11 2L2 7v8l9 5 9-5V7L11 2z" stroke="#5B8BFF" strokeWidth="1.5" fill="none"/>
              <path d="M11 2v18M2 7l9 4 9-4" stroke="#5B8BFF" strokeWidth="1.25"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--brand-azure-lit)', fontWeight: 600 }}>
              Microsoft Azure Partner
            </span>
          </div>

          <div className="flex gap-5">
            <a href="https://linkedin.com/company/nihilosolutions" target="_blank" rel="noopener" aria-label="LinkedIn"
              style={{ color: 'var(--fg-faint)', transition: 'color 0.2s' }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = 'white')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--fg-faint)')}>
              <Linkedin size={17} strokeWidth={1.5} />
            </a>
            <a href="https://github.com/nihilosolutions" target="_blank" rel="noopener" aria-label="GitHub"
              style={{ color: 'var(--fg-faint)', transition: 'color 0.2s' }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = 'white')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--fg-faint)')}>
              <Github size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Services column */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--fg)', marginBottom: '28px' }}>
            Services
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--fg-dim)', fontSize: '14px', fontWeight: 300 }}>
            <li>
              <a href="/privacy" style={{ color: 'var(--fg-dim)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'white')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--fg-dim)')}>
                Privacy Policy
              </a>
            </li>
            {[
              { icon: Zap, label: 'AI Engineering', href: '#services' },
              { icon: Command, label: 'Workflow Automation', href: '#services' },
              { icon: Cpu, label: 'Cloud Infrastructure', href: '#services' },
              { icon: ShieldCheck, label: 'Security Audits', href: '#services' },
            ].map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3 group" style={{ cursor: 'pointer' }}>
                <Icon size={13} strokeWidth={1.5} style={{ color: 'var(--fg-faint)', transition: 'color 0.2s' }} />
                <a href={href} style={{ color: 'var(--fg-dim)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = 'white')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--fg-dim)')}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--fg)', marginBottom: '28px' }}>
            Contact
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--fg-dim)', fontSize: '14px', fontWeight: 300 }}>
            <li className="flex items-center gap-3">
              <Hash size={15} strokeWidth={1.5} style={{ color: 'var(--fg-faint)' }} />
              <a href="mailto:support@nihilosolutions.com"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg-dim)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'white')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--fg-dim)')}>
                support@nihilosolutions.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Activity size={15} strokeWidth={1.5} style={{ color: 'var(--fg-faint)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--fg-faint)' }}>Status: Operational</span>
            </li>
            <li className="flex items-center gap-3">
              <Terminal size={15} strokeWidth={1.5} style={{ color: 'var(--fg-faint)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--fg-faint)' }}>Connecticut, USA</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4" style={{ paddingTop: '24px', borderTop: '1px solid var(--line)', fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--fg-faint)' }}>
        <p style={{ margin: 0 }}>© MMXXVI · Nihilo Solutions LLC · All rights reserved</p>
        <div className="flex items-center gap-6">
          <a href="/privacy" style={{ color: 'var(--fg-faint)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--fg-dim)')}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--fg-faint)')}>
            Privacy Policy
          </a>
          <span style={{ color: 'var(--n-800)' }}>|</span>
          <a href="mailto:nihilo@nihilosolutions.com" style={{ color: 'var(--fg-faint)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--fg-dim)')}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--fg-faint)')}>
            Contact Engineering
          </a>
          <span style={{ color: 'var(--n-800)' }}>|</span>
          <span style={{ color: 'var(--n-700)', fontStyle: 'italic' }}>Ex nihilo.</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
