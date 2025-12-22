
import React from 'react';
import { Cpu, Zap, Cloud } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 space-y-8 md:space-y-0">
          <div className="max-w-md">
            <span className="text-[10px] mono uppercase tracking-[0.4em] text-zinc-600 mb-4 block">01 // Capabilities</span>
            <h2 className="text-4xl font-bold text-white tracking-tighter italic uppercase">Foundational Expertise</h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed mono">
            We operate at the intersection of high-fidelity design and deep system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. Enterprise RAG */}
          <article className="p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
            <div className="flex items-center space-x-4 mb-4">
              <Cpu className="text-blue-500" />
              <h3 className="text-xl font-bold text-white">Enterprise RAG Implementation</h3>
            </div>
            <div className="text-sm text-zinc-400 space-y-3">
              <div>
                <strong className="text-zinc-200">Problem:</strong> Fragmented data, poor retrieval accuracy, uncontrolled hallucinations.
              </div>
              <div>
                <strong className="text-zinc-200">Approach:</strong> Build vectorized indexes, tuning retrieval & prompt templates; controlled context windowing and eval suites.
              </div>
              <div>
                <strong className="text-zinc-200">KPIs:</strong> Precision@K, latency (ms), tokens/call cost.
              </div>
            </div>
          </article>

          {/* 2. Agentic Automation */}
          <article className="p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
            <div className="flex items-center space-x-4 mb-4">
              <Zap className="text-blue-500" />
              <h3 className="text-xl font-bold text-white">Agentic Process Automation</h3>
            </div>
            <div className="text-sm text-zinc-400 space-y-3">
              <div>
                <strong className="text-zinc-200">Problem:</strong> Manual workflows, latency in decisioning and incident response.
              </div>
              <div>
                <strong className="text-zinc-200">Approach:</strong> Define agent goals, safety sandboxes, orchestrate agents via serverless event patterns.
              </div>
              <div>
                <strong className="text-zinc-200">KPIs:</strong> Manual steps removed, avg resolution time, throughput.
              </div>
            </div>
          </article>

          {/* 3. Cloud-Native AI Infra */}
          <article className="p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
            <div className="flex items-center space-x-4 mb-4">
              <Cloud className="text-blue-500" />
              <h3 className="text-xl font-bold text-white">Cloud-Native AI Infrastructure</h3>
            </div>
            <div className="text-sm text-zinc-400 space-y-3">
              <div>
                <strong className="text-zinc-200">Problem:</strong> Monolithic infra, unpredictable costs, and single-tenant risk.
              </div>
              <div>
                <strong className="text-zinc-200">Approach:</strong> IaC, autoscaling containers, burst serverless patterns, and cost controls.
              </div>
              <div>
                <strong className="text-zinc-200">KPIs:</strong> Cost per throughput, RPO/RTO, deployment lead time.
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
