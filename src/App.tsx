
import React from 'react';
import Navbar from './components/NavbarFix';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Security from './components/Security';
// ChatAssistant removed — chat/Gemini features are not required for deployment
import { Mail, Github, Linkedin, MapPin, Globe, Server, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="pt-32 pb-16 bg-zinc-950 border-t border-zinc-900">
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-xl font-bold text-white tracking-[0.2em] italic uppercase">Nihilo</span>
          </div>
          <p className="text-zinc-500 max-w-sm mb-10 font-light leading-relaxed">
            Architecting the future of enterprise automation. Principals-led engineering for AI and Cloud Native environments.
          </p>
          <div className="flex space-x-6">
            <a href="https://linkedin.com/company/nihilosolutions" target="_blank" rel="noopener" aria-label="Nihilo LinkedIn" className="text-zinc-600 hover:text-white transition-colors">
              <Linkedin size={18} aria-hidden="false" role="img" />
            </a>
            <a href="https://github.com/nihilosolutions" target="_blank" rel="noopener" aria-label="Nihilo GitHub" className="text-zinc-600 hover:text-white transition-colors">
              <Github size={18} aria-hidden="false" role="img" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] mono uppercase tracking-[0.3em] text-white mb-8">Technical Services</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-light">
            <li><a href="#services" className="hover:text-white transition-colors">AI Engineering</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Workflow Automation</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">AWS/Azure Design</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Security Audits</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] mono uppercase tracking-[0.3em] text-white mb-8">Access_Point</h4>
          <ul className="space-y-6 text-zinc-500 text-sm font-light">
            <li className="flex items-start space-x-3">
              <Mail size={16} className="text-zinc-400 mt-1" />
              <a href="mailto:eng@nihilosolutions.com" className="hover:text-white">eng@nihilosolutions.com</a>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-zinc-400 mt-1" />
              <span>San Francisco, CA</span>
            </li>
            <li className="flex items-start space-x-3">
              <Globe size={16} className="text-zinc-400 mt-1" />
              <a href="/" className="hover:text-white">nihilo.solutions</a>
            </li>
          </ul>
        </div>
      </div>
      
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-700 text-[10px] mono tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Nihilo Solutions LLC. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-zinc-400 transition-colors">Terms of Engagement</a>
          <a href="mailto:nihilo@nihilosolutions.com" className="hover:text-zinc-400 transition-colors">nihilo@nihilosolutions.com</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <Services />
      <Security />
      <About />
      
      {/* Persistent CTA Section pointing to Booking */}
      <section className="py-32 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="relative border border-zinc-800 bg-zinc-900/10 p-16 md:p-24 text-center overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <Server size={40} className="mx-auto text-zinc-700 mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase italic">AI Automation Use Cases Ready to automate?</h2>
              <p className="text-zinc-400 text-lg mb-10 font-light leading-relaxed">
                Discover AI Automation Use Cases from RAG-backed knowledge systems to cloud-native modernization. Connect with our engineering principals to architect your next AI-driven Azure or AWS environment.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-3 px-12 py-5 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all"
              >
                <span>Request Technical Audit</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Booking />
      <Footer />
    </div>
  );
};

export default App;
