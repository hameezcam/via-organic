import type { Metadata } from 'next';
import { SERVICES_DATA, SITE_CONFIG } from '@/data/siteData';
import type { FaqItem, ServiceItem } from '@/types';

const DEFAULT_IMAGE = { url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'A villa garden by VIA Organic' };

interface PageMetaInput {
  /** Page title. The layout's template adds " | VIA Organic". */
  title: string;
  description: string;
  /** Path starting with "/", resolved against SITE_CONFIG.url. */
  path: string;
  image?: { url: string; alt: string; width?: number; height?: number };
  /** Use the title exactly as given, without the site name template. */
  absoluteTitle?: boolean;
}

/** Title, description, canonical URL and social cards for one page, kept in step with each other. */
export function pageMetadata({ title, description, path, image, absoluteTitle }: PageMetaInput): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | ${SITE_CONFIG.shortName}`;
  const images = [image ?? DEFAULT_IMAGE];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_CONFIG.shortName,
      locale: 'en_AE',
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: images.map((img) => img.url),
    },
  };
}

export const absoluteUrl = (path: string) => `${SITE_CONFIG.url}${path === '/' ? '' : path}`;

const ORG_ID = `${SITE_CONFIG.url}/#organization`;
const BUSINESS_ID = `${SITE_CONFIG.url}/#business`;

/**
 * Site-wide structured data: the company, its Dubai office and the website.
 * Only confirmed facts go here. No ratings, reviews or opening hours until
 * they are provided and published on the site.
 */
export function siteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: SITE_CONFIG.name,
        alternateName: SITE_CONFIG.shortName,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/images/logo.png`,
        email: SITE_CONFIG.email,
        telephone: SITE_CONFIG.phone,
        sameAs: [SITE_CONFIG.instagram],
        parentOrganization: { '@type': 'Organization', name: SITE_CONFIG.parentCompany },
      },
      {
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
        '@id': BUSINESS_ID,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        image: `${SITE_CONFIG.url}/images/og-image.jpg`,
        logo: `${SITE_CONFIG.url}/images/logo.png`,
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email,
        parentOrganization: { '@id': ORG_ID },
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: SITE_CONFIG.address.city,
          addressRegion: SITE_CONFIG.address.emirate,
          addressCountry: SITE_CONFIG.address.countryCode,
        },
        areaServed: { '@type': 'Country', name: SITE_CONFIG.address.country },
        knowsAbout: SERVICES_DATA.map((service) => service.title),
        makesOffer: SERVICES_DATA.map((service) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: service.title, url: absoluteUrl(`/services/${service.id}`) },
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.shortName,
        inLanguage: 'en-GB',
        publisher: { '@id': ORG_ID },
      },
    ],
  };
}

export function serviceStructuredData(service: ServiceItem) {
  const url = absoluteUrl(`/services/${service.id}`);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.shortDesc,
        url,
        image: absoluteUrl(service.image),
        provider: { '@id': BUSINESS_ID },
        areaServed: { '@type': 'Country', name: SITE_CONFIG.address.country },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
          { '@type': 'ListItem', position: 3, name: service.title, item: url },
        ],
      },
    ],
  };
}

export function faqStructuredData(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

/** Serialises JSON-LD safely for a <script> tag. */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') };
}
