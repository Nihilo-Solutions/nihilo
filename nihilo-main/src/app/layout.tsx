import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '@/components/shared';
import '@/styles.css';

export const metadata: Metadata = {
  title: {
    default: 'Nihilo Solutions — Enterprise AI Consulting',
    template: '%s | Nihilo Solutions',
  },
  description: 'Secure, tenant-local RAG pipelines and agentic automation on Azure & AWS. Production-ready enterprise AI.',
  keywords: ['Enterprise AI', 'RAG', 'Cloud Automation', 'Azure', 'AWS', 'LLM Operations', 'Agentic Automation'],
  authors: [{ name: 'Nihilo Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nihilosolutions.com',
    siteName: 'Nihilo Solutions',
    title: 'Nihilo Solutions — Enterprise AI Consulting',
    description: 'Custom LLM operations and secure RAG design on AWS and Azure.',
    images: [{ url: 'https://nihilosolutions.com/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-zinc-950 text-white antialiased">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}