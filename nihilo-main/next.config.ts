import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@mui/material'],
  },
  allowedDevOrigins: ['*.riker.replit.dev', '127.0.0.1'],
};

export default nextConfig;
