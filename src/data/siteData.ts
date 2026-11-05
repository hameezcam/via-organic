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

export function getService(id: string) {
  return SERVICES_DATA.find((service) => service.id === id);
}

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
    overview: [
      'We design and build gardens for villas, townhouses and apartments across the UAE, from a small balcony to a full villa plot.',
      'Every garden starts with the soil. We prepare beds with organic compost and natural fertilisers so plants establish quickly and cope with the summer heat, then set up drip irrigation that puts water at the roots.',
      'Once your garden is in, our team can keep looking after it with regular maintenance visits.',
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
    overview: [
      'VIA Organic is part of VIA Group, which has farmed organically in Sri Lanka since 2015 across 1,750 acres of mixed crops and orchards.',
      'We bring that experience to commercial farms: planning what to grow and where, building healthy soil with natural fertilisers, and managing pests without synthetic chemicals.',
      'Whether you are starting a new farm or converting an existing one to organic methods, we can plan it with you and help run it.',
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
    overview: [
      'Controlled-environment growing makes it possible to farm all year in the UAE climate, using far less land and water than open fields.',
      'We set up greenhouse, hydroponic, aeroponic, aquaponic and vertical growing systems, matched to what you want to grow and the space you have.',
      'The same organic principles we use in the field carry through: clean inputs and no synthetic pesticides.',
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
    overview: [
      'Running a farm well takes daily attention. Our farm management service puts our experienced team in charge of the day-to-day, so you can focus on the business.',
      'We handle crop scheduling, soil health, irrigation and nutrition, using the organic methods we use on VIA Group\'s own farms.',
      'You get regular updates on how crops are progressing and what is coming up next.',
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
    overview: [
      'We supply fresh, organically grown vegetables straight from the farm, without synthetic pesticides or chemical fertilisers.',
      'Produce is picked in season, so what reaches you is fresh and full of flavour.',
      'Message us to ask what is available and how we can supply your home or business.',
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
