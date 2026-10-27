import {
  ServiceItem,
  PricingPackage,
  ProductItem,
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

export function buildWhatsAppLink(message: string): string {
  const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'garden-design',
    title: 'Bespoke Garden Design & Landscaping',
    shortDesc:
      'Architectural landscape concepts balancing serene stone, shade pergolas, and climate-resilient organic greenery.',
    iconName: 'Compass',
    features: [
      '3D concept renders & spatial masterplanning',
      'Hardscape integration (pergolas, paving & natural stone)',
      'Native & drought-hardy luxury plant palettes',
      'Ambient nocturnal architectural garden lighting',
    ],
    whatsappMessage:
      'Hello VIA Organic, I would like to book a consultation for Bespoke Garden Design for my property in Dubai.',
  },
  {
    id: 'organic-vegetables',
    title: 'Organic Vegetable & Kitchen Gardens',
    shortDesc:
      'Bountiful farm-to-table raised beds and edible havens yielding fresh, non-toxic heirloom herbs and seasonal produce.',
    iconName: 'Carrot',
    features: [
      'Handcrafted natural timber & masonry raised beds',
      'Non-GMO heirloom seeds chosen with you',
      'Micro-climate shade canopies for UAE summers',
      'Companion planting for chemical-free pest deterrence',
    ],
    whatsappMessage:
      'Hello VIA Organic, I would like to enquire about installing an Organic Vegetable & Kitchen Garden at my villa.',
  },
  {
    id: 'smart-irrigation',
    title: 'Smart Water & Precision Irrigation',
    shortDesc:
      'Intelligent subsurface drip and automated hydrologic networks designed to put water where the roots need it.',
    iconName: 'Droplets',
    features: [
      'Weather-adaptive smart Wi-Fi controllers',
      'High-efficiency subsurface root-zone drip lines',
      'Zero-runoff misting & deep-root soaking systems',
      'Comprehensive pressure regulation & flow sensors',
    ],
    whatsappMessage:
      'Hello VIA Organic, I would like a site survey for an upgrade to a Smart Water & Drip Irrigation system.',
  },
  {
    id: 'soil-care',
    title: 'Living Soil Care & Organic Nutrition',
    shortDesc:
      'Transforming arid desert sands into nutrient-dense, microbially active living earth with zero synthetic chemicals.',
    iconName: 'Sprout',
    features: [
      'Custom organic compost & bio-char soil blending',
      'Beneficial mycorrhizal fungi & biological inoculants',
      'Natural seaweed, kelp, and amino-acid nourishment',
      'Salinity management & moisture-retention biology',
    ],
    whatsappMessage:
      'Hello VIA Organic, I need an assessment for Soil Care & Organic Nutrition for my garden.',
  },
  {
    id: 'estate-maintenance',
    title: 'Annual Estate Maintenance (AMC)',
    shortDesc:
      'Regular visits from our organic farm consultants to keep your garden healthy year-round.',
    iconName: 'ShieldCheck',
    features: [
      'Weekly or bi-weekly dedicated horticulture visits',
      'Precision organic fertilization & foliar spraying',
      'Water management audit & drip line sanitization',
      'Seasonal crop rotation & aesthetic pruning',
    ],
    whatsappMessage:
      'Hello VIA Organic, please share quotation details for your Annual Estate Maintenance (AMC) packages.',
  },
];

export const PACKAGES_DATA: PricingPackage[] = [
  {
    id: 'apartment-bronze',
    space: 'apartment',
    name: 'Bronze',
    priceAed: 1200,
    recommendedFor: 'Balconies from 1 sqm',
    features: ['40 herbs', '40 green leafy plants', 'Organic 2 aeroponic system'],
  },
  {
    id: 'apartment-silver',
    space: 'apartment',
    name: 'Silver',
    priceAed: 1800,
    recommendedFor: 'Balconies from 2 sqm',
    features: ['50 herbs', '70 green leafy plants', 'Organic 3 aeroponic system'],
  },
  {
    id: 'apartment-gold',
    space: 'apartment',
    name: 'Gold',
    priceAed: 2300,
    recommendedFor: 'Balconies from 3 sqm',
    features: ['70 herbs', '90 green leafy plants', 'Organic 4 aeroponic system'],
  },
  {
    id: 'apartment-platinum',
    space: 'apartment',
    name: 'Platinum',
    priceAed: 3400,
    recommendedFor: 'Balconies from 4 sqm',
    features: ['100 herbs', '140 green leafy plants', 'Organic 6 aeroponic system'],
  },
  {
    id: 'villa-bronze',
    space: 'villa',
    name: 'Bronze',
    priceAed: 1000,
    recommendedFor: 'Outdoor space from 6 sqm',
    features: ['50 vegetable plants', '15 herbs', '20 green leafy plants'],
  },
  {
    id: 'villa-silver',
    space: 'villa',
    name: 'Silver',
    priceAed: 1900,
    recommendedFor: 'Outdoor space from 12 sqm',
    features: ['90 vegetable plants', '30 herbs', '40 green leafy plants'],
  },
  {
    id: 'villa-gold',
    space: 'villa',
    name: 'Gold',
    priceAed: 2900,
    recommendedFor: 'Outdoor space from 18 sqm',
    features: ['130 vegetable plants', '60 herbs', '80 green leafy plants'],
  },
  {
    id: 'villa-platinum',
    space: 'villa',
    name: 'Platinum',
    priceAed: 3800,
    recommendedFor: 'Outdoor space from 24 sqm',
    features: ['180 vegetable plants', '90 herbs', '120 green leafy plants'],
  },
];

export const PACKAGE_SPACES = [
  { key: 'apartment', label: 'Apartment balcony' },
  { key: 'villa', label: 'Villa garden' },
] as const;

export function packageWhatsAppMessage(pkg: PricingPackage): string {
  const space = PACKAGE_SPACES.find((s) => s.key === pkg.space)?.label ?? '';
  return `Hello VIA Organic, I am interested in the ${space} ${pkg.name} package (AED ${pkg.priceAed.toLocaleString('en-AE')}). Please let me know your earliest site visit availability.`;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-fertilizers',
    name: 'Organic Fertilizers',
    category: 'Soil Nutrition',
    description:
      'Solid and liquid organic fertilizers made by the VIA Group in Sri Lanka that feed the soil naturally.',
    image: '/images/fertilizer-pellets.jpg',
  },
  {
    id: 'prod-compost',
    name: 'Compost & Growing Media',
    category: 'Soil & Growing Media',
    description:
      'Organic compost and coco peat for healthy roots in home gardens and greenhouses.',
    image: '/images/seedling-sack.jpg',
  },
  {
    id: 'prod-dried-foods',
    name: 'Dried Organic Foods',
    category: 'Organic Food',
    description:
      'Fruit chips and powders made from organic produce, dried to keep their nutrition.',
    image: '/images/dried-banana.jpg',
  },
  {
    id: 'prod-dehydrated',
    name: 'Dehydrated Vegetables & Herbs',
    category: 'Organic Food',
    description:
      'Naturally dehydrated vegetables and herbs with a long shelf life.',
    image: '/images/dried-produce.jpg',
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
