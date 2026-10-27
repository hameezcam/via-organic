import {
  ServiceItem,
  PricingPackage,
  ProductItem,
  GalleryProject,
  TestimonialItem,
  FaqItem,
} from '@/types';

export const SITE_CONFIG = {
  name: 'VIA Organic Agriculture LLC',
  shortName: 'VIA Organic',
  tagline: 'Transforming Spaces. Creating Living Landscapes.',
  domain: 'viaorganic.ae',
  url: 'https://viaorganic.ae',
  whatsappNumber: '+971559596830', // International format for wa.me
  whatsappDisplay: '+971 55 959 6830',
  phone: '+971 55 959 6830',
  email: 'info@viaorganic.ae',
  instagram: 'https://instagram.com/viaorganic',
  instagramHandle: '@viaorganic',
  address: {
    street: 'Warehouse 14, Al Quoz Industrial Area 3 [REPLACE with exact unit if required]',
    city: 'Dubai',
    emirate: 'Dubai',
    country: 'United Arab Emirates',
    postalCode: '00000',
  },
  openingHours: {
    weekdays: 'Monday – Saturday: 08:00 – 18:00',
    sunday: 'Sunday: By Appointment Only',
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
      'Certified non-GMO heirloom organic seeds',
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
      'Intelligent subsurface drip and automated hydrologic networks engineered to reduce water wastage by up to 50%.',
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
      'White-glove periodic care by certified agronomists keeping your villa sanctuary thriving and pristine year-round.',
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
    id: 'bronze',
    name: 'Bronze Package',
    tagline: 'Garden Revitalisation',
    priceAed: 3499,
    cadence: 'One-off Transformation / Villa Terrace',
    recommendedFor: 'Townhouses, compact villa gardens & courtyard refresh projects up to 250 sq.m.',
    features: [
      'Comprehensive on-site soil and plant health diagnosis',
      'Full organic soil reconditioning (1,000L living compost)',
      'Seasonal aesthetic pruning & aesthetic turf edging',
      'Complete irrigation pressure & dripper audit',
      'Planting of up to 25 seasonal organic accent perennials',
      '30-day post-service health guarantee',
    ],
    notIncluded: ['Custom hardscaping & pergolas', 'Weekly ongoing maintenance'],
    whatsappMessage:
      'Hello VIA Organic, I am interested in booking the Bronze Garden Revitalisation Package (AED 3,499). Please let me know your earliest site visit availability.',
  },
  {
    id: 'silver',
    name: 'Silver Package',
    tagline: 'Living Villa Oasis',
    priceAed: 6999,
    cadence: 'Complete Refresh + Vegetable Pod',
    recommendedFor: 'Independent villas in Dubai Hills, Tilal Al Ghaf & Arabian Ranches up to 500 sq.m.',
    features: [
      'Everything included in Bronze package',
      'Installation of 1 handcrafted Cedar Raised Vegetable Bed (2m x 1m)',
      'Premium organic heirloom planting (herbs, leafy greens & tomatoes)',
      'Smart 2-zone Wi-Fi irrigation controller installation',
      'Microbial biological soil treatment for desert tolerance',
      '2 complimentary follow-up agronomist checkups',
    ],
    whatsappMessage:
      'Hello VIA Organic, I would like to book the Silver Living Villa Oasis Package (AED 6,999). Please contact me to schedule a visit.',
  },
  {
    id: 'gold',
    name: 'Gold Package',
    tagline: 'Signature Villa Sanctuary',
    priceAed: 12499,
    cadence: 'Comprehensive Master Transformation',
    isPopular: true,
    recommendedFor: 'Luxury villas, bespoke residences & private gardens seeking an organic showcase.',
    features: [
      'Comprehensive 3D landscape layout & planting masterplan',
      'Two (2) custom large raised organic kitchen garden pods with drip feed',
      'Deep-root soil remediation with imported biochar & living humus',
      'Atmospheric low-voltage warm LED garden accent lighting (6 fixtures)',
      'Installation of luxury ornamental trees (e.g. mature Olive or Frangipani)',
      'Subsurface precision smart irrigation network with rain/moisture sensors',
      '3 months complimentary white-glove organic AMC maintenance',
      'Dedicated personal horticulturist on WhatsApp direct',
    ],
    whatsappMessage:
      'Hello VIA Organic, I would like to book your most popular Gold Signature Villa Sanctuary Package (AED 12,499). Please get in touch for my villa survey.',
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    tagline: 'Master Estate & Edible Haven',
    priceAed: 24999,
    cadence: 'Bespoke Estate Architectural Suite',
    recommendedFor: 'Large luxury estates, Emirates Hills, Palm Jumeirah & commercial boutique hospitality.',
    features: [
      'Full architectural landscape overhaul & hardscape consultation',
      'Four (4) artisanal raised edible planter suites with automated climate shades',
      'Complete living ecosystem installation: citrus grove, herb terrace & pollinator borders',
      'Fully integrated multi-zone smart hydrologic station with app control',
      'Architectural hardscape accents (natural stone stepping, pergola styling)',
      '6 months VIP Annual Maintenance Contract (AMC) with weekly visits',
      'Guaranteed replacement of any plant failing to flourish within 6 months',
      'Executive horticulturist direct liaison and priority weekend response',
    ],
    whatsappMessage:
      'Hello VIA Organic, I wish to enquire about the Platinum Master Estate & Edible Haven Package (AED 24,999). Please arrange a confidential private estate consultation.',
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-living-soil',
    name: 'VIA Organic Living Desert Soil Mix',
    category: 'Soil & Growing Media',
    description:
      'Engineered specifically to convert Dubai sand into thriving living soil. Blended with worm castings, aged biochar, and beneficial mycorrhizae.',
    priceAed: 85,
    weightOrUnit: '50L Bag',
    badge: 'Best Seller',
    image: '/images/vegetable-garden.png',
  },
  {
    id: 'prod-bio-compost',
    name: 'Artisan Micro-Thermal Bio-Compost',
    category: 'Organic Soil Nutrition',
    description:
      '100% vegetarian, thoroughly weed-free organic compost matured over 180 days for maximum microbial biodiversity and water retention.',
    priceAed: 65,
    weightOrUnit: '25kg Sack',
    badge: '100% Organic',
    image: '/images/vegetable-garden.png',
  },
  {
    id: 'prod-heirloom-seeds',
    name: 'UAE Climate Heirloom Seed Collection',
    category: 'Seeds & Planting',
    description:
      'Curated selection of non-GMO heirloom seeds selected for heat resilience: cherry tomatoes, kale, rocket, sweet basil, mint, and Arabian courgettes.',
    priceAed: 120,
    weightOrUnit: 'Kit of 8 Seed Varieties',
    badge: 'High Germination',
    image: '/images/project-villa-nova.png',
  },
  {
    id: 'prod-cedar-bed',
    name: 'Handcrafted Rot-Resistant Raised Garden Bed',
    category: 'Garden Hardware',
    description:
      'Durable, chemical-free natural timber raised bed (180cm x 90cm x 40cm). Complete with internal geotextile lining and ergonomic height.',
    priceAed: 950,
    weightOrUnit: 'Per Unit (Assembled)',
    badge: 'Handcrafted',
    image: '/images/project-jumeirah.png',
  },
  {
    id: 'prod-foliar-spray',
    name: 'Organic Seaweed & Neem Defensive Tonic',
    category: 'Natural Plant Health',
    description:
      'Cold-pressed Ascophyllum nodosum marine seaweed combined with organic cold-pressed neem to naturally protect against mites and whiteflies.',
    priceAed: 75,
    weightOrUnit: '1 Litre Concentrate',
    badge: 'Non-Toxic',
    image: '/images/project-dubai-hills.png',
  },
  {
    id: 'prod-drip-kit',
    name: 'Plug & Play Drip Irrigation Balcony/Patio Kit',
    category: 'Water Systems',
    description:
      'Complete water-wise micro-irrigation system with digital tap timer, 25m UV-stabilised distribution line, and 20 pressure-compensating emitters.',
    priceAed: 420,
    weightOrUnit: 'Complete Kit',
    badge: 'Water Saver',
    image: '/images/project-tilal-al-ghaf.png',
  },
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-1',
    title: 'Luxury Villa Sanctuary',
    location: 'Dubai Hills Estate, Dubai',
    category: 'villa',
    image: '/images/project-dubai-hills.png',
    description:
      'Full backyard transformation featuring drought-tolerant lush turf, modern pergola accents, and automated subsurface drip irrigation.',
    highlight: 'Water savings of 45% compared to conventional sprayers',
  },
  {
    id: 'proj-2',
    title: 'Private Mediterranean Oasis',
    location: 'Jumeirah 3, Dubai',
    category: 'villa',
    image: '/images/project-jumeirah.png',
    description:
      'Tranquil coastal villa courtyard with mature olive trees, fragrant Jasmine climbers, and organic soil remediation.',
    highlight: '100% synthetic chemical and pesticide-free environment',
  },
  {
    id: 'proj-3',
    title: 'Edible Kitchen Garden & Raised Pods',
    location: 'Tilal Al Ghaf, Dubai',
    category: 'edible',
    image: '/images/project-tilal-al-ghaf.png',
    description:
      'Four artisan timber raised beds yielding seasonal salads, culinary herbs, and heirloom vegetables for family culinary use.',
    highlight: 'Over 18kg of organic produce harvested monthly',
  },
  {
    id: 'proj-4',
    title: 'VIP Residential Estate Landscape',
    location: 'Abu Dhabi / Dubai Border',
    category: 'villa',
    image: '/images/project-aldar-abu-dhabi.png',
    description:
      'Grand scale architectural landscape framing expansive villa architecture with sculpted native and adapted desert flora.',
    highlight: 'Signature hardscape and organic softscape integration',
  },
  {
    id: 'proj-5',
    title: 'Pergola & Outdoor Living Space',
    location: 'Villa Nova, Dubai',
    category: 'transformation',
    image: '/images/project-residential-pergola.png',
    description:
      'Seamless fusion of natural wood shade structure, outdoor dining ambience, and living boundary hedges.',
    highlight: 'Transformed underutilised desert patio into daily living zone',
  },
  {
    id: 'proj-6',
    title: 'Arid Sand to Living Green Oasis',
    location: 'Emirates Hills, Dubai',
    category: 'transformation',
    image: '/images/transformation-after.png',
    description:
      'Dramatic reclamation of bare construction sand into dense, multi-tiered organic garden through deep biological soil conditioning.',
    highlight: 'Before & After transformation accomplished in 14 days',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Tariq & Sarah Al-Mansoori',
    location: 'Dubai Hills Estate',
    quote:
      'VIA Organic transformed our barren villa plot into an absolute paradise. Our children now pluck fresh sweet cherry tomatoes and mint every evening. Knowing everything is 100% chemical-free gives us total peace of mind.',
    rating: 5,
    serviceType: 'Gold Signature Package & Edible Garden',
  },
  {
    id: 'test-2',
    clientName: 'Marcus & Elena Vance',
    location: 'Jumeirah Golf Estates',
    quote:
      'Our DEWA water bill had been astronomical with our previous landscaping contractor. Hafeez and the VIA Organic agronomy team re-engineered our irrigation with smart sensors and reconditioned the soil. Our water usage dropped 42% while our garden looks twice as lush.',
    rating: 5,
    serviceType: 'Smart Irrigation & Soil Conditioning',
  },
  {
    id: 'test-3',
    clientName: 'Dr. Fatima B.',
    location: 'Tilal Al Ghaf',
    quote:
      'The attention to detail and botanical knowledge is unmatched in the UAE. From the initial 3D design to the weekly maintenance, their team is punctual, courteous, and deeply passionate about sustainable living.',
    rating: 5,
    serviceType: 'Annual Maintenance Contract (AMC)',
  },
  {
    id: 'test-4',
    clientName: 'Julian H.',
    location: 'Palm Jumeirah',
    quote:
      'The quality of their handcrafted cedar raised beds and living compost is top-tier. Even through Dubai’s hottest months, our edible garden flourished with their summer shade canopy design.',
    rating: 5,
    serviceType: 'Organic Kitchen Garden Suite',
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
      'Our precision subsurface drip networks and weather-adaptive smart Wi-Fi controllers typically reduce water consumption by 35% to 50% compared to traditional pop-up sprayers. Because our rich organic soil holds moisture like a sponge instead of letting it drain away through desert sand, every drop delivers maximum hydration to the roots.',
  },
  {
    id: 'faq-4',
    question: 'How does the booking and quotation process work?',
    answer:
      'Simply click "Get a free quote" or message us on WhatsApp with your location and villa type. Our senior agronomist will schedule a complimentary on-site survey anywhere in Dubai or Abu Dhabi. We assess your soil, sunlight, and irrigation pressure, and provide a transparent, tailored itemised proposal within 48 hours.',
  },
  {
    id: 'faq-5',
    question: 'What is included in the Annual Estate Maintenance Contract (AMC)?',
    answer:
      'Our AMC provides white-glove regular visits (weekly or bi-weekly). It covers organic fertilisation, foliar nutrition, preventive biological pest spraying, drip system flushing and calibration, lawn aeration, aesthetic pruning, and seasonal crop rotation for edible gardens.',
  },
  {
    id: 'faq-6',
    question: 'Can you work with existing gardens that are struggling or dying?',
    answer:
      'Yes, garden rehabilitation is one of our primary specialties. Most struggling UAE gardens suffer from compacted, salt-heavy desert sand or broken drippers. We conduct deep-core aeration, flush harmful salts, inject living microbial compost, and calibrate the hydrologic timers to bring lifeless gardens back to vibrant health within 3 to 4 weeks.',
  },
];
