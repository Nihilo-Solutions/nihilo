import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Growth Assessment — Score Your Website Speed, SEO & Mobile',
  description:
    'Get a free website score in under 60 seconds. We audit your speed, SEO, and mobile performance and tell you exactly what is costing you traffic and leads.',
  alternates: {
    canonical: 'https://nihilosolutions.com/tools/growth-assessment',
  },
};

export default function GrowthAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
