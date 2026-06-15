import type { Metadata } from 'next';
import SecurityNDA from './SecurityNDA';

export const metadata: Metadata = {
  title: {
    absolute: 'Security & Compliance | Nihilo Solutions',
  },
  description:
    'Security posture, compliance documentation, and vendor resources. NDA required for document access.',
  alternates: {
    canonical: 'https://nihilosolutions.com/security',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const postureCards: { title: string; body: string }[] = [
  {
    title: 'Tenant-local deployment',
    body: 'Your data never leaves your Azure tenant. No shared infrastructure. No Nihilo-side storage.',
  },
  {
    title: 'Zero-trust by default',
    body: 'Managed identity, RBAC, Key Vault for all secrets. No hardcoded credentials. No standing access.',
  },
  {
    title: 'SOC 2 alignment',
    body: 'Current engagements are structured around SOC 2 Type II controls. Formal certification in progress.',
  },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div
        className="max-w-4xl mx-auto px-6 pt-32 pb-24"
        style={{ fontFamily: 'var(--font-inter)' }}
      >

        {/* SECTION 1: public posture */}
        <section>
          <p
            className="uppercase"
            style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '11px',
              color: '#9AA0AE',
              letterSpacing: '0.3em',
              marginBottom: '24px',
            }}
          >
            SECURITY POSTURE
          </p>

          <h1
            className="leading-tight"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '48px',
              fontWeight: 600,
              color: '#0B0D14',
              marginBottom: '24px',
            }}
          >
            Built for environments
            <br />
            <span className="italic" style={{ color: '#2D6BFF' }}>where data doesn&apos;t move.</span>
          </h1>

          <p
            className="max-w-2xl"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '16px',
              color: '#6B7280',
              lineHeight: 1.7,
              marginBottom: '48px',
            }}
          >
            All Nihilo Solutions engagements are deployed tenant-local inside your Azure environment. We never store, transmit, or process your data outside your tenancy. Our infrastructure defaults follow zero-trust principles and SOC 2 alignment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: '96px' }}>
            {postureCards.map((card) => (
              <div
                key={card.title}
                style={{ backgroundColor: '#F4F5F7', padding: '24px' }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#0B0D14',
                    marginBottom: '12px',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    color: '#6B7280',
                    lineHeight: 1.7,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: gated documents */}
        <section>
          <p
            className="uppercase"
            style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '11px',
              color: '#9AA0AE',
              letterSpacing: '0.3em',
              marginBottom: '24px',
            }}
          >
            COMPLIANCE DOCUMENTS
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '32px',
              fontWeight: 600,
              color: '#0B0D14',
              marginBottom: '16px',
            }}
          >
            Vendor and client resources.
          </h2>

          <p
            className="max-w-2xl"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '16px',
              color: '#6B7280',
              lineHeight: 1.7,
              marginBottom: '40px',
            }}
          >
            Security documentation, compliance reports, and architecture diagrams are available to qualified vendors and clients under NDA.
          </p>

          <SecurityNDA />
        </section>
      </div>
    </main>
  );
}
