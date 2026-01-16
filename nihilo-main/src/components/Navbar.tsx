import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className={`grid grid-cols-3 items-center px-8 py-3 rounded-full border transition-all duration-500 
          ${isScrolled 
            ? 'bg-zinc-950/90 backdrop-blur-xl border-zinc-800 shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent'
          }`}>
          
          {/* Left: Brand */}
          <div className="flex justify-start">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-2 h-2 bg-white rounded-full group-hover:shadow-[0_0_8px_#fff] transition-all duration-500"></div>
              <span className="text-sm font-black tracking-[0.3em] text-white uppercase italic">Nihilo</span>
            </a>
          </div>

          {/* Center: High-Contrast Navigation */}
          <div className="hidden md:flex justify-center items-center space-x-24">
            {['Services', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative group text-[11px] font-bold mono uppercase tracking-[0.4em] text-zinc-100 transition-all duration-300"
              >
                {/* Glowing Text on Hover */}
                <span className="group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300">
                  {item}
                </span>
                
                {/* Technical Underline Indicator */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_5px_#3b82f6]"></span>
              </a>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="flex justify-end items-center">
            <a
              href="https://outlook.office.com/book/NihiloSolutions1@nihilosolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 font-mono uppercase tracking-[0.2em] text-white rounded-sm border-2 border-blue-500 bg-zinc-900 transition-all duration-300 hover:bg-blue-500 hover:text-black hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              <span className="mr-2 font-bold"></span>
              <span className="text-[10px] font-black">Book Call</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;