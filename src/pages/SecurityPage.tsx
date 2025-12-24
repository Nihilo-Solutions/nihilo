import React from 'react';
import { ShieldCheck, FileText, ArrowLeft, Lock, Globe, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <Link to="/" className="flex items-center gap-2 text-zinc-500 hover:text-blue-400 transition-colors mb-8 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-mono uppercase tracking-widest">Home Page</span>
            </Link>
            
            <div className="inline-flex items-center space-x-3 mb-4 px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/5">
              <ShieldCheck size={12} className="text-blue-400" />
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-blue-400">Security & Governance Framework</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white italic uppercase tracking-tighter">
              Trust & Sovereignty
            </h1>
          </div>
          
          <a 
            href="/nihilo_whitepaper.pdf" 
            download 
            className="flex items-center gap-3 px-8 py-4 bg-blue-500 text-black font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] animate-in fade-in slide-in-from-right-4 duration-700"
          >
            <FileText size={18} /> Download Whitepaper
          </a>
        </div>

        {/* Strategic Highlights - Building Trust before they read */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {[
            { icon: <Lock className="text-blue-500" />, title: "Zero Data Retention", desc: "Configured ZDR protocols for Azure OpenAI and AWS Bedrock." },
            { icon: <Globe className="text-blue-500" />, title: "Cloud Sovereignty", desc: "Architecture deployed within your private VPC/VNet perimeters." },
            { icon: <Server className="text-blue-500" />, title: "Audit Integrity", desc: "Immutable logs via AWS CloudTrail and Azure Monitor." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-2 italic">{item.title}</h3>
              <p className="text-zinc-500 text-[11px] leading-relaxed font-mono">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* PDF Viewer Container */}
        <div className="w-full h-[850px] bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden relative shadow-2xl animate-in fade-in zoom-in-95 duration-1000">
          <embed 
            src="/nihilo_whitepaper.pdf#toolbar=0&navpanes=0" 
            type="application/pdf" 
            width="100%" 
            height="100%" 
            className="rounded-xl grayscale-[0.5] opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Legal Footer */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.3em]">
            Document Ref: NIH-SEC-2025-V1.4 | Internal Disclosure
          </p>
          <div className="flex gap-8">
            <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest italic">AWS Partner Certified</span>
            <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest italic">Azure Security Framework</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;