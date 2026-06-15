import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@mui/material'],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  allowedDevOrigins: ['*.riker.replit.dev', '127.0.0.1'],
  async redirects() {
    // Non-www is canonical. Each dead path also gets an explicit www variant so
    // www visitors reach the final non-www URL in a single 301 hop, instead of
    // chaining through the catch-all www->non-www rule (two hops dilute re-indexing).
    const wwwHost = [{ type: 'host' as const, value: 'www.nihilosolutions.com' }];
    return [
      // /assessment -> /intake (deprecated readiness page, /intake is the only intake surface)
      { source: '/assessment', has: wwwHost, destination: 'https://nihilosolutions.com/intake', statusCode: 301 },
      { source: '/assessment', destination: '/intake', statusCode: 301 },
      // /book -> /intake (single on-site intake flow)
      { source: '/book', has: wwwHost, destination: 'https://nihilosolutions.com/intake', statusCode: 301 },
      { source: '/book', destination: '/intake', statusCode: 301 },
      // /platforms -> /solutions
      { source: '/platforms', has: wwwHost, destination: 'https://nihilosolutions.com/solutions', statusCode: 301 },
      { source: '/platforms', destination: '/solutions', statusCode: 301 },
      // Catch-all: every other www URL -> non-www canonical host
      { source: '/:path*', has: wwwHost, destination: 'https://nihilosolutions.com/:path*', statusCode: 301 },
    ];
  },
};

export default nextConfig;
