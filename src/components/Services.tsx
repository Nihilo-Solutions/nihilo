import React from 'react';
import { 
  Database, 
  Cpu, 
  Layers, 
  AlertTriangle, 
  Search, 
  BarChart2, 
  Wrench, 
  Zap, 
  Target 
} from 'lucide-react';

// Reusable Glowing Icon Component
const ServiceIcon = ({ icon: Icon, colorClass = "text-blue-400" }) => (
  <div className="relative mb-6 group">
    {/* Outer Glow Effect */}
    <div className="absolute -inset-2 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* The Glass Box */}
    <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl transition-all duration-300 group-hover:border-blue-500/50">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
      <Icon 
        size={24} 
        strokeWidth={1.5} 
        className={`${colorClass} drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]`} 
      />
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 space-y-8 md:space-y-0">
          <div className="max-w-md">
            <span className="text-[10px] mono uppercase tracking-[0.4em] text-zinc-600 mb-4 block">01 // Capabilities</span>
            <h2 className="text-4xl font-bold text-white tracking-tighter italic uppercase">Foundational Expertise</h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed mono">
            We operate at the intersection of high-fidelity design and deep system architecture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Enterprise RAG */}
          <article className="group p-10 bg-zinc-900/40 border border-zinc-900 rounded-2xl hover:bg-zinc-900/60 hover:border-zinc-800 transition-all duration-500">
            <ServiceIcon icon={Database} colorClass="text-blue-400" />
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase italic">
              Enterprise RAG Implementation
            </h3>
            
            <div className="text-[13px] text-zinc-500 space-y-5 font-light">
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-1 text-zinc-700 group-hover:text-blue-500/50 transition-colors" size={16} strokeWidth={1.5} />
                <div><span className="text-zinc-300 font-mono uppercase text-[10px] tracking-widest block mb-1">Problem:</span> Fragmented data, poor retrieval accuracy, uncontrolled hallucinations.</div>
              </div>
              <div className="flex items-start gap-4">
                <Search className="mt-1 text-zinc-700 group-hover:text-blue-500/50 transition-colors" size={16} strokeWidth={1.5} />
                <div><span className="text-zinc-300 font-mono uppercase text-[10px] tracking-widest block mb-1">Approach:</span> Build vectorized indexes, tuning retrieval & prompt templates; controlled context windowing.</div>
              </div>
              <div className="flex items-start gap-4">
                <Target className="mt-1 text-zinc-700 group-hover:text-blue-500/50 transition-colors" size={16} strokeWidth={1.5} />
                <div><span className="text-zinc-300 font-mono uppercase text-[10px] tracking-widest block mb-1">KPIs:</span> Precision@K, latency (ms), tokens/call cost.</div>
              </div>
            </div>
          </article>

          {/* 2. Agentic Automation */}
          <article className="group p-10 bg-zinc-900/40 border border-zinc-900 rounded-2xl hover:bg-zinc-900/60 hover:border-zinc-800 transition-all duration-500">
            <ServiceIcon icon={Cpu} colorClass="text-emerald-400" />
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase italic">
              Agentic Process Automation
            </h3>
            
            <div className="text-[13px] text-zinc-500 space-y-5 font-light">
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-1 text-zinc-700 group-hover:text-emerald-500/50 transition-colors" size={16} strokeWidth={1.5} />
                <div><span className="text-zinc-300 font-mono uppercase text-[10px] tracking-widest block mb-1">Problem:</span> Manual workflows, latency in decisioning and incident response.</div>
              </div>
              <div className="flex items-start gap-4">
                <Wrench className="mt-1 text-zinc-700 group-hover:text-emerald-500/50 transition-colors" size={16} strokeWidth={1.5} />
                <div><span className="text-zinc-300 font-mono uppercase text-[10px] tracking-widest block mb-1">Approach:</span> Define agent goals, safety sandboxes, orchestrate agents via serverless event patterns.</div>
              </div>
              <div className="flex items-start gap-4">
                <BarChart2 className="mt-1 text-zinc-700 group-hover:text-emerald-500/50 transition-colors" size={16} strokeWidth={1.5} />
                <div><span className="text-zinc-300 font-mono uppercase text-[10px] tracking-widest block mb-1">KPIs:</span> Manual steps removed, avg resolution time, throughput.</div>
              </div>
            </div>
          </article>

          {/* 3. Cloud-Native AI Infra */}
          <article className="group p-10 bg-zinc-900/40 border border-zinc-900 rounded-2xl hover:bg-zinc-900/60 hover:border-zinc-800 transition-all duration-500">
            <ServiceIcon icon={Layers} colorClass="text-purple-400" />
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase italic">
              Cloud-Native AI Infrastructure
            </h3>
            
            <div className="text-[13px] text-zinc-500 space-y-5 font-light">
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-1 text-zinc-700 group-hover:text-purple-500/50 transition-colors" size={16} strokeWidth={1.5} />
                <div><span className="text-zinc-300 font-mono uppercase text-[10px] tracking-widest block mb-1">Problem:</span> Monolithic infra, unpredictable costs, and single-tenant risk.</div>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="mt-1 text-zinc-700 group-hover:text-purple-500/50 transition-colors" size={16} strokeWidth={1.5} />
                <div><span className="text-zinc-300 font-mono uppercase text-[10px] tracking-widest block mb-1">Approach:</span> IaC, autoscaling containers, burst serverless patterns, and cost controls.</div>
              </div>
              <div className="flex items-start gap-4">
                <BarChart2 className="mt-1 text-zinc-700 group-hover:text-purple-500/50 transition-colors" size={16} strokeWidth={1.5} />
                <div><span className="text-zinc-300 font-mono uppercase text-[10px] tracking-widest block mb-1">KPIs:</span> Cost per throughput, RPO/RTO, deployment lead time.</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;