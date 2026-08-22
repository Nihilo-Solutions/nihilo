import type { NextConfig } from 'next';
import path from 'path';

/**
 * Every retired path from the previous site (website modernization, SEO
 * programs, the growth assessment, the industry landing pages) 301s to its
 * closest page in the operational-automation site, so none of them compete in
 * search or dead-end a visitor.
 *
 * Non-www is canonical. Each dead path also gets an explicit www variant so www
 * visitors reach the final non-www URL in a single 301 hop, instead of chaining
 * through the catch-all www rule. Two hops dilute re-indexing.
 */
const RETIRED: { from: string; to: string }[] = [
  // Old solution pages
  { from: '/solutions/website-modernization', to: '/what-we-build' },
  { from: '/solutions/ai-automation-system', to: '/what-we-build' },
  { from: '/solutions/seo-growth-system', to: '/' },
  { from: '/solutions/:slug*', to: '/what-we-build' },
  { from: '/solutions', to: '/what-we-build' },
  // Old industry landing pages. home-services, professional-services and
  // retail-ecommerce are live pages again on their original URLs, so they are
  // listed here by name rather than swept up by a wildcard: a redirect runs
  // before routing and would shadow the page it points away from.
  { from: '/industries/healthcare', to: '/who-we-work-with' },
  { from: '/industries/financial-services', to: '/who-we-work-with' },
  { from: '/industries/real-estate', to: '/who-we-work-with' },
  { from: '/industries', to: '/who-we-work-with' },
  // Old lead-capture surfaces
  { from: '/tools/growth-assessment', to: '/contact' },
  { from: '/tools/:slug*', to: '/contact' },
  { from: '/assessment', to: '/contact' },
  { from: '/intake', to: '/contact' },
  { from: '/book', to: '/contact' },
  // Renamed live page, not a dead one. The use case outgrew the meter framing
  // and the slug went with it.
  { from: '/use-cases/meters', to: '/use-cases/capture' },
  // Old enterprise-platform pages
  { from: '/security', to: '/what-we-build' },
  { from: '/platforms', to: '/what-we-build' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  allowedDevOrigins: ['*.riker.replit.dev', '127.0.0.1'],
  async redirects() {
    const wwwHost = [{ type: 'host' as const, value: 'www.nihilosolutions.com' }];
    return [
      // www variant first for each retired path, so www resolves in one hop
      ...RETIRED.flatMap(({ from, to }) => [
        {
          source: from,
          has: wwwHost,
          destination: `https://nihilosolutions.com${to}`,
          statusCode: 301 as const,
        },
        { source: from, destination: to, statusCode: 301 as const },
      ]),
      // Catch-all: every other www URL to the non-www canonical host. Must stay last.
      { source: '/:path*', has: wwwHost, destination: 'https://nihilosolutions.com/:path*', statusCode: 301 },
    ];
  },
};

export default nextConfig;
