import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '@/components/shared';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
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

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Website Modernization, SEO & AI Automation for Small Business | Nihilo Solutions',
    template: '%s | Nihilo Solutions',
  },
  description:
    'Nihilo Solutions helps small and mid-size businesses grow with modern websites, search-engine SEO programs, and AI automation. Free growth assessment. Principal-led delivery.',
  keywords: [
    'website modernization',
    'SEO for small business',
    'AI automation',
    'web design Connecticut',
    'SEO agency',
    'business AI automation',
    'small business website',
    'local SEO',
  ],
  authors: [{ name: 'Nihilo Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nihilosolutions.com',
    siteName: 'Nihilo Solutions',
    title: 'Website Modernization, SEO & AI Automation | Nihilo Solutions',
    description:
      'Modern websites, SEO growth, and AI automation for small and mid-size businesses. Free growth assessment.',
    images: [{ url: 'https://nihilosolutions.com/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Modernization, SEO & AI Automation | Nihilo Solutions',
    description:
      'Modern websites, SEO growth, and AI automation for small and mid-size businesses. Free growth assessment.',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://nihilosolutions.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-zinc-950 text-white antialiased font-sans">
        <Navbar />
        {children}
        <Analytics />
        <GoogleAnalytics measurementId="G-HTNV61D4K4" />
      </body>
    </html>
  );
}
