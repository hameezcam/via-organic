import type { MetadataRoute } from 'next';
import { NAV_LINKS, SERVICES_DATA, SITE_CONFIG } from '@/data/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = NAV_LINKS.map((link) => ({
    url: `${SITE_CONFIG.url}${link.href === '/' ? '' : link.href}`,
    changeFrequency: 'monthly',
    priority: link.href === '/' ? 1 : 0.7,
  }));
  const services: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${SITE_CONFIG.url}/services/${service.id}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  return [...pages, ...services];
}
