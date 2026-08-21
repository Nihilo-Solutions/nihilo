import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/** Every live path. Retired paths are 301s in next.config.ts, not entries here. */
const PAGES: { path: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/what-we-build', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/use-cases', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/how-we-work', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/who-we-work-with', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
