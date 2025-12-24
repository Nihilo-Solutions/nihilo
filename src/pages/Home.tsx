import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Booking from '../components/Booking';
import Security from '../components/Security';

import { 
  Github, 
  Linkedin, 
  Terminal, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Hash, 
  ArrowUpRight, 
  Command,
  Activity
} from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="pt-32 pb-16 bg-zinc-950 border-t border-zinc-900">
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
        {/* Brand Column */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-xl font-bold text-white tracking-[0.2em] italic uppercase">Nihilo</span>
          </div>
          <p className="text-zinc-500 max-w-sm mb-10 font-light leading-relaxed">
            Architecting the future of enterprise automation. Principals led engineering for AI and Cloud Native environments.
          </p>
          <div className="flex space-x-6">
            <a href="https://linkedin.com/company/nihilosolutions" target="_blank" rel="noopener" aria-label="LinkedIn" className="text-zinc-600 hover:text-white transition-colors">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a href="https://github.com/nihilosolutions" target="_blank" rel="noopener" aria-label="GitHub" className="text-zinc-600 hover:text-white transition-colors">
              <Github size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-[10px] mono uppercase tracking-[0.3em] text-white mb-8">Technical_Services</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-light">
            <li className="flex items-center space-x-3 group cursor-pointer">
              <Zap size={14} strokeWidth={1.5} className="group-hover:text-blue-400 transition-colors" />
              <a href="#services" className="group-hover:text-white transition-colors">AI Engineering</a>
            </li>
            <li className="flex items-center space-x-3 group cursor-pointer">
              <Command size={14} strokeWidth={1.5} className="group-hover:text-blue-400 transition-colors" />
              <a href="#services" className="group-hover:text-white transition-colors">Workflow Automation</a>
            </li>
            <li className="flex items-center space-x-3 group cursor-pointer">
              <Cpu size={14} strokeWidth={1.5} className="group-hover:text-blue-400 transition-colors" />
              <a href="#services" className="group-hover:text-white transition-colors">Cloud Native Design</a>
            </li>
            <li className="flex items-center space-x-3 group cursor-pointer">
              <ShieldCheck size={14} strokeWidth={1.5} className="group-hover:text-blue-400 transition-colors" />
              <a href="#services" className="group-hover:text-white transition-colors">Security Audits</a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-[10px] mono uppercase tracking-[0.3em] text-white mb-8">Access_Point</h4>
          <ul className="space-y-6 text-zinc-500 text-sm font-light">
            <li className="flex items-center space-x-3 group">
              <Hash size={16} strokeWidth={1.5} className="text-zinc-700" />
              <a href="mailto:eng@nihilosolutions.com" className="hover:text-white font-mono transition-colors">eng@nihilosolutions.com</a>
            </li>
            <li className="flex items-center space-x-3">
              <Activity size={16} strokeWidth={1.5} className="text-zinc-700" />
              <span className="font-mono text-[10px] tracking-widest uppercase">Status: Operational</span>
            </li>
            <li className="flex items-center space-x-3">
              <Terminal size={16} strokeWidth={1.5} className="text-zinc-700" />
              <span className="font-mono text-[10px] tracking-widest uppercase">Loc: SF_CA_USA</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-700 text-[10px] mono tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Nihilo Solutions LLC. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="mailto:nihilo@nihilosolutions.com" className="hover:text-zinc-400 transition-colors">Contact Engineering</a>
          <span className="text-zinc-800">|</span>
          <span className="text-zinc-800 italic">Principals Led</span>
        </div>
      </div>
    </div>
  </footer>
);

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-200 selection:bg-blue-500/30">
      <main>
        <Hero />
        <Services />
        
        {/* Readiness Assessment CTA */}
        <section id="assessment" className="py-24 bg-zinc-950">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
             <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 border border-blue-500/30 rounded-full bg-blue-500/5">
                <Activity size={14} className="text-blue-400" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400">System Diagnostic Available</span>
             </div>
             <h2 className="text-4xl font-bold text-white mb-8 italic uppercase tracking-tighter">Ready for AI implementation?</h2>
             <Link 
               to="/assessment"
               className="inline-flex items-center space-x-4 px-10 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase text-[10px] tracking-[0.3em] hover:border-blue-500 transition-all group"
             >
               <span>Start Readiness Protocol</span>
               <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </Link>
          </div>
        </section>

        <Security />
        <About />
        <Booking />
      </main>

      <Footer />
    </div>
  );
};

export default Home;