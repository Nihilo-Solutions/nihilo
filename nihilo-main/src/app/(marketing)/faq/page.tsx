import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'Tenant-Local AI & RAG Consulting FAQ | Nihilo Solutions',
  },
  description:
    'Answers to common questions about tenant-local RAG, agentic automation, pricing, SOC 2 posture, timelines, and working with Nihilo Solutions, including AI for law firms.',
  alternates: {
    canonical: 'https://nihilosolutions.com/faq',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface QA {
  q: string;
  a: React.ReactNode;
  // Plain-text answer for the FAQPage schema (no JSX).
  schemaAnswer: string;
}

const faqs: QA[] = [
  {
    q: 'What does "tenant-local" actually mean?',
    a: (
      <>
        Tenant-local means the entire AI system, embeddings, vector indexes, retrieval
        logic, and inference, deploys inside your own Azure VNet or AWS VPC. We do not
        operate a multi-tenant SaaS and we do not route your data through our environment.
        Your existing IAM, audit, and monitoring already cover the footprint because nothing
        new leaves your perimeter. We architect, deploy, and harden the platform inside your
        account, then hand you the keys. If we walk away, your platform does not go with us.
      </>
    ),
    schemaAnswer:
      'Tenant-local means the entire AI system, embeddings, vector indexes, retrieval logic, and inference, deploys inside your own Azure VNet or AWS VPC. We do not operate a multi-tenant SaaS and we do not route your data through our environment. Your existing IAM, audit, and monitoring already cover the footprint because nothing new leaves your perimeter. We architect, deploy, and harden the platform inside your account, then hand you the keys.',
  },
  {
    q: 'How does tenant-local RAG work?',
    a: (
      <>
        We build a private retrieval-augmented generation layer over your own documents.
        Secure ingestion pipelines filter, normalize, and redact PII before indexing.
        Embeddings are stored in a tenant-local vector store with BYOK (bring-your-own-key)
        encryption and strict network controls. At query time, retrieval and inference run
        inside your tenancy, so sensitive content is never sent to an external vendor. We
        tune retrieval, prompts, and reranking to improve factuality and reduce
        hallucinations.
      </>
    ),
    schemaAnswer:
      'We build a private retrieval-augmented generation layer over your own documents. Secure ingestion pipelines filter, normalize, and redact PII before indexing. Embeddings are stored in a tenant-local vector store with BYOK encryption and strict network controls. At query time, retrieval and inference run inside your tenancy, so sensitive content is never sent to an external vendor. We tune retrieval, prompts, and reranking to improve factuality and reduce hallucinations.',
  },
  {
    q: 'Is Nihilo SOC 2 certified?',
    a: (
      <>
        Nihilo is not yet formally SOC 2 certified; certification is in progress. Our
        engagements are structured around SOC 2 Type II controls, and because deployments
        are tenant-local, the work stays inside your existing compliance scope. Tenant-local
        architecture is also designed to align with ISO 27001 evidence requirements without
        adding a new external vendor to audit. See our{' '}
        <Link href="/security" className="underline text-blue-400 hover:text-blue-300">
          security posture
        </Link>{' '}
        for detail.
      </>
    ),
    schemaAnswer:
      'Nihilo is not yet formally SOC 2 certified; certification is in progress. Our engagements are structured around SOC 2 Type II controls, and because deployments are tenant-local, the work stays inside your existing compliance scope. Tenant-local architecture is also designed to align with ISO 27001 evidence requirements without adding a new external vendor to audit.',
  },
  {
    q: 'What does Nihilo cost?',
    a: (
      <>
        Pricing depends on scope, the number of integrations, and the cloud platform. Most
        engagements start with a focused, paid AI readiness assessment that maps where AI
        fits your workflow, where it does not, and the guardrails you need before any tool
        touches production. That assessment converts into a fixed-scope build. Tell us what
        you are dealing with via the{' '}
        <Link href="/intake" className="underline text-blue-400 hover:text-blue-300">
          intake form
        </Link>{' '}
        and we will give you a real number, not a brochure.
      </>
    ),
    schemaAnswer:
      'Pricing depends on scope, the number of integrations, and the cloud platform. Most engagements start with a focused, paid AI readiness assessment that maps where AI fits your workflow, where it does not, and the guardrails you need before any tool touches production. That assessment converts into a fixed-scope build.',
  },
  {
    q: 'How long does an AI implementation take?',
    a: (
      <>
        A typical production deployment runs 4 to 8 weeks, not the 6-plus months an internal
        team often spends stalled on security review. We move fast because the tenant-local
        architecture means we work inside controls you already run, rather than introducing a
        new external system that has to clear a fresh vendor assessment.
      </>
    ),
    schemaAnswer:
      'A typical production deployment runs 4 to 8 weeks, not the 6-plus months an internal team often spends stalled on security review. We move fast because the tenant-local architecture means we work inside controls you already run, rather than introducing a new external system that has to clear a fresh vendor assessment.',
  },
  {
    q: 'Do you work with law firms?',
    a: (
      <>
        Yes. Law firms are a core focus. Most firms have restricted public AI tools like
        ChatGPT, Claude, and Copilot because client privilege does not survive sending matter
        content to a third-party AI vendor. Tenant-local AI solves that: documents never leave
        the firm&apos;s boundary, every query is logged for audit, and the system meets the
        same controls the firm already runs for matter management and email. The result is
        existing lawyers doing higher-value work, with busywork like document search stripped
        out, not headcount reductions.
      </>
    ),
    schemaAnswer:
      'Yes. Law firms are a core focus. Most firms have restricted public AI tools like ChatGPT, Claude, and Copilot because client privilege does not survive sending matter content to a third-party AI vendor. Tenant-local AI solves that: documents never leave the firm’s boundary, every query is logged for audit, and the system meets the same controls the firm already runs for matter management and email.',
  },
  {
    q: 'How is this different from using ChatGPT, Copilot, or an API-wrapper consultancy?',
    a: (
      <>
        Public chatbots and most API-wrapper consultancies send your data to an endpoint they
        control. We deploy in your cloud, not behind our endpoint, so you own the deployment,
        the data, and the IP. Compared to large enterprise AI vendors, you are not locked into
        a multi-tenant platform. Compared to strategy firms, we ship working code, not slide
        decks.
      </>
    ),
    schemaAnswer:
      'Public chatbots and most API-wrapper consultancies send your data to an endpoint they control. We deploy in your cloud, not behind our endpoint, so you own the deployment, the data, and the IP. Compared to large enterprise AI vendors, you are not locked into a multi-tenant platform. Compared to strategy firms, we ship working code, not slide decks.',
  },
  {
    q: 'Which clouds do you support?',
    a: (
      <>
        Microsoft Azure and AWS. Deployments use your existing tenancy and follow zero-trust
        defaults: managed identity, RBAC, and Key Vault (or AWS KMS) for all secrets, with
        BYOK encryption by default. Nihilo is a Microsoft Azure Partner Network member.
      </>
    ),
    schemaAnswer:
      'Microsoft Azure and AWS. Deployments use your existing tenancy and follow zero-trust defaults: managed identity, RBAC, and Key Vault (or AWS KMS) for all secrets, with BYOK encryption by default. Nihilo is a Microsoft Azure Partner Network member.',
  },
  {
    q: 'Who builds and delivers the work?',
    a: (
      <>
        The principals. Nihilo runs a direct-access model: you talk to the engineer who builds
        the system and the operator who runs delivery. There are no account managers or junior
        consultants between you and the work, and the engineer writes code on day one of every
        engagement. Read more on the{' '}
        <Link href="/about" className="underline text-blue-400 hover:text-blue-300">
          about page
        </Link>
        .
      </>
    ),
    schemaAnswer:
      'The principals. Nihilo runs a direct-access model: you talk to the engineer who builds the system and the operator who runs delivery. There are no account managers or junior consultants between you and the work, and the engineer writes code on day one of every engagement.',
  },
  {
    q: 'What happens to the system after the engagement ends?',
    a: (
      <>
        You own it. The platform lives in your cloud account, uses your keys, and is documented
        so your team (or another vendor) can operate it. We are not a SaaS subscription you have
        to keep paying to keep the lights on. If we walk away, your platform stays exactly where
        it is, fully under your control.
      </>
    ),
    schemaAnswer:
      'You own it. The platform lives in your cloud account, uses your keys, and is documented so your team can operate it. We are not a SaaS subscription you have to keep paying to keep the lights on. If we walk away, your platform stays exactly where it is, fully under your control.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.schemaAnswer,
    },
  })),
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 antialiased pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="max-w-3xl mx-auto">
        <span className="text-[10px] mono uppercase tracking-[0.4em] text-zinc-600 mb-4 block">
          FAQ // Nihilo Solutions
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase italic leading-tight">
          Questions, answered straight.
        </h1>
        <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed">
          What tenant-local AI is, what it costs, how long it takes, and how we work. If your
          question is not here, ask a principal directly.
        </p>
      </header>

      <section className="max-w-3xl mx-auto mt-16">
        <dl className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="border border-zinc-800 rounded-lg bg-zinc-900/30 p-6 md:p-8"
            >
              <dt className="text-lg md:text-xl font-bold text-white tracking-tight">
                {item.q}
              </dt>
              <dd className="mt-3 text-zinc-400 text-sm md:text-base leading-relaxed">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="max-w-3xl mx-auto mt-20 border-t border-zinc-800 pt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Still have a question?
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
          Tell us what you are dealing with. You will talk to a principal, not a sales rep.
        </p>
        <div className="mt-8">
          <Link
            href="/intake"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-black font-bold px-6 py-3 rounded-md uppercase text-xs tracking-widest transition-colors"
          >
            Talk to a principal →
          </Link>
        </div>
      </section>
    </main>
  );
}
