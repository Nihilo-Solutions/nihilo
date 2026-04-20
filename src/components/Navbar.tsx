import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className={`flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-500 
          ${isScrolled
            ? 'bg-navy-950/80 backdrop-blur-md border border-navy-800 shadow-lg'
            : 'bg-transparent border border-transparent'
          }`}>

          {/* Left: Brand */}
          <div className="flex justify-start">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-DEFAULT to-accent flex items-center justify-center shadow-lg shadow-cyan-DEFAULT/20 group-hover:shadow-cyan-DEFAULT/40 transition-all duration-300">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading group-hover:text-cyan-light transition-colors">Nihilo</span>
            </a>
          </div>

          {/* Center: Navigation */}
          <div className="hidden md:flex justify-center items-center space-x-8">
            {['Services', 'Methodology', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-DEFAULT transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="flex justify-end items-center">
            <a
              href="https://intake.nihilosolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white rounded-lg bg-accent hover:bg-accent-dark border border-accent-light/20 transition-all duration-300 hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)] shadow-md"
            >
              Start Readiness Protocol
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;