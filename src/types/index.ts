export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  features: string[];
  whatsappMessage: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  priceAed: number;
  cadence: string;
  isPopular?: boolean;
  features: string[];
  notIncluded?: string[];
  recommendedFor: string;
  whatsappMessage: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  priceAed: number;
  weightOrUnit: string;
  badge?: string;
  image: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  location: string;
  category: 'all' | 'villa' | 'edible' | 'transformation';
  image: string;
  description: string;
  highlight: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  quote: string;
  rating: number;
  serviceType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  community: string;
  serviceRequired: string;
  packageInterest?: string;
  message: string;
}
