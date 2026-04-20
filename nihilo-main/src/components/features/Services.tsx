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
          
          <article className="group p-6 md:p-10 bg-zinc-900/40 border border-zinc-900 rounded-2xl hover:bg-zinc-900/60 hover:border-zinc-800 transition-all duration-500">
            <ServiceIcon icon={Database} colorClass="text-blue-400" />
            <h4 id="enterprise-rag-implementation" className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 tracking-tight uppercase italic">
              Enterprise RAG Implementation
            </h4>
            <p className="text-[13px] text-zinc-500 mb-4 font-light">
              Organizations scaling LLM features frequently confront fragmented knowledge, unpredictable hallucinations, and regulatory exposure when sensitive information leaves the tenancy. Nihilo solves this with a production-grade enterprise RAG implementation that keeps embeddings, vector indexes, and retrieval logic inside your cloud tenancy (tenant-local RAG). We normalize and redact sensitive fields during ingestion, deploy vector databases in your VPC/VNet, and use hybrid retrieval (semantic + metadata) combined with reranking to reduce hallucination risk while preserving auditability and data residency.
            </p>
            <h5 className="text-sm text-zinc-300 uppercase tracking-wider mb-2">How we implement it</h5>
            <ul className="text-zinc-500 text-[13px] mb-4 space-y-2">
              <li>Secure ingestion pipelines that filter, normalize and redact PII before indexing.</li>
              <li>Tenant-local vector stores with BYOK KMS integration and strict network controls.</li>
              <li>Retrieval tuning, prompt templates and reranking to improve factuality.</li>
            </ul>
            <h5 className="text-sm text-zinc-300 uppercase tracking-wider mb-2">Key benefits & KPIs</h5>
            <ul className="text-zinc-500 text-[13px] space-y-2">
              <li>Reduced data exposure: typical Azure deployments show &gt;95% reduction in external data egress.</li>
              <li>Typically improves Precision@K by 20–40% on enterprise data lakes through tuned retrieval and reranking.</li>
              <li>Median retrieval latency &lt;200ms for typical document stores, supporting enterprise SLAs.</li>
            </ul>
            <p className="mt-4 text-zinc-400 text-sm">
              Learn more in our <Link className="underline text-blue-400" href="/security">Security Whitepaper</Link> or start with a technical readiness evaluation via the <Link className="underline text-blue-400" href="/assessment">AI Readiness Assessment</Link>.
            </p>
          </article>

          <article className="group p-6 md:p-10 bg-zinc-900/40 border border-zinc-900 rounded-2xl hover:bg-zinc-900/60 hover:border-zinc-800 transition-all duration-500">
            <ServiceIcon icon={Cpu} colorClass="text-emerald-400" />
            <h4 id="agentic-process-automation" className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 tracking-tight uppercase italic">
              Agentic Process Automation
            </h4>
            <p className="text-[13px] text-zinc-500 mb-4 font-light">
              Many enterprises struggle with slow, error-prone workflows that rely on manual handoffs and brittle integrations. Nihilo's agentic process automation blends deterministic orchestration with controlled LLM agents to automate multi-step business processes while preserving governance. Agents operate inside policy sandboxes with clear role separation and observable action trails, enabling autonomous behavior for routine tasks and human-in-the-loop control for exceptions.
            </p>
            <h5 className="text-sm text-zinc-300 uppercase tracking-wider mb-2">How Nihilo delivers agentic automation</h5>
            <ul className="text-zinc-500 text-[13px] mb-4 space-y-2">
              <li>Define agent goals and safety constraints using reusable governance templates.</li>
              <li>Orchestrate agents with event-driven serverless patterns for reliability and idempotency.</li>
              <li>Integrate with ticketing, CI and observability stacks while enforcing RBAC and separation of duties.</li>
            </ul>
            <h5 className="text-sm text-zinc-300 uppercase tracking-wider mb-2">Key benefits & KPIs</h5>
            <ul className="text-zinc-500 text-[13px] space-y-2">
              <li>Typically reduces manual steps by 60–85% in back-office operations based on our Azure deployments.</li>
              <li>Decrease Mean Time To Resolution (MTTR) by typically 30–70% through automated triage and remediation.</li>
              <li>Full auditability: 100% of agent actions are logged, traceable, and replayable for compliance.</li>
            </ul>
            <p className="mt-4 text-zinc-400 text-sm">
              See practical examples for <em>agentic automation on Azure</em> and schedule a focused assessment via our <Link className="underline text-blue-400" href="/assessment">AI Readiness Assessment</Link> or <a className="underline text-blue-400" href="#contact">book a discovery call</a>.
            </p>
          </article>

          <article className="group p-6 md:p-10 bg-zinc-900/40 border border-zinc-900 rounded-2xl hover:bg-zinc-900/60 hover:border-zinc-800 transition-all duration-500">
            <ServiceIcon icon={Layers} colorClass="text-purple-400" />
            <h4 id="cloud-native-ai-infrastructure" className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 tracking-tight uppercase italic">
              Cloud-Native AI Infrastructure
            </h4>
            <p className="text-[13px] text-zinc-500 mb-4 font-light">
              Deploying AI at enterprise scale requires infrastructure that balances performance, cost predictability, and security. Nihilo engineers cloud-native AI platforms that treat model workloads as platform services: autoscaling inference clusters, request batching and caching, and telemetry-driven governance. Where compliance demands it, we deploy tenant-local infrastructure with strict network controls and KMS integrations so your inference and embedding pipelines remain under your control.
            </p>
            <h5 className="text-sm text-zinc-300 uppercase tracking-wider mb-2">Core implementation patterns</h5>
            <ul className="text-zinc-500 text-[13px] mb-4 space-y-2">
              <li>IaC modules (Terraform/ARM) with secure-by-default parameterization.</li>
              <li>Autoscaling inference clusters, batching and model tiering to reduce per-request cost.</li>
              <li>Telemetry for model drift, A/B evaluation and cost dashboards to enforce governance.</li>
            </ul>
            <h5 className="text-sm text-zinc-300 uppercase tracking-wider mb-2">Key benefits & KPIs</h5>
            <ul className="text-zinc-500 text-[13px] space-y-2">
              <li>Lower inference costs: batching & caching commonly yield 25–50% reduction in per-request spend.</li>
              <li>Operational resilience: multi-zone failover and autoscaling meet enterprise RTO/RPO targets.</li>
              <li>Security posture: tenant-local deployments and KMS simplify SOC 2 / ISO 27001 evidence collection.</li>
            </ul>
            <p className="mt-4 text-zinc-400 text-sm">
              Read the deployment checklist in our <Link className="underline text-blue-400" href="/security">Security Whitepaper</Link> or request a platform design review during your <Link className="underline text-blue-400" href="/assessment">readiness assessment</Link>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
