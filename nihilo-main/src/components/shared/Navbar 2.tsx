'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Cloud, Server, Building2, Shield } from 'lucide-react';
import { solutionPages } from '@/lib/data/pages';

const categories = [
  { name: 'Azure', icon: Cloud, color: 'text-blue-400' },
  { name: 'AWS', icon: Server, color: 'text-orange-400' },
  { name: 'Industry', icon: Building2, color: 'text-emerald-400' },
  { name: 'Security', icon: Shield, color: 'text-purple-400' },
] as const;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = ['Services', 'About', 'Contact'];

  const getSolutionsByCategory = (category: string) =>
    solutionPages.filter(page => page.category === category);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2 md:py-3' : 'py-4 md:py-6'}`}>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12">
        <div
          className="flex items-center justify-between px-4 md:px-6 py-3 transition-all duration-500"
          style={{
            borderRadius: '9999px',
            border: isScrolled ? '1px solid var(--line)' : '1px solid transparent',
            background: isScrolled
              ? 'rgba(11,13,20,0.82)'
              : 'rgba(5,6,10,0.5)',
            backdropFilter: isScrolled ? 'blur(16px)' : 'blur(8px)',
            boxShadow: isScrolled ? '0 0 40px rgba(0,0,0,0.5)' : 'none',
          }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              {/* N-Aperture icon mark */}
              <svg width="28" height="28" viewBox="0 0 80 80" fill="none" style={{ color: 'white' }}>
                <rect x="8" y="8" width="64" height="64" rx="3" stroke="currentColor" strokeWidth="1.25" fill="none" opacity="0.4"/>
                <rect x="22" y="18" width="6" height="44" fill="currentColor"/>
                <rect x="52" y="18" width="6" height="44" fill="currentColor"/>
                <path d="M28 18 L58 62 L58 54 L28 18 Z" fill="currentColor"/>
                <rect x="36" y="36" width="8" height="8" fill="#0B0D14"/>
                <rect x="38" y="38" width="4" height="4" fill="#2D6BFF"/>
              </svg>
              <div>
                <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '15px', letterSpacing: '-0.02em', color: 'white' }}>
                  nihilo
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '8px', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.45)', display: 'block', textTransform: 'uppercase', lineHeight: 1 }}>
                  SOLUTIONS
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex justify-center items-center space-x-8 lg:space-x-14">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="nav-link flex items-center gap-1"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.36em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                Solutions
                <ChevronDown size={11} style={{ transition: 'transform 0.2s', transform: isSolutionsOpen ? 'rotate(180deg)' : 'none' }} />
              </button>

              {isSolutionsOpen && (
                <div style={{ position: 'fixed', top: '88px', left: '50%', transform: 'translateX(-50%)', width: '800px', background: 'rgba(11,13,20,0.97)', backdropFilter: 'blur(20px)', border: '1px solid var(--line)', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)', padding: '24px', zIndex: 50 }}>
                  <div className="grid grid-cols-4 gap-6">
                    {categories.map(({ name, icon: Icon, color }) => (
                      <div key={name}>
                        <div className={`flex items-center gap-2 mb-3 pb-2`} style={{ borderBottom: '1px solid var(--line)' }}>
                          <Icon size={13} className={color} />
                          <span className={`text-xs font-bold uppercase tracking-widest ${color}`} style={{ fontFamily: 'var(--font-mono)' }}>{name}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', maxHeight: '256px', overflowY: 'auto' }}>
                          {getSolutionsByCategory(name).map((solution) => (
                            <Link
                              key={solution.slug}
                              href={`/solutions/${solution.slug}`}
                              onClick={() => setIsSolutionsOpen(false)}
                              style={{ display: 'block', fontSize: '12px', color: 'var(--fg-dim)', padding: '5px 8px', borderRadius: '4px', transition: 'all 0.15s', fontFamily: 'var(--font-sans)', textDecoration: 'none' }}
                              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-dim)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                            >
                              {solution.title.replace(' Solutions', '').replace(' Services', '').replace(' Implementation', '')}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
                    <Link
                      href="/solutions"
                      onClick={() => setIsSolutionsOpen(false)}
                      style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--brand-azure-lit)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.28em', textDecoration: 'none' }}
                    >
                      View All Solutions →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="nav-link"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.36em', textDecoration: 'none' }}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://intake.nihilosolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-cta"
            >
              Get Started
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 transition-colors"
              style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div style={{ marginTop: '8px', marginInline: '8px', padding: '24px', background: 'rgba(11,13,20,0.97)', backdropFilter: 'blur(20px)', border: '1px solid var(--line)', borderRadius: '16px', maxHeight: '80vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <button
                  onClick={() => setActiveMobileCategory(activeMobileCategory ? null : 'solutions')}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', color: 'white', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '15px', padding: '8px 0', borderBottom: '1px solid var(--line)', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
                >
                  Solutions
                  <ChevronDown size={18} style={{ transition: 'transform 0.2s', transform: activeMobileCategory === 'solutions' ? 'rotate(180deg)' : 'none' }} />
                </button>

                {activeMobileCategory === 'solutions' && (
                  <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {categories.map(({ name, icon: Icon, color }) => (
                      <div key={name}>
                        <div className={`flex items-center gap-2 mb-2`}>
                          <Icon size={13} className={color} />
                          <span className={`text-sm font-bold uppercase tracking-widest ${color}`} style={{ fontFamily: 'var(--font-mono)' }}>{name}</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', paddingLeft: '16px' }}>
                          {getSolutionsByCategory(name).slice(0, 4).map((solution) => (
                            <Link
                              key={solution.slug}
                              href={`/solutions/${solution.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              style={{ fontSize: '12px', color: 'var(--fg-dim)', padding: '4px 0', textDecoration: 'none' }}
                            >
                              {solution.title.replace(' Solutions', '').replace(' Services', '').replace(' Implementation', '')}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link
                      href="/solutions"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--brand-azure-lit)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', paddingTop: '8px', textDecoration: 'none' }}
                    >
                      View All →
                    </Link>
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '0.2em', padding: '8px 0', borderBottom: '1px solid var(--line)', textDecoration: 'none' }}
                >
                  {item}
                </Link>
              ))}

              <a
                href="https://intake.nihilosolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center btn-primary mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
