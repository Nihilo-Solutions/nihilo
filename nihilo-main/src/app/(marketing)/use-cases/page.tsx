import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Use Cases',
  description:
    'Real-world enterprise AI use cases and outcomes: tenant-local RAG, agentic automation, secure BYOK deployment for Finance, Healthcare, and Support.',
  alternates: { canonical: 'https://nihilosolutions.com/use-cases' },
};

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white antialiased pt-32 pb-16 px-6 md:px-12 lg:px-24">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight italic uppercase tracking-tighter">
          Proven Enterprise AI Use Cases: Tenant-local RAG & Agentic Automation
        </h1>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Deploy private, tenant-isolated retrieval-augmented generation (RAG) with
          BYOK encryption, strict zero-trust orchestration, and agentic automation
          for measurable operational gains.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid gap-12 lg:gap-20 lg:grid-cols-2 items-start">
        <div className="space-y-12">
          <article id="finance-compliance" className="prose dark:prose-invert">
            <h2 className="text-2xl font-semibold text-white">Finance Compliance Monitoring</h2>
            <p className="text-zinc-400">
              Pain: Financial institutions struggle to maintain continuous compliance
              across evolving regulations while processing high volumes of transactional
              data.
            </p>
            <p className="text-zinc-400">
              Solution: Tenant-local RAG provides encrypted, on-premise-like vector
              stores (BYOK) for sensitive ledger and transaction embeddings, combined
              with agentic automation to orchestrate periodic audits, anomaly
              detection, and automated reporting, without ever exporting customer
              data outside the tenant boundary.
            </p>
            <ul className="list-disc ml-5 text-zinc-400">
              <li>Faster compliance triage: reduce manual review time by 60%+</li>
              <li>Lower false positive rate in alerts through contextual retrieval</li>
              <li>Automated audit trail with append-only logs for every action</li>
              <li>Encrypted storage using customer-managed keys (BYOK)</li>
            </ul>
            <div className="mt-4">
              <Link href="/intake" className="inline-block bg-blue-500 hover:bg-blue-400 text-black font-bold px-4 py-2 rounded-md uppercase text-xs tracking-widest">
                Talk to a principal
              </Link>
            </div>
          </article>

          <article id="healthcare-claims" className="prose dark:prose-invert">
            <h2 className="text-2xl font-semibold text-white">Healthcare Claims Automation</h2>
            <p className="text-zinc-400">
              Pain: Claims processing is slow and error-prone; patient privacy and
              regulatory controls make cloud-native AI hard to adopt.
            </p>
            <p className="text-zinc-400">
              Solution: Tenant-local RAG keeps PHI-derived vectors inside an isolated
              vector DB, while agentic workflows automate claim routing, denials
              classification, and appeals drafting, all auditable and encrypted with
              customer-managed keys.
            </p>
            <ul className="list-disc ml-5 text-zinc-400">
              <li>Claims throughput improved by 3-5x with automated triage</li>
              <li>Reduced appeals turnaround time with AI-assisted drafting</li>
              <li>Full audit logs for regulatory review and HIPAA compliance</li>
              <li>Data never leaves tenant boundary, BYOK enforced</li>
            </ul>
            <div className="mt-4">
              <Link href="/intake" className="inline-block bg-blue-500 hover:bg-blue-400 text-black font-bold px-4 py-2 rounded-md uppercase text-xs tracking-widest">
                Talk to a principal
              </Link>
            </div>
          </article>

          <article id="customer-support" className="prose dark:prose-invert">
            <h2 className="text-2xl font-semibold text-white">AI-driven Customer Support</h2>
            <p className="text-zinc-400">
              Pain: Support teams need fast, accurate answers from proprietary
              knowledge bases while preserving customer data confidentiality.
            </p>
            <p className="text-zinc-400">
              Solution: Tenant-local RAG enables high-precision retrieval from your
              private knowledge base; agentic automation can create follow-ups,
              summarize conversations, and escalate with context, all under strict
              zero-trust orchestration.
            </p>
            <ul className="list-disc ml-5 text-zinc-400">
              <li>Faster mean time to resolution (MTTR) by 40-70%</li>
              <li>Higher first-contact resolution using contextual retrieval</li>
              <li>Automated escalations with full audit trail</li>
              <li>Secure egress and DLP policy enforcement</li>
            </ul>
            <div className="mt-4">
              <Link href="/intake" className="inline-block bg-blue-500 hover:bg-blue-400 text-black font-bold px-4 py-2 rounded-md uppercase text-xs tracking-widest">
                Talk to a principal
              </Link>
            </div>
          </article>
        </div>

        <aside className="w-full">
          <div className="sticky top-32">
            <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
              <h3 className="text-lg font-medium mb-3 text-white">Architecture</h3>
              <p className="text-zinc-500 mb-4 text-sm">Tenant-local RAG flow: BYOK, audit logs, secure egress.</p>
              <div className="w-full h-auto relative">
                <Image
                  src="/diagrams/tenant-local-rag.svg"
                  alt="Tenant-local RAG architecture: User to App to Orchestrator (zero-trust) to tenant-isolated Vector DB to LLM. Labels for BYOK, audit logs, and secure egress."
                  width={900}
                  height={360}
                  className="rounded-md"
                />
              </div>
              <p className="text-sm text-zinc-600 mt-3 font-mono text-[10px]">Diagram is served from `public/diagrams/tenant-local-rag.svg`</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
