import type { MetadataRoute } from 'next';
import { NAV_LINKS, SITE_CONFIG } from '@/data/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_LINKS.map((link) => ({
    url: `${SITE_CONFIG.url}${link.href === '/' ? '' : link.href}`,
    changeFrequency: 'monthly',
    priority: link.href === '/' ? 1 : 0.7,
  }));
}
