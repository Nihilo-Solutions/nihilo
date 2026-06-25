import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero, Services, Security, About, Booking, WhyTenantLocal, HowWeWork } from '@/components/features';
import { Footer } from '@/components/shared';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://nihilosolutions.com',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Nihilo Solutions',
  alternateName: 'Nihilo Solutions LLC',
  url: 'https://nihilosolutions.com',
  email: 'sam@nihilosolutions.com',
  description:
    'Production AI automation deployed inside your Azure or AWS tenancy. Tenant-local RAG, agentic workflows, and cloud-native AI infrastructure. SOC 2 / ISO 27001 aligned. Production in 4 to 8 weeks.',
  areaServed: 'US',
  serviceType: [
    'Enterprise RAG Implementation',
    'Agentic Process Automation',
    'Cloud-Native AI Infrastructure',
    'Tenant-Local AI Consulting',
  ],
  knowsAbout: [
    'Retrieval-Augmented Generation',
    'Azure OpenAI',
    'AWS Bedrock',
    'SOC 2 Compliance',
    'ISO 27001',
    'Zero-Trust AI Architecture',
    'BYOK Encryption',
    'LLMOps',
  ],
  founder: [
    {
      '@type': 'Person',
      name: 'Sam Oakes',
      jobTitle: 'Co-Founder & AI Lead',
    },
    {
      '@type': 'Person',
      name: 'Jake Ice',
      jobTitle: 'Co-Founder & Head of Business Operations',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/samoakes',
    'https://www.linkedin.com/in/jake-ice-nihilo',
  ],
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-200 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        {/* WhyTenantLocal acts as the Philosophy section per the UI overhaul brief */}
        <WhyTenantLocal />

        <section
          id="ready-to-start"
          style={{ backgroundColor: '#F4F5F7', paddingTop: '96px', paddingBottom: '96px' }}
        >
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
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
              READY TO START
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '32px',
                fontWeight: 600,
                color: '#0B0D14',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              Tell us what you&apos;re dealing with.
            </h2>
            <p
              className="max-w-xl"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                color: '#6B7280',
                lineHeight: 1.6,
                marginBottom: '32px',
              }}
            >
              No pitch. No pressure. Fill out a brief and we will tell you if we can help.
            </p>
            <Link
              href="/intake"
              style={{
                display: 'inline-block',
                backgroundColor: '#0B0D14',
                color: '#FFFFFF',
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 500,
                padding: '14px 28px',
                borderRadius: 0,
                textDecoration: 'none',
              }}
            >
              Talk to a principal
            </Link>
          </div>
        </section>

        <Security />
        <About />
        <Booking />
      </main>

      <Footer />
    </div>
  );
}
