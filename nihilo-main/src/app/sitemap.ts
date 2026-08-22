import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Every live path. Retired paths are 301s in next.config.ts, not entries here.
 *
 * `lastModified` is a hand-maintained date per page, not `new Date()`. Stamping
 * the build time on all ten told Google that every page changed on every deploy,
 * which is the fastest way to get lastmod ignored as a crawl signal. Update the
 * date for a page when that page's content actually changes.
 */
const PAGES: {
  path: string;
  lastModified: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
}[] = [
  { path: '/', lastModified: '2026-08-21', changeFrequency: 'weekly', priority: 1 },
  { path: '/what-we-build', lastModified: '2026-08-21', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/use-cases', lastModified: '2026-08-22', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/use-cases/reports', lastModified: '2026-08-22', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/use-cases/meters', lastModified: '2026-08-22', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/use-cases/lookup', lastModified: '2026-08-22', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/use-cases/exceptions', lastModified: '2026-08-22', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/use-cases/move', lastModified: '2026-08-22', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/use-cases/follow-through', lastModified: '2026-08-22', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/how-we-work', lastModified: '2026-08-21', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/faq', lastModified: '2026-08-21', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', lastModified: '2026-08-21', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/who-we-work-with', lastModified: '2026-08-21', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about', lastModified: '2026-08-21', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy', lastModified: '2026-08-18', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', lastModified: '2026-08-18', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(`${lastModified}T00:00:00Z`),
    changeFrequency,
    priority,
  }));
}
