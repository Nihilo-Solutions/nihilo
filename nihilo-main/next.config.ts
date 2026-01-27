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
};

export default nextConfig;
