import type { Metadata } from 'next';
import { IBM_Plex_Sans, Newsreader } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { JsonLd } from '@/components/site/json-ld';
import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';
import { organizationJsonLd } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';
import '@/styles.css';

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Custom Operational Automation for Growing Companies | Nihilo Solutions',
    template: '%s | Nihilo Solutions',
  },
  description:
    'Nihilo Solutions builds custom operational automations for growing companies. Recurring reports, readings, lookups, and other repeating work. Book a 30-minute discovery call.',
  authors: [{ name: 'Nihilo Solutions' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  metadataBase: new URL(SITE_URL),
};

export const viewport = {
  themeColor: '#1a1916',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plex.variable} ${newsreader.variable}`}>
      <body className="flex min-h-dvh flex-col bg-bg font-sans text-fg antialiased">
        <JsonLd data={organizationJsonLd} />
        <a
          href="#main"
          className="absolute top-[-100px] left-3 z-100 rounded-md bg-fg px-4 py-3 text-sm text-primary-fg transition-[top] focus:top-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main className="flex-1" id="main">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
        <GoogleAnalytics measurementId="G-HTNV61D4K4" />
      </body>
    </html>
  );
}
