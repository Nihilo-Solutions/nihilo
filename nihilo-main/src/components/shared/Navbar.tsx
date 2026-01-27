'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Services', 'About', 'Contact'];

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

          <div className="hidden md:flex justify-center items-center space-x-12 lg:space-x-24">
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
          <div className="md:hidden mt-2 mx-2 p-6 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-2xl">
            <div className="flex flex-col space-y-4">
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
