import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Use Cases — Enterprise AI Use Cases | Nihilo Solutions',
  description:
    'Real-world enterprise AI use cases and outcomes: tenant-local RAG, agentic automation, secure BYOK deployment for Finance, Healthcare, and Support.',
}

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased py-16 px-6 md:px-12 lg:px-24">
      {/* Hero */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          Proven Enterprise AI Use Cases — Tenant-local RAG & Agentic Automation
        </h1>
        <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
          Deploy private, tenant-isolated retrieval-augmented generation (RAG) with
          BYOK encryption, strict zero-trust orchestration, and agentic automation
          for measurable operational gains.
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid gap-12 lg:gap-20 lg:grid-cols-2 items-start">
        {/* Left column: use cases */}
        <div className="space-y-12">
          {/* Finance / Compliance */}
          <article id="finance-compliance" className="prose dark:prose-invert">
            <h2 className="text-2xl font-semibold">Finance Compliance Monitoring</h2>
            <p className="text-neutral-300">
              Pain: Financial institutions struggle to maintain continuous compliance
              across evolving regulations while processing high volumes of transactional
              data.
            </p>
            <p className="text-neutral-300">
              Solution: Tenant-local RAG provides encrypted, on-premise-like vector
              stores (BYOK) for sensitive ledger and transaction embeddings, combined
              with agentic automation to orchestrate periodic audits, anomaly
              detection, and automated reporting — without ever exporting customer
              data outside the tenant boundary.
            </p>
            <ul className="list-disc ml-5 text-neutral-300">
              <li>Faster compliance triage: reduce manual review time by 60%+</li>
              <li>Lower false positive rate in alerts through contextual retrieval</li>
              <li>Automated audit trail with append-only logs for every action</li>
              <li>Encrypted storage using customer-managed keys (BYOK)</li>
            </ul>
            <div className="mt-4">
              <a href="/assessment" className="inline-block bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-md mr-3">
                Start an Assessment
              </a>
              <a href="/#contact" className="inline-block border border-neutral-700 text-neutral-100 px-4 py-2 rounded-md">
                Contact Sales
              </a>
            </div>
          </article>

          {/* Healthcare Claims */}
          <article id="healthcare-claims" className="prose dark:prose-invert">
            <h2 className="text-2xl font-semibold">Healthcare Claims Automation</h2>
            <p className="text-neutral-300">
              Pain: Claims processing is slow and error-prone; patient privacy and
              regulatory controls make cloud-native AI hard to adopt.
            </p>
            <p className="text-neutral-300">
              Solution: Tenant-local RAG keeps PHI-derived vectors inside an isolated
              vector DB, while agentic workflows automate claim routing, denials
              classification, and appeals drafting — all auditable and encrypted with
              customer-managed keys.
            </p>
            <ul className="list-disc ml-5 text-neutral-300">
              <li>Claims throughput improved by 3–5x with automated triage</li>
              <li>Reduced appeals turnaround time with AI-assisted drafting</li>
              <li>Full audit logs for regulatory review and HIPAA compliance</li>
              <li>Data never leaves tenant boundary — BYOK enforced</li>
            </ul>
            <div className="mt-4">
              <a href="/assessment" className="inline-block bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-md mr-3">
                Schedule a Demo
              </a>
              <a href="/#contact" className="inline-block border border-neutral-700 text-neutral-100 px-4 py-2 rounded-md">
                Contact Us
              </a>
            </div>
          </article>

          {/* Customer Support */}
          <article id="customer-support" className="prose dark:prose-invert">
            <h2 className="text-2xl font-semibold">AI-driven Customer Support</h2>
            <p className="text-neutral-300">
              Pain: Support teams need fast, accurate answers from proprietary
              knowledge bases while preserving customer data confidentiality.
            </p>
            <p className="text-neutral-300">
              Solution: Tenant-local RAG enables high-precision retrieval from your
              private knowledge base; agentic automation can create follow-ups,
              summarize conversations, and escalate with context — all under strict
              zero-trust orchestration.
            </p>
            <ul className="list-disc ml-5 text-neutral-300">
              <li>Faster mean time to resolution (MTTR) by 40–70%</li>
              <li>Higher first-contact resolution using contextual retrieval</li>
              <li>Automated escalations with full audit trail</li>
              <li>Secure egress and DLP policy enforcement</li>
            </ul>
            <div className="mt-4">
              <a href="/assessment" className="inline-block bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-md mr-3">
                Request Assessment
              </a>
              <a href="/#contact" className="inline-block border border-neutral-700 text-neutral-100 px-4 py-2 rounded-md">
                Talk to an Expert
              </a>
            </div>
          </article>
        </div>

        {/* Right column: diagram */}
        <aside className="w-full">
          <div className="sticky top-24">
            <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800">
              <h3 className="text-lg font-medium mb-3">Architecture</h3>
              <p className="text-neutral-400 mb-4">Tenant-local RAG flow — BYOK, audit logs, secure egress.</p>
              <div className="w-full h-auto">
                <Image
                  src="/diagrams/tenant-local-rag.svg"
                  alt="Tenant-local RAG architecture: User → App → Orchestrator (zero-trust) → tenant-isolated Vector DB → LLM. Labels for BYOK, audit logs, and secure egress."
                  width={900}
                  height={360}
                  className="rounded-md"
                />
              </div>
              <p className="text-sm text-neutral-500 mt-3">Diagram is served from `public/diagrams/tenant-local-rag.svg`</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}
