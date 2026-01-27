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

  const getSolutionsByCategory = (category: string) => {
    return solutionPages.filter(page => page.category === category);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-8'}`}>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12">
        <div className={`flex items-center justify-between px-4 md:px-8 py-3 rounded-full border transition-all duration-500 
          ${isScrolled 
            ? 'bg-zinc-950/90 backdrop-blur-xl border-zinc-800 shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
            : 'bg-zinc-950/70 backdrop-blur-sm border-zinc-800/50 md:bg-transparent md:border-transparent'
          }`}>
          
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-2 h-2 bg-white rounded-full group-hover:shadow-[0_0_8px_#fff] transition-all duration-500"></div>
              <span className="text-sm font-black tracking-[0.2em] md:tracking-[0.3em] text-white uppercase italic">Nihilo</span>
            </Link>
          </div>

          <div className="hidden md:flex justify-center items-center space-x-8 lg:space-x-16">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="nav-link text-[11px] font-bold mono uppercase tracking-[0.4em] flex items-center gap-1"
              >
                Solutions
                <ChevronDown size={12} className={`transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSolutionsOpen && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[800px] bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl p-6 z-50">
                  <div className="grid grid-cols-4 gap-6">
                    {categories.map(({ name, icon: Icon, color }) => (
                      <div key={name}>
                        <div className={`flex items-center gap-2 mb-3 pb-2 border-b border-zinc-800`}>
                          <Icon size={14} className={color} />
                          <span className={`text-xs font-bold uppercase tracking-widest ${color}`}>{name}</span>
                        </div>
                        <div className="space-y-1 max-h-64 overflow-y-auto scrollbar-thin">
                          {getSolutionsByCategory(name).map((solution) => (
                            <Link
                              key={solution.slug}
                              href={`/solutions/${solution.slug}`}
                              onClick={() => setIsSolutionsOpen(false)}
                              className="block text-xs text-zinc-400 hover:text-white hover:bg-zinc-800/50 px-2 py-1.5 rounded transition-colors"
                            >
                              {solution.title.replace(' Solutions', '').replace(' Services', '').replace(' Implementation', '')}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <Link
                      href="/solutions"
                      onClick={() => setIsSolutionsOpen(false)}
                      className="text-xs text-blue-400 hover:text-blue-300 font-bold uppercase tracking-widest"
                    >
                      View All Solutions →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="nav-link text-[11px] font-bold mono uppercase tracking-[0.4em]"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://outlook.office.com/book/NihiloSolutions1@nihilosolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-cta"
            >
              <span>Book Call</span>
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 mx-2 p-6 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-4">
              <div>
                <button
                  onClick={() => setActiveMobileCategory(activeMobileCategory ? null : 'solutions')}
                  className="w-full flex items-center justify-between text-lg font-bold text-white uppercase tracking-widest py-2 border-b border-zinc-800"
                >
                  <span>Solutions</span>
                  <ChevronDown size={20} className={`transition-transform ${activeMobileCategory === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeMobileCategory === 'solutions' && (
                  <div className="mt-3 space-y-4">
                    {categories.map(({ name, icon: Icon, color }) => (
                      <div key={name}>
                        <div className={`flex items-center gap-2 mb-2`}>
                          <Icon size={14} className={color} />
                          <span className={`text-sm font-bold uppercase tracking-widest ${color}`}>{name}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1 pl-4">
                          {getSolutionsByCategory(name).slice(0, 4).map((solution) => (
                            <Link
                              key={solution.slug}
                              href={`/solutions/${solution.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-xs text-zinc-400 hover:text-white py-1"
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
                      className="block text-sm text-blue-400 font-bold uppercase tracking-widest pt-2"
                    >
                      View All →
                    </Link>
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-white uppercase tracking-widest py-2 border-b border-zinc-800 hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="https://outlook.office.com/book/NihiloSolutions1@nihilosolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center px-6 py-3 font-mono uppercase tracking-[0.2em] text-white rounded-sm border-2 border-blue-500 bg-zinc-900 hover:bg-blue-500 hover:text-black transition-all"
              >
                <span className="text-xs font-black">Book Call</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
