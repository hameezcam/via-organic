export interface ServiceItem {
  id: string;
  title: string;
  /** One-line summary used on cards, in meta descriptions and in the page hero. */
  shortDesc: string;
  /** Unique <title> for the service page. */
  seoTitle: string;
  iconName: string;
  image: string;
  imageAlt: string;
  /** Which side of the business the service mainly serves. */
  segment: 'home' | 'farm';
  features: string[];
  whatsappMessage: string;
  /** Label for the service page's WhatsApp button. */
  ctaLabel: string;
  /** Detail page content */
  overview: string[];
  benefits: { title: string; text: string }[];
  audience: string[];
  process: { title: string; text: string }[];
  photos: { src: string; alt: string }[];
  /** Ids of the services to suggest at the bottom of the page, most relevant first. */
  related: string[];
}

export interface GalleryProject {
  id: string;
  title: string;
  location: string;
  category: 'villa' | 'edible';
  image: string;
  /** Natural size of the photo, used to keep its shape in the grid and the lightbox. */
  width: number;
  height: number;
  alt: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/** A genuine customer review, published only with the customer's permission. */
export interface Testimonial {
  quote: string;
  name: string;
  /** e.g. "Villa owner, Dubai Hills". */
  context?: string;
}

export interface FounderProfile {
  name: string;
  role: string;
  bio: string;
  /** Optional photo in /public/images. */
  photo?: string;
}

export interface BusinessHours {
  /** Human-readable rows, e.g. { days: 'Monday to Saturday', hours: '9:00 am to 6:00 pm' }. */
  rows: { days: string; hours: string }[];
}
