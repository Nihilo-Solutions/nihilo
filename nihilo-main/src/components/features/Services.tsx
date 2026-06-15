import Link from 'next/link';
import {
  Database,
  Cpu,
  Layers
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ServiceIcon = ({ icon: Icon, colorClass = "text-blue-400" }: { icon: LucideIcon; colorClass?: string }) => (
  <div className="relative mb-6 group">
    <div className="absolute -inset-2 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
    <section id="services" className="py-16 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-24 space-y-4 md:space-y-0">
          <div className="max-w-md">
            <span className="text-[9px] md:text-[10px] mono uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-600 mb-3 md:mb-4 block">01 // Capabilities</span>
            <h2 id="foundational-expertise" className="text-2xl md:text-4xl font-bold text-white tracking-tighter italic uppercase">Foundational Expertise</h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-xs md:text-sm leading-relaxed mono">
            We operate at the intersection of high-fidelity design and deep system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

          {/* Card 1: Enterprise RAG implementation */}
          <article className="group p-6 md:p-10 bg-zinc-900/40 border border-zinc-900 rounded-2xl hover:bg-zinc-900/60 hover:border-zinc-800 transition-all duration-500">
            <ServiceIcon icon={Database} colorClass="text-blue-400" />
            <h4 id="enterprise-rag-implementation" className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight uppercase italic">
              Enterprise RAG implementation
            </h4>
            <p className="text-sm md:text-base text-blue-300 font-light italic mb-4 md:mb-6">
              Retrieval that stays in your tenancy.
            </p>
            <p className="text-[14px] text-zinc-300 mb-4 font-light leading-relaxed">
              Your team spends hours every week digging through scattered documents, emails, and systems for answers that already exist somewhere. We build a private AI search layer that surfaces those answers in seconds, with sensitive data never leaving your cloud.
            </p>
            <p className="text-[13px] text-zinc-500 mb-4 font-light">
              Production-grade RAG that addresses fragmented knowledge, unauditable hallucinations, and data egress, with nothing crossing your tenancy boundary.
            </p>
            <h5 className="text-sm text-zinc-300 uppercase tracking-wider mb-2">How we implement it</h5>
            <ul className="text-zinc-500 text-[13px] mb-4 space-y-2">
              <li>Secure ingestion pipelines that filter, normalize and redact PII before indexing.</li>
              <li>Tenant-local vector stores with BYOK KMS integration and strict network controls.</li>
              <li>Retrieval tuning, prompt templates and reranking to improve factuality.</li>
            </ul>
            <h5 className="text-sm text-zinc-300 uppercase tracking-wider mb-2">Key benefits & KPIs</h5>
            <ul className="text-zinc-500 text-[13px] space-y-2">
              <li>&gt;95% reduction in external data egress (typical Azure deployments).</li>
              <li>20-40% improvement in Precision@K on enterprise data lakes.</li>
              <li>&lt;200ms median retrieval latency for typical document stores.</li>
            </ul>
            <p className="mt-4 text-zinc-400 text-sm">
              Learn more in our <Link className="underline text-blue-400" href="/security">security posture</Link> or start with a technical readiness evaluation via our <Link className="underline text-blue-400" href="/intake">intake</Link>.
            </p>
          </article>

          {/* Card 2: Agentic process automation */}
          <article className="group p-6 md:p-10 bg-zinc-900/40 border border-zinc-900 rounded-2xl hover:bg-zinc-900/60 hover:border-zinc-800 transition-all duration-500">
            <ServiceIcon icon={Cpu} colorClass="text-emerald-400" />
            <h4 id="agentic-process-automation" className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight uppercase italic">
              Agentic process automation
            </h4>
            <p className="text-sm md:text-base text-emerald-300 font-light italic mb-4 md:mb-6">
              Workflow automation you can actually audit.
            </p>
            <p className="text-[14px] text-zinc-300 mb-4 font-light leading-relaxed">
              Repetitive operational work, lead routing, ticket triage, data entry, approval handoffs, eats your team's bandwidth and slows the business down. We automate that work with AI agents that operate inside controls you set, with a full audit trail for every action taken.
            </p>
            <p className="text-[13px] text-zinc-500 mb-4 font-light">
              Deterministic orchestration with controlled LLM agents, autonomous on routine work and human-in-the-loop on exceptions, with every agent action logged and replayable.
            </p>
            <h5 className="text-sm text-zinc-300 uppercase tracking-wider mb-2">How Nihilo delivers agentic automation</h5>
            <ul className="text-zinc-500 text-[13px] mb-4 space-y-2">
              <li>Define agent goals and safety constraints using reusable governance templates.</li>
              <li>Orchestrate agents with event-driven serverless patterns for reliability and idempotency.</li>
              <li>Integrate with ticketing, CI and observability stacks while enforcing RBAC and separation of duties.</li>
            </ul>
            <h5 className="text-sm text-zinc-300 uppercase tracking-wider mb-2">Key benefits & KPIs</h5>
            <ul className="text-zinc-500 text-[13px] space-y-2">
              <li>60-85% reduction in manual steps (typical back-office deployments).</li>
              <li>30-70% MTTR reduction via automated triage and remediation.</li>
              <li>100% of agent actions logged, traceable, and replayable.</li>
            </ul>
            <p className="mt-4 text-zinc-400 text-sm">
              See practical examples for <em>agentic automation on Azure</em> and schedule a focused conversation via our <Link className="underline text-blue-400" href="/intake">intake</Link>.
            </p>
          </article>

          {/* Card 3: Cloud-native AI infrastructure */}
          <article className="group p-6 md:p-10 bg-zinc-900/40 border border-zinc-900 rounded-2xl hover:bg-zinc-900/60 hover:border-zinc-800 transition-all duration-500">
            <ServiceIcon icon={Layers} colorClass="text-purple-400" />
            <h4 id="cloud-native-ai-infrastructure" className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight uppercase italic">
              Cloud-native AI infrastructure
            </h4>
            <p className="text-sm md:text-base text-purple-300 font-light italic mb-4 md:mb-6">
              Inference at enterprise scale, on your terms.
            </p>
            <p className="text-[14px] text-zinc-300 mb-4 font-light leading-relaxed">
              When AI usage starts mattering to the P&L, infrastructure decisions go from theoretical to existential. We build the AI backbone that scales with your business, runs on the cloud you already use, and keeps cost predictable as volume grows.
            </p>
            <p className="text-[13px] text-zinc-500 mb-4 font-light">
              Cloud-native AI platforms that treat model workloads as platform services, deployed in your tenancy with KMS integrations so you keep the keys.
            </p>
            <h5 className="text-sm text-zinc-300 uppercase tracking-wider mb-2">Core implementation patterns</h5>
            <ul className="text-zinc-500 text-[13px] mb-4 space-y-2">
              <li>IaC modules (Terraform/ARM) with secure-by-default parameterization.</li>
              <li>Autoscaling inference clusters, batching and model tiering to reduce per-request cost.</li>
              <li>Telemetry for model drift, A/B evaluation and cost dashboards to enforce governance.</li>
            </ul>
            <h5 className="text-sm text-zinc-300 uppercase tracking-wider mb-2">Key benefits & KPIs</h5>
            <ul className="text-zinc-500 text-[13px] space-y-2">
              <li>25-50% reduction in per-request inference cost via batching and caching.</li>
              <li>Multi-zone failover and autoscaling meeting enterprise RTO/RPO.</li>
              <li>Tenant-local deployments simplify SOC 2 / ISO 27001 evidence collection.</li>
            </ul>
            <p className="mt-4 text-zinc-400 text-sm">
              Read the deployment checklist on our <Link className="underline text-blue-400" href="/security">security posture page</Link> or request a platform design review through <Link className="underline text-blue-400" href="/intake">intake</Link>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
