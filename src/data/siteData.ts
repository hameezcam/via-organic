import type {
  BusinessHours,
  FaqItem,
  FounderProfile,
  GalleryProject,
  ServiceItem,
  Testimonial,
} from '@/types';

/**
 * The public domain the site is served from, used for canonical URLs, the
 * sitemap, robots.txt, Open Graph and structured data.
 *
 * Set NEXT_PUBLIC_SITE_URL (e.g. https://viaorganic.ae) or fill in
 * CONFIRMED_SITE_URL once the production domain is confirmed. Until then the
 * project's Vercel production URL is used, which Vercel updates automatically
 * when a custom domain is connected.
 */
// www.viaorganic.ae is the primary domain in Vercel; viaorganic.ae redirects to it.
const CONFIRMED_SITE_URL: string | null = 'https://www.viaorganic.ae';

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || CONFIRMED_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, '');
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return `https://${vercel || 'via-organic.vercel.app'}`;
}

export const SITE_CONFIG = {
  name: 'VIA Organic Agriculture LLC',
  shortName: 'VIA Organic',
  tagline: 'Transforming Spaces. Creating Living Landscapes.',
  url: resolveSiteUrl(),
  /** Digits only, international format, as wa.me expects. */
  whatsappNumber: '971559596830',
  whatsappDisplay: '+971 55 959 6830',
  phone: '+971 55 959 6830',
  phoneHref: 'tel:+971559596830',
  email: 'info@viaorganic.ae',
  instagram: 'https://www.instagram.com/viaorganic/',
  instagramHandle: '@viaorganic',
  address: {
    street: 'Office No 76, 3rd Floor, Al Rigga Street, Deira',
    city: 'Dubai',
    emirate: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE',
  },
  /**
   * Replace with the office's Google Maps place link (Share > Copy link) once
   * the business profile is confirmed, so the pin lands on the building rather
   * than on Al Rigga Street in general.
   */
  mapsPlaceUrl: null as string | null,
  /** How visits are arranged until confirmed business hours are provided. */
  visitsNote: 'Site visits are by appointment. Message us on WhatsApp to book a time.',
  parentCompany: 'VIA Group',
};

const MAPS_QUERY = `${SITE_CONFIG.name}, ${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, UAE`;

export const MAPS_URL =
  SITE_CONFIG.mapsPlaceUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=16&output=embed`;

/* -------------------------------------------------------------------------- */
/* Optional content. Each section stays hidden until real details are added. */
/* -------------------------------------------------------------------------- */

/** Verified founder or leadership details. Leave null to hide the section. */
export const FOUNDER: FounderProfile | null = null;

/** Genuine customer reviews, added only with each customer's permission. */
export const TESTIMONIALS: Testimonial[] = [];

/** Confirmed office hours. Leave null to show "site visits by appointment". */
export const BUSINESS_HOURS: BusinessHours | null = null;

/* -------------------------------------------------------------------------- */

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

export const GENERAL_WHATSAPP_MESSAGE = 'Hello VIA Organic, I would like to enquire about your services.';
export const GARDEN_WHATSAPP_MESSAGE = 'Hello VIA Organic, I would like a quote for my garden.';
export const FARM_WHATSAPP_MESSAGE = 'Hello VIA Organic, I would like to discuss a farm or agricultural project.';

export function getService(id: string) {
  return SERVICES_DATA.find((service) => service.id === id);
}

/** Builds a wa.me link with the message URL-encoded. Opens the chat only; nothing is sent automatically. */
export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
  const text = message?.trim();
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'landscaping',
    image: '/images/project-aldar-abu-dhabi.jpg',
    imageAlt: 'Villa garden with palms and planting around a pool in Abu Dhabi',
    title: 'Landscaping',
    seoTitle: 'Landscaping and Garden Design in Dubai and the UAE',
    segment: 'home',
    shortDesc:
      'Garden design, planting and hardscape for villas and apartments across the UAE, built on organic soil care.',
    iconName: 'Trees',
    features: [
      'Garden design for villas, courtyards and balconies',
      'Turf, planting, paving and stepping stone paths',
      'Drip irrigation sized to your garden',
      'Organic soil preparation and ongoing maintenance',
    ],
    whatsappMessage: 'Hello VIA Organic, I would like to enquire about landscaping for my property.',
    ctaLabel: 'Ask about landscaping',
    overview: [
      'We design and build gardens for villas, townhouses and apartments across the UAE, from a small balcony to a full villa plot.',
      'Every garden starts with the soil. We prepare beds with organic compost and natural fertilisers so plants establish well and cope better with the summer heat, then set up drip irrigation that puts water at the roots.',
      'Once your garden is in, our team can keep looking after it with regular maintenance visits.',
    ],
    benefits: [
      { title: 'Soil prepared properly', text: 'Organic compost and natural fertilisers give new plants a better start in sandy UAE soil.' },
      { title: 'Water where it is needed', text: 'Drip irrigation delivers water to the roots instead of spraying it across paths and walls.' },
      { title: 'One team throughout', text: 'The same team handles the design, the build and the ongoing care, so nothing is lost between contractors.' },
      { title: 'No synthetic pesticides', text: 'We use organic methods, which matters in gardens used by children and pets.' },
    ],
    audience: ['Villa and townhouse owners', 'Apartment balconies and terraces', 'Courtyards, side returns and pool areas'],
    process: [
      { title: 'Site visit', text: 'We look at your space, sunlight, soil and water supply, and talk through how you want to use the garden.' },
      { title: 'Design and quote', text: 'You get a layout and a clear itemised quote before any work starts.' },
      { title: 'Build and plant', text: 'Our team prepares the soil, lays turf and paths, installs irrigation and plants everything.' },
      { title: 'Ongoing care', text: 'Optional maintenance visits keep the garden healthy through every season.' },
    ],
    photos: [
      { src: '/images/project-dubai-hills.jpg', alt: 'Villa lawn with hedged borders in Dubai Hills Estate' },
      { src: '/images/project-jumeirah.jpg', alt: 'Palms and layered planting along a villa wall in Jumeirah' },
      { src: '/images/entrance-pathway.jpg', alt: 'Villa entrance with paved steps, turf and garden lighting' },
    ],
    related: ['advanced-agriculture', 'fresh-vegetable-distribution', 'commercial-farms'],
  },
  {
    id: 'commercial-farms',
    image: '/images/farm-orchard.jpg',
    imageAlt: 'Rows of mango trees on a VIA Group organic orchard',
    title: 'Commercial Farms',
    seoTitle: 'Organic Commercial Farm Setup in the UAE',
    segment: 'farm',
    shortDesc:
      'Organic commercial farming built on VIA Group’s experience of running 1,750 acres of mixed crops since 2015.',
    iconName: 'Tractor',
    features: [
      'Organic mixed-crop and orchard farming',
      'Farm layout and crop planning',
      'Natural fertilisers and chemical-free pest control',
      'Planting, harvesting and post-harvest handling',
    ],
    whatsappMessage: 'Hello VIA Organic, I would like to discuss organic commercial farming.',
    ctaLabel: 'Discuss your farm',
    overview: [
      'VIA Organic is part of VIA Group, which has farmed organically in Sri Lanka since 2015 across 1,750 acres of mixed crops and orchards.',
      'We bring that experience to commercial farms: planning what to grow and where, building healthy soil with natural fertilisers, and managing pests without synthetic chemicals.',
      'Whether you are starting a new farm or converting an existing one to organic methods, we can plan it with you and help run it.',
    ],
    benefits: [
      { title: 'Experience at scale', text: 'Our methods come from VIA Group’s own organic farms, not from a textbook.' },
      { title: 'Planned around your land', text: 'Crop choice, layout and irrigation are based on an assessment of your soil, water and climate.' },
      { title: 'Organic from the ground up', text: 'Soil health is built with natural fertilisers, and pests are managed without synthetic chemicals.' },
      { title: 'Support through to harvest', text: 'We stay involved from the first planting to harvesting and post-harvest handling.' },
    ],
    audience: ['Landowners starting a new farm', 'Farms converting to organic methods', 'Investors planning agricultural projects'],
    process: [
      { title: 'Land assessment', text: 'We study the land, soil, water and climate to see what will grow well.' },
      { title: 'Farm plan', text: 'Crop selection, layout, irrigation and a planting calendar, put together with you.' },
      { title: 'Setup and planting', text: 'We prepare the soil organically and get the first crops in the ground.' },
      { title: 'Harvest', text: 'We guide harvesting and post-harvest handling so produce reaches market in good condition.' },
    ],
    photos: [
      { src: '/images/farm-mango-trees.jpg', alt: 'Mango trees on a VIA Group organic orchard' },
      { src: '/images/farm-mango-harvest.jpg', alt: 'Bagged mangoes ready for harvest' },
      { src: '/images/farm-field.jpg', alt: 'Organic vegetable field on a VIA Group farm' },
    ],
    related: ['farm-management', 'advanced-agriculture', 'fresh-vegetable-distribution'],
  },
  {
    id: 'advanced-agriculture',
    image: '/images/farm-strawberry.jpg',
    imageAlt: 'A strawberry growing in a vertical growing system',
    title: 'Advanced Agriculture',
    seoTitle: 'Greenhouse, Hydroponic and Vertical Farming Systems in the UAE',
    segment: 'farm',
    shortDesc:
      'Greenhouse, hydroponic, aeroponic, aquaponic and vertical growing systems that produce more food from less land and water.',
    iconName: 'Sprout',
    features: [
      'Greenhouse farming',
      'Hydroponic and aeroponic systems',
      'Aquaponics',
      'Vertical growing systems',
    ],
    whatsappMessage: 'Hello VIA Organic, I would like to know more about your advanced agriculture systems.',
    ctaLabel: 'Ask about growing systems',
    overview: [
      'Controlled-environment growing makes it possible to farm all year in the UAE climate, using less land and water than open fields.',
      'We set up greenhouse, hydroponic, aeroponic, aquaponic and vertical growing systems, matched to what you want to grow and the space you have.',
      'The same organic principles we use in the field carry through: clean inputs and no synthetic pesticides.',
    ],
    benefits: [
      { title: 'Grow all year', text: 'A controlled environment protects crops from the heat that limits open-field growing in summer.' },
      { title: 'Less land and water', text: 'Stacked and soil-free systems grow more in a smaller footprint and recirculate water.' },
      { title: 'The right system for you', text: 'We recommend a system based on your crops, space and budget rather than a fixed product.' },
      { title: 'Your team trained', text: 'We show your staff how to run the system day to day and remain available for support.' },
    ],
    audience: ['Commercial growers', 'Hotels, restaurants and businesses growing their own produce', 'Homes and schools with limited space'],
    process: [
      { title: 'Consultation', text: 'We talk through your goals, budget, space and the crops you want to grow.' },
      { title: 'System design', text: 'We recommend the right system, whether greenhouse, hydroponic, aeroponic, aquaponic or vertical.' },
      { title: 'Installation', text: 'Our team installs and commissions the system and plants the first crop.' },
      { title: 'Training and support', text: 'We show your team how to run it and stay on hand for support.' },
    ],
    photos: [
      { src: '/images/farm-strawberry.jpg', alt: 'A strawberry grown in a VIA Group vertical growing system' },
      { src: '/images/farm-crops.jpg', alt: 'Leafy crops growing on a VIA Group farm' },
      { src: '/images/farm-team.jpg', alt: 'VIA Group team tending crops' },
    ],
    related: ['commercial-farms', 'farm-management', 'landscaping'],
  },
  {
    id: 'farm-management',
    image: '/images/farm-team.jpg',
    imageAlt: 'VIA Group farm team working among organic crops',
    title: 'Farm Management',
    seoTitle: 'Organic Farm Management Services in the UAE',
    segment: 'farm',
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
    ctaLabel: 'Discuss farm management',
    overview: [
      'Running a farm well takes daily attention. Our farm management service puts our experienced team in charge of the day-to-day, so you can focus on the business.',
      'We handle crop scheduling, soil health, irrigation and nutrition, using the organic methods we use on VIA Group’s own farms.',
      'You get regular updates on how crops are progressing and what is coming up next.',
    ],
    benefits: [
      { title: 'An experienced team on the ground', text: 'Daily operations are handled by people who farm for a living.' },
      { title: 'Organic methods throughout', text: 'Soil, nutrition and pest control follow the practices used on VIA Group’s farms.' },
      { title: 'You stay informed', text: 'Regular reports cover crop progress, any issues and what is planned next.' },
    ],
    audience: ['Farm owners who want an experienced team on the ground', 'Investors with agricultural land', 'Farms that want to move to organic methods'],
    process: [
      { title: 'Farm review', text: 'We walk the farm and review its crops, soil, water and current practices.' },
      { title: 'Management plan', text: 'We agree a plan covering crops, schedules, inputs and reporting.' },
      { title: 'Daily operations', text: 'Our team runs planting, irrigation, nutrition, pest control and harvest.' },
      { title: 'Reporting', text: 'Regular updates on crop progress, issues and the season ahead.' },
    ],
    photos: [
      { src: '/images/farm-orchard.jpg', alt: 'Rows of mango trees on a VIA Group orchard' },
      { src: '/images/farm-field.jpg', alt: 'Organic vegetable field on a VIA Group farm' },
      { src: '/images/farm-mango.jpg', alt: 'A ripening mango on the tree' },
    ],
    related: ['commercial-farms', 'advanced-agriculture', 'fresh-vegetable-distribution'],
  },
  {
    id: 'fresh-vegetable-distribution',
    image: '/images/farm-crops.jpg',
    imageAlt: 'Rows of organic vegetables growing on a VIA Group farm',
    title: 'Fresh Vegetable Distribution',
    seoTitle: 'Fresh Organic Vegetable Supply in the UAE',
    segment: 'farm',
    shortDesc:
      'Fresh, organically grown vegetables supplied from the farm to homes and businesses.',
    iconName: 'Truck',
    features: [
      'Organically grown, chemical-free produce',
      'Seasonal vegetables picked fresh',
      'Supply for homes and businesses',
      'Availability confirmed before every order',
    ],
    whatsappMessage: 'Hello VIA Organic, I would like to enquire about fresh vegetable supply.',
    ctaLabel: 'Ask what is available',
    overview: [
      'We supply fresh, organically grown vegetables, produced without synthetic pesticides or chemical fertilisers.',
      'Produce is picked in season, so what reaches you is fresh and full of flavour.',
      'Message us to ask what is available and how we can supply your home or business.',
    ],
    benefits: [
      { title: 'Grown organically', text: 'No synthetic pesticides or chemical fertilisers are used on the crops we supply.' },
      { title: 'Picked in season', text: 'We supply what is ready, rather than produce that has been stored for weeks.' },
      { title: 'Straightforward ordering', text: 'Tell us what you need on WhatsApp and we confirm availability and the details.' },
    ],
    audience: ['Families who want chemical-free vegetables', 'Restaurants, cafes and hotels', 'Retailers and grocers'],
    process: [
      { title: 'Tell us what you need', text: 'Send us the vegetables and quantities you are looking for.' },
      { title: 'We confirm availability', text: 'We let you know what is in season and agree the details.' },
      { title: 'Fresh supply', text: 'Produce is picked and supplied to you fresh.' },
    ],
    photos: [
      { src: '/images/farm-crops.jpg', alt: 'Organic vegetables growing on a VIA Group farm' },
      { src: '/images/farm-field.jpg', alt: 'Organic vegetable field' },
      { src: '/images/farm-team.jpg', alt: 'VIA Group team tending organic crops' },
    ],
    related: ['commercial-farms', 'farm-management', 'landscaping'],
  },
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-1',
    title: 'Family Villa Lawn',
    location: 'Dubai Hills Estate, Dubai',
    category: 'villa',
    image: '/images/project-dubai-hills.jpg',
    width: 1280,
    height: 720,
    alt: 'Open villa lawn with neatly hedged borders in Dubai Hills Estate',
    description: 'An open lawn with hedged borders, giving the family plenty of room for children to play.',
  },
  {
    id: 'proj-2',
    title: 'Tropical Courtyard Planting',
    location: 'Jumeirah 3, Dubai',
    category: 'villa',
    image: '/images/project-jumeirah.jpg',
    width: 1600,
    height: 1066,
    alt: 'Palms and layered planting along a villa boundary wall in Jumeirah',
    description: 'Palms with layered, shade-tolerant planting beneath them, softening a villa boundary wall.',
  },
  {
    id: 'proj-3',
    title: 'Side Garden Planters',
    location: 'Tilal Al Ghaf, Dubai',
    category: 'edible',
    image: '/images/project-tilal-al-ghaf.jpg',
    width: 1600,
    height: 900,
    alt: 'Narrow side garden with planters running along the wall in Tilal Al Ghaf',
    description: 'A narrow side return turned into a green walkway, with planters running the length of the wall.',
  },
  {
    id: 'proj-4',
    title: 'Poolside Garden',
    location: 'Abu Dhabi',
    category: 'villa',
    image: '/images/project-aldar-abu-dhabi.jpg',
    width: 1600,
    height: 1200,
    alt: 'Palms and planting framing a pool and shaded seating area in Abu Dhabi',
    description: 'Palms and planting framing a pool and a shaded seating area.',
  },
  {
    id: 'proj-5',
    title: 'Stepping Stone Garden Path',
    location: 'Dubai',
    category: 'villa',
    image: '/images/project-residential-pergola.jpg',
    width: 720,
    height: 1280,
    alt: 'Stepping stones set into turf beside raised planters',
    description: 'Stepping stones set into turf, with raised planters along the edge of the path.',
  },
  {
    id: 'proj-6',
    title: 'Lit Entrance Pathway',
    location: 'Dubai',
    category: 'villa',
    image: '/images/entrance-pathway.jpg',
    width: 1200,
    height: 1600,
    alt: 'Villa entrance with paved steps, turf and low garden lights',
    description: 'A villa entrance with paved steps, turf and low garden lighting along the approach.',
  },
  {
    id: 'proj-7',
    title: 'Turf Side Garden',
    location: 'Dubai',
    category: 'villa',
    image: '/images/project-side-garden.jpg',
    width: 1280,
    height: 720,
    alt: 'Side garden laid with turf and edged by a raised planting bed',
    description: 'A side return laid with turf and edged with a raised planting bed.',
  },
  {
    id: 'proj-8',
    title: 'Garden Walkway',
    location: 'Dubai',
    category: 'villa',
    image: '/images/project-garden-walkway.jpg',
    width: 720,
    height: 540,
    alt: 'Stepping stone path between shrubs and potted trees along a villa wall',
    description: 'Shrubs, potted trees and a stepping stone path along a villa wall.',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-heat',
    question: 'Can a garden do well in the UAE summer heat?',
    answer:
      'Yes, with the right preparation. We improve the soil with organic compost and natural fertilisers so it holds moisture better, choose plants that suit the climate and the spot, and install drip irrigation that delivers water to the roots. Regular care visits help plants through the hottest months.',
  },
  {
    id: 'faq-pests',
    question: 'How do you control pests without chemical pesticides?',
    answer:
      'We use organic methods instead of synthetic pesticides. That means keeping plants healthy through good soil and watering, removing affected growth early, using natural treatments such as neem-based products, and planting companion plants that help deter pests. We will explain what we use in your garden.',
  },
  {
    id: 'faq-water',
    question: 'How does drip irrigation help with water use?',
    answer:
      'Drip irrigation puts water directly at the roots instead of spraying it across the surface, so less is lost to evaporation and run-off. Soil improved with organic matter also holds moisture longer than bare sand. How much water a garden needs depends on its size, plants and sun, and we can advise on this during the site visit.',
  },
  {
    id: 'faq-quote',
    question: 'How does the enquiry and quotation process work?',
    answer:
      'Message us on WhatsApp or use the contact form with your location and what you have in mind, ideally with a few photos. For gardens we arrange a site visit, and for farms we start with a land assessment. You then receive a clear, itemised proposal before any work begins.',
  },
  {
    id: 'faq-farms',
    question: 'Do you work on commercial farms as well as home gardens?',
    answer:
      'Yes. Alongside landscaping for homes, we set up commercial farms, install advanced growing systems such as greenhouses and hydroponics, manage farms day to day and supply fresh vegetables. Our agricultural experience comes from VIA Group, which has farmed organically in Sri Lanka since 2015 across 1,750 acres.',
  },
  {
    id: 'faq-rescue',
    question: 'Can you help with a garden that is struggling?',
    answer:
      'Yes. We start by finding the cause, which is often poor soil, irrigation faults or plants that do not suit the spot. We then recommend practical fixes, such as improving the soil with organic matter, repairing or adjusting the irrigation, and replacing plants where needed.',
  },
  {
    id: 'faq-areas',
    question: 'Which areas do you cover?',
    answer:
      'Our office is in Deira, Dubai, and we work across the UAE, including Dubai and Abu Dhabi. Tell us your location when you get in touch and we will confirm the details.',
  },
];
