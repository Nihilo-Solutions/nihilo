
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
        <div className={`flex justify-between items-center px-6 py-3 rounded-full border transition-all duration-500 ${isScrolled ? 'glass-panel border-zinc-800' : 'border-transparent'}`}>
          <div className="flex items-center space-x-12">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
              <span className="text-sm font-bold tracking-[0.2em] text-white uppercase italic">Nihilo</span>
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-[10px] mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-[10px] mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-[10px] mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <span className="hidden lg:block text-[10px] mono text-zinc-600 uppercase tracking-tighter">
              Availability: ACTIVE
            </span>
            <a
              href="https://outlook.office.com/book/NihiloSolutions1@nihilosolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 font-mono uppercase tracking-[0.1em] text-white rounded-sm border border-blue-400 bg-zinc-800 transition-all duration-300"
              style={{ boxShadow: '2px 2px 0 rgba(0,0,0,1)' }}
            >
              <span className="text-blue-400 mr-2">+</span>
              <span>Book Call</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
