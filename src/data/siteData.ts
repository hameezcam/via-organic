import {
  ServiceItem,
  GalleryProject,
  FaqItem,
} from '@/types';

export const SITE_CONFIG = {
  name: 'VIA Organic Agriculture LLC',
  shortName: 'VIA Organic',
  tagline: 'Transforming Spaces. Creating Living Landscapes.',
  domain: 'viaorganic.ae',
  // Vercel sets this to the production domain at build time, so canonical and
  // social links follow the site when viaorganic.ae is connected to the project.
  url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? 'via-organic.vercel.app'}`,
  whatsappNumber: '+971559596830', // International format for wa.me
  whatsappDisplay: '+971 55 959 6830',
  phone: '+971 55 959 6830',
  email: 'info@viaorganic.ae',
  instagram: 'https://instagram.com/viaorganic',
  instagramHandle: '@viaorganic',
  address: {
    street: 'Office No 76, 3rd Floor, Al Rigga Street, Deira',
    city: 'Dubai',
    emirate: 'Dubai',
    country: 'United Arab Emirates',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Al+Rigga+Street+Deira+Dubai',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Al%20Rigga%20Street%2C%20Deira%2C%20Dubai&z=15&output=embed',
  openingHours: {
    weekdays: 'Site visits by appointment',
    sunday: 'Message us on WhatsApp to book a time',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const FARM_PHOTOS = [
  { src: '/images/farm-team.jpg', alt: 'VIA Group team tending organic crops in Sri Lanka' },
  { src: '/images/farm-mango-harvest.jpg', alt: 'Bagged mangoes ready for harvest on a VIA Group orchard' },
  { src: '/images/farm-strawberry.jpg', alt: 'A strawberry grown in a VIA Group vertical growing system' },
  { src: '/images/farm-orchard.jpg', alt: 'Rows of mango trees on a VIA Group orchard' },
  { src: '/images/farm-field.jpg', alt: 'Organic vegetable field on a VIA Group farm' },
  { src: '/images/farm-mango.jpg', alt: 'A ripening mango on the tree' },
];

export function buildWhatsAppLink(message: string): string {
  const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'landscaping',
    image: '/images/project-aldar-abu-dhabi.jpg',
    title: 'Landscaping',
    shortDesc:
      'Garden design, planting and hardscape for villas and apartments across the UAE, grown on organic soil care.',
    iconName: 'Trees',
    features: [
      'Garden design for villas, courtyards and balconies',
      'Turf, planting, paving and stepping stone paths',
      'Drip irrigation sized to your garden',
      'Organic soil preparation and ongoing maintenance',
    ],
    whatsappMessage: 'Hello VIA Organic, I would like to enquire about landscaping for my property.',
  },
  {
    id: 'commercial-farms',
    image: '/images/farm-orchard.jpg',
    title: 'Commercial Farms',
    shortDesc:
      'Organic commercial farming built on the experience of running 1,750 acres of mixed crops for VIA Group since 2015.',
    iconName: 'Tractor',
    features: [
      'Organic mixed-crop and orchard farming',
      'Farm layout and crop planning',
      'Natural fertilisers and chemical-free pest control',
      'Planting, harvesting and post-harvest handling',
    ],
    whatsappMessage: 'Hello VIA Organic, I would like to discuss organic commercial farming.',
  },
  {
    id: 'advanced-agriculture',
    image: '/images/farm-strawberry.jpg',
    title: 'Advanced Agriculture',
    shortDesc:
      'Controlled-environment growing that produces more food from less land and water, suited to the UAE climate.',
    iconName: 'Sprout',
    features: [
      'Greenhouse farming',
      'Hydroponic and aeroponic systems',
      'Aquaponics',
      'Vertical growing systems',
    ],
    whatsappMessage: 'Hello VIA Organic, I would like to know more about your advanced agriculture systems.',
  },
  {
    id: 'farm-management',
    image: '/images/farm-team.jpg',
    title: 'Farm Management',
    shortDesc:
      'Our team runs the day-to-day of your farm, from planting schedules to soil health and harvest.',
    iconName: 'ClipboardList',
    features: [
      'Day-to-day farm operations by our own team',
      'Crop scheduling and rotation',
      'Soil health, irrigation and nutrition programmes',
      'Regular reporting on crop progress',
    ],
    whatsappMessage: 'Hello VIA Organic, I would like to discuss farm management for my farm.',
  },
  {
    id: 'fresh-vegetable-distribution',
    image: '/images/farm-crops.jpg',
    title: 'Fresh Vegetable Distribution',
    shortDesc:
      'Fresh, organically grown vegetables supplied straight from the farm.',
    iconName: 'Truck',
    features: [
      'Organically grown, chemical-free produce',
      'Seasonal vegetables picked fresh',
      'Supply for homes and businesses',
      'Farm-to-table traceability',
    ],
    whatsappMessage: 'Hello VIA Organic, I would like to enquire about fresh vegetable supply.',
  },
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-1',
    title: 'Family Villa Lawn',
    location: 'Dubai Hills Estate, Dubai',
    category: 'villa',
    image: '/images/project-dubai-hills.jpg',
    description: 'An open lawn with hedged borders, sized for children to play.',
  },
  {
    id: 'proj-2',
    title: 'Tropical Courtyard Planting',
    location: 'Jumeirah 3, Dubai',
    category: 'villa',
    image: '/images/project-jumeirah.jpg',
    description: 'Palms and layered shade-loving planting along a villa boundary wall.',
  },
  {
    id: 'proj-3',
    title: 'Side Garden Planters',
    location: 'Tilal Al Ghaf, Dubai',
    category: 'edible',
    image: '/images/project-tilal-al-ghaf.jpg',
    description: 'A narrow side garden turned into a green walkway with planters along the wall.',
  },
  {
    id: 'proj-4',
    title: 'Poolside Garden',
    location: 'Abu Dhabi',
    category: 'villa',
    image: '/images/project-aldar-abu-dhabi.jpg',
    description: 'Palms and planting framing a pool and shaded seating area.',
  },
  {
    id: 'proj-5',
    title: 'Stepping Stone Garden Path',
    location: 'Dubai',
    category: 'villa',
    image: '/images/project-residential-pergola.jpg',
    description: 'Stepping stones through turf with raised planters along the edge.',
  },
  {
    id: 'proj-6',
    title: 'Lit Entrance Pathway',
    location: 'Dubai',
    category: 'villa',
    image: '/images/entrance-pathway.jpg',
    description: 'A villa entrance with paved steps, turf and low garden lighting.',
  },
  {
    id: 'proj-7',
    title: 'Turf Side Garden',
    location: 'Dubai',
    category: 'villa',
    image: '/images/project-side-garden.jpg',
    description: 'A side return laid with turf and edged with a raised planting bed.',
  },
  {
    id: 'proj-8',
    title: 'Garden Walkway',
    location: 'Dubai',
    category: 'villa',
    image: '/images/project-garden-walkway.jpg',
    description: 'Shrubs, potted trees and a stepping stone path along a villa wall.',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Can organic gardens really survive the intense Dubai summer heat?',
    answer:
      'Yes, absolutely. The secret lies beneath the surface in living soil biology and smart micro-climates. Conventional landscaping relies on chemical salts that dry out roots in heat. We recondition your sand with moisture-locking organic biochar, deep compost, and mycorrhizal fungi, paired with automated root-zone drip irrigation and breathable summer shade cloth. Our gardens thrive year-round.',
  },
  {
    id: 'faq-2',
    question: 'How do you control garden pests in the UAE without toxic chemical pesticides?',
    answer:
      'We practice Integrated Pest Management (IPM). This includes planting beneficial companion flora (like marigolds, Arabian sweet basil, and lavender) that naturally deter pests, using cold-pressed neem and organic essential oil extracts, and fostering natural predatory insects like ladybirds. Your garden remains completely safe for children, pets, and pollinators.',
  },
  {
    id: 'faq-3',
    question: 'How much water will an organic garden consume compared to traditional lawns?',
    answer:
      'Our precision subsurface drip networks and weather-adaptive smart Wi-Fi controllers use far less water than traditional pop-up sprayers. Because our rich organic soil holds moisture like a sponge instead of letting it drain away through desert sand, every drop delivers maximum hydration to the roots.',
  },
  {
    id: 'faq-4',
    question: 'How does the booking and quotation process work?',
    answer:
      'Simply click "Get a free quote" or message us on WhatsApp with your location and villa type. We will arrange a site visit to look at your soil, sunlight and irrigation, then send you a clear itemised proposal.',
  },
  {
    id: 'faq-5',
    question: 'What is included in the Annual Estate Maintenance Contract (AMC)?',
    answer:
      'Our AMC provides regular visits (weekly or bi-weekly). It covers organic fertilisation, foliar nutrition, preventive biological pest spraying, drip system flushing and calibration, lawn aeration, aesthetic pruning, and seasonal crop rotation for edible gardens.',
  },
  {
    id: 'faq-6',
    question: 'Can you work with existing gardens that are struggling or dying?',
    answer:
      'Yes, garden rehabilitation is one of our primary specialties. Most struggling UAE gardens suffer from compacted, salt-heavy desert sand or broken drippers. We conduct deep-core aeration, flush harmful salts, inject living microbial compost, and calibrate the hydrologic timers to bring struggling gardens back to health.',
  },
];
