import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '@/components/shared';
import '@/styles.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Nihilo Solutions — Enterprise AI Consulting',
    template: '%s | Nihilo Solutions',
  },
  description: 'We build AI automation that runs inside your cloud — cutting operating costs 30–60% and going live in 4–6 weeks. Microsoft Azure Partner.',
  keywords: ['Enterprise AI', 'AI Automation', 'Azure Partner', 'RAG', 'Cloud Automation', 'Azure', 'AWS', 'AI Consulting', 'Business Automation'],
  authors: [{ name: 'Nihilo Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nihilosolutions.com',
    siteName: 'Nihilo Solutions',
    title: 'Nihilo Solutions — Enterprise AI Consulting',
    description: 'AI automation built inside your cloud. Azure Partner. Live in 4–6 weeks.',
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased" style={{ background: 'var(--brand-ink)', color: 'var(--fg)' }}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
