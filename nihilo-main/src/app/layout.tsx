import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '@/components/shared';
import '@/styles.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Tenant-Local AI Automation on Azure & AWS | Nihilo Solutions',
    template: '%s | Nihilo Solutions',
  },
  description: 'Production AI automation deployed inside your Azure or AWS tenancy. Tenant-local RAG, agentic workflows, SOC 2 / ISO 27001 ready. Production in 4-6 weeks.',
  keywords: ['Enterprise AI', 'RAG', 'Cloud Automation', 'Azure', 'AWS', 'LLM Operations', 'Agentic Automation'],
  authors: [{ name: 'Nihilo Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nihilosolutions.com',
    siteName: 'Nihilo Solutions',
    title: 'Tenant-Local AI Automation on Azure & AWS | Nihilo Solutions',
    description: 'Production AI automation deployed inside your Azure or AWS tenancy. Tenant-local RAG, agentic workflows, SOC 2 / ISO 27001 ready. Production in 4-6 weeks.',
    // TODO: replace with real 1200x630 OG image - handled in a later slice.
    images: [{ url: 'https://nihilosolutions.com/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tenant-Local AI Automation on Azure & AWS | Nihilo Solutions',
    description: 'Production AI automation deployed inside your Azure or AWS tenancy. Tenant-local RAG, agentic workflows, SOC 2 / ISO 27001 ready. Production in 4-6 weeks.',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  metadataBase: new URL('https://nihilosolutions.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-zinc-950 text-white antialiased font-sans">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
