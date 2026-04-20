import React from 'react';
import { Link } from 'react-router-dom';
import NewHero from '../components/NewHero';
import CaseStudy from '../components/CaseStudy';
import About from '../components/About';
import Booking from '../components/Booking';



import OutcomeGrid from '../components/OutcomeGrid';
import SolutionComparison from '../components/SolutionComparison';
import ProcessVisual from '../components/ProcessVisual';
import TechStackFooter from '../components/TechStackFooter';
import ROICalculator from '../components/ROICalculator';
import SEO from '../components/SEO';
import {
  Github,
  Linkedin,
  Hash,
  Activity,
  Terminal
} from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="pt-32 pb-16 bg-slate-950 border-t border-slate-900">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
        {/* Brand Column */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-xl font-bold text-white tracking-[0.2em] italic uppercase">Nihilo</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-10 font-light leading-relaxed">
            Architecting the future of enterprise automation. Principals led engineering for AI and Cloud Native environments.
          </p>
          <div className="flex space-x-6">
            <a href="https://linkedin.com/company/nihilosolutions" target="_blank" rel="noopener" aria-label="LinkedIn" className="text-slate-600 hover:text-white transition-colors">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a href="https://github.com/nihilosolutions" target="_blank" rel="noopener" aria-label="GitHub" className="text-slate-600 hover:text-white transition-colors">
              <Github size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-[10px] mono uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
          <ul className="space-y-4 text-slate-500 text-sm font-light">
            <li><Link to="/assessment" className="hover:text-blue-400 transition-colors">Readiness Assessment</Link></li>
            <li><Link to="/security" className="hover:text-blue-400 transition-colors">Security & Governance</Link></li>
            <li><a href="mailto:nihilo@nihilosolutions.com" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-[10px] mono uppercase tracking-[0.3em] text-white mb-8">Access_Point</h4>
          <ul className="space-y-6 text-slate-500 text-sm font-light">
            <li className="flex items-center space-x-3 group">
              <Hash size={16} strokeWidth={1.5} className="text-slate-700" />
              <a href="mailto:support@nihilosolutions.com" className="hover:text-white font-mono transition-colors">support@nihilosolutions.com</a>
            </li>
            <li className="flex items-center space-x-3">
              <Activity size={16} strokeWidth={1.5} className="text-slate-700" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-lime-400/70">Status: Operational</span>
            </li>
            <li className="flex items-center space-x-3">
              <Terminal size={16} strokeWidth={1.5} className="text-slate-700" />
              <span className="font-mono text-[10px] tracking-widest uppercase">Loc: CT_USA</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-700 text-[10px] mono tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Nihilo Solutions LLC. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="mailto:nihilo@nihilosolutions.com" className="hover:text-slate-400 transition-colors">Contact Engineering</a>
          <span className="text-slate-800">|</span>
          <span className="text-slate-800 italic">Principals Led</span>
        </div>
      </div>
    </div>
  </footer>
);

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <SEO
        title="Nihilo Solutions"
        description="Nihilo Solutions delivers secure, tenant-local RAG, LLM Ops, and agentic automation on Azure & AWS."
        canonical="https://nihilosolutions.com/"
      />

      <main>
        <NewHero />
        <ROICalculator />
        <OutcomeGrid />
        <CaseStudy />
        <About />
        <Booking />



        <SolutionComparison />
        <ProcessVisual />
        <TechStackFooter />
      </main>

      <Footer />
    </div>
  );
};

export default Home;