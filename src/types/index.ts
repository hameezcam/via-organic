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
  space: 'apartment' | 'villa';
  name: string;
  priceAed: number;
  features: string[];
  recommendedFor: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  location: string;
  category: 'villa' | 'edible';
  image: string;
  description: string;
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
