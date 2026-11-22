export interface ProjectShot {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export interface Project {
  id: string
  slug: string
  title: string
  category: string
  description: string
  image: string
  images: ProjectShot[]
  tech: string[]
  status: 'local' | 'wip'
  statusLabel: string
  note?: string
  links: Array<{ label: string; url: string; external?: boolean }>
  href: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'butchery-os',
    slug: 'butchery-os',
    title: 'Butchery OS',
    category: 'Business platform',
    description:
      'A digital platform that unifies butcher shop operations and customer ordering — storefront, stock-aware catalogue, inventory management and an authenticated admin area.',
    image: '/projects/butchery-os/storefront.webp',
    images: [
      {
        src: '/projects/butchery-os/storefront.webp',
        width: 1440,
        height: 720,
        alt: 'Butchery OS storefront hero with the headline Premium Cuts, Delivered Your Way',
        caption: 'Storefront landing — the customer-facing entry point.',
      },
      {
        src: '/projects/butchery-os/hero.webp',
        width: 1440,
        height: 860,
        alt: 'Butchery OS shop catalogue with product cards, prices in KSh and stock badges',
        caption: 'Product catalogue — category filters, stock badges and live availability.',
      },
      {
        src: '/projects/butchery-os/products.webp',
        width: 1440,
        height: 1000,
        alt: 'Admin product catalogue with prices, availability and featured flags',
        caption: 'Product detail — pricing, availability and featured flags.',
      },
      {
        src: '/projects/butchery-os/inventory.webp',
        width: 1440,
        height: 900,
        alt: 'Inventory management table with stock levels, thresholds and availability toggles',
        caption: 'Cart and checkout — stock-aware ordering with availability checks.',
      },
      {
        src: '/projects/butchery-os/admin-overview.webp',
        width: 1440,
        height: 900,
        alt: 'Admin dashboard overview with KPIs, low-stock alerts and recent orders',
        caption: 'Admin dashboard overview — KPIs, low-stock alerts and recent orders.',
      },
      {
        src: '/projects/butchery-os/inventory.webp',
        width: 1440,
        height: 900,
        alt: 'Inventory management table with stock levels, thresholds and availability toggles',
        caption: 'Orders and inventory — stock management and order processing.',
      },
      {
        src: '/projects/butchery-os/ai-config.webp',
        width: 1440,
        height: 900,
        alt: 'AI assistant configuration screen with business information and delivery zones',
        caption: 'AI assistant interface — knowledge base and delivery zones.',
      },
    ],
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Better Auth'],
    status: 'local',
    statusLabel: 'Local project',
    note: 'Runs locally on mock data. Not publicly deployed.',
    links: [],
    href: '/work/butchery-os',
    featured: true,
  },
  {
    id: 'chopify',
    slug: 'chopify',
    title: 'Chopify',
    category: 'Video workflow tool',
    description:
      'A local-first content-engineering pipeline that automates the journey from raw video to publish-ready clips — ingest via yt-dlp, transcribe with Faster-Whisper word-level timestamps, discover highlights through an eight-criteria heuristic engine, and render multi-aspect output with face-aware reframing, karaoke captions and loudness normalisation.',
    image: '/projects/chopify/hero.webp',
    images: [
      {
        src: '/projects/chopify/hero.webp',
        width: 1600,
        height: 1033,
        alt: 'Chopify Studio dashboard with project queue and new project form',
        caption: 'Studio dashboard — queue a video, choose a model and caption style, then find clips.',
      },
      {
        src: '/projects/chopify/project-detail.webp',
        width: 1920,
        height: 1763,
        alt: 'Chopify project detail view showing source video, clip candidates, transcript and rendered clips',
        caption: 'Project detail — source, clip candidates, transcript and rendered output.',
      },
      {
        src: '/projects/chopify/transcript.webp',
        width: 1600,
        height: 499,
        alt: 'Word-level transcript editor with editable start and end timestamps',
        caption: 'Transcript editor — word-level timing before clips are rendered.',
      },
    ],
    tech: ['Python', 'FFmpeg', 'Faster-Whisper', 'OpenCV', 'yt-dlp', 'YuNet'],
    status: 'local',
    statusLabel: 'Local project',
    note: 'Runs locally on your own machine. Not publicly deployed.',
    links: [],
    href: '/work/chopify',
    featured: true,
  },
  {
    id: 'charles-butchery',
    slug: 'charles-butchery',
    title: 'Charles Butchery',
    category: 'Digital storefront',
    description:
      'A digital storefront bringing the product catalogue, customer experience and WhatsApp ordering journey into one cohesive experience for a Nairobi butchery.',
    image: '/projects/charles-butchery/hero.webp',
    images: [
      {
        src: '/projects/charles-butchery/hero.webp',
        width: 1440,
        height: 860,
        alt: 'Charles Butchery desktop homepage with hero, value propositions and catalogue preview',
        caption: 'Homepage — hero, value propositions and featured products.',
      },
      {
        src: '/projects/charles-butchery/catalogue.webp',
        width: 1440,
        height: 900,
        alt: 'Charles Butchery desktop catalogue with category filters and 24 product cards',
        caption: 'Catalogue — category filters, 24 products with real photography.',
      },
      {
        src: '/projects/charles-butchery/product-detail.webp',
        width: 1440,
        height: 900,
        alt: 'Charles Butchery desktop product detail view with product image, description and add to cart',
        caption: 'Product detail — product presentation with image, description and quantity selector.',
      },
    ],
    tech: ['Vite', 'JavaScript', 'Tailwind CSS'],
    status: 'local',
    statusLabel: 'Local project',
    note: 'Runs locally. Product photography, pricing and business details updated from client assets.',
    links: [],
    href: '/work/charles-butchery',
    featured: true,
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getAllProjects(): Project[] {
  return projects
}