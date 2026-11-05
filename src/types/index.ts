export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  image: string;
  features: string[];
  whatsappMessage: string;
  /** Detail page content */
  overview: string[];
  audience: string[];
  process: { title: string; text: string }[];
  photos: { src: string; alt: string }[];
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
  message: string;
}
