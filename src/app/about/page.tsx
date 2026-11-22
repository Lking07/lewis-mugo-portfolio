'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Mail, MessageSquare, MapPin, Database, GraduationCap, Award, BookOpen, Code2, Cpu, Globe, ArrowRight, Shield, Brain, Layers, Puzzle } from 'lucide-react'
import Link from 'next/link'

const timeline = [
  {
    year: 'Platform',
    title: 'Butchery OS',
    description: 'A local business platform: storefront, catalogue, stock-aware inventory and an admin area, built with Next.js, Prisma and PostgreSQL.',
    icon: Database,
  },
  {
    year: 'Contribution',
    title: 'Chopify',
    description: 'Contribution to an open-source video clipping tool — selection strategies, a live processing engine and streaming-platform adapters in Python.',
    icon: Cpu,
  },
  {
    year: 'Storefront',
    title: 'Charles Butchery',
    description: 'A digital storefront for a Nairobi butchery: product catalogue, order builder and WhatsApp ordering handoff with Vite and Tailwind CSS.',
    icon: Globe,
  },
  {
    year: 'Education',
    title: 'Data Science',
    description: 'University of Nairobi. Statistics, linear algebra, discrete mathematics and calculus.',
    icon: GraduationCap,
  },
]

const foundations = [
  {
    category: 'Mathematics and analytical foundations',
    icon: Brain,
    items: [
      { title: 'Statistics and probability', description: 'Hypothesis testing, regression, Bayesian inference, experimental design.' },
      { title: 'Linear algebra', description: 'Vector spaces, eigenvalues, SVD, matrix decompositions — foundations for ML and graphics.' },
      { title: 'Calculus and mathematical analysis', description: 'Multivariable calculus, optimization, differential equations — continuous modeling.' },
      { title: 'Discrete mathematics', description: 'Graph theory, combinatorics, logic, algorithms — computational thinking bedrock.' },
      { title: 'Mathematical modelling', description: 'Translating real-world problems into mathematical structures for analysis and simulation.' },
      { title: 'Optimisation and numerical methods', description: 'Techniques for finding optimal solutions and approximating complex computations.' },
    ],
  },
  {
    category: 'Computing and software foundations',
    icon: Layers,
    items: [
      { title: 'Programming and computational thinking', description: 'Algorithm design, complexity analysis, clean code practices.' },
      { title: 'Data structures and algorithms', description: 'Efficient data organisation, search, sorting, and graph algorithms.' },
      { title: 'Database systems', description: 'Relational modelling, query optimisation, transaction management.' },
      { title: 'Computer architecture', description: 'Memory hierarchy, CPU pipelines, parallelism and hardware-aware optimisation.' },
      { title: 'Operating systems', description: 'Process scheduling, memory management, concurrency and system calls.' },
      { title: 'Software engineering', description: 'Version control, testing, CI/CD, design patterns, system architecture.' },
      { title: 'Data management and analysis', description: 'ETL pipelines, data quality, exploratory analysis and visualisation.' },
    ],
  },
  {
    category: 'Data science areas',
    icon: Puzzle,
    items: [
      { title: 'Statistical inference', description: 'Confidence intervals, significance testing, parameter estimation.' },
      { title: 'Data analysis and visualisation', description: 'Exploratory analysis, statistical graphics, communication of findings.' },
      { title: 'Machine learning fundamentals', description: 'Supervised and unsupervised learning, model evaluation, bias-variance trade-offs.' },
      { title: 'Data modelling', description: 'Feature engineering, model selection, validation and deployment considerations.' },
    ],
  },
]

const principles = [
  'Build for the problem, not the résumé.',
  'Local first — practical independence and respect for privacy.',
  'Demo mode is honest mode — transparency about what is simulated.',
  'Efficiency is a design consideration, not an afterthought.',
  'Accessibility and semantic structure are professional engineering standards.',
  'Documentation that explains why, not just what.',
  'Ship incrementally. Iterate honestly.',
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
          <div className="absolute inset-0 bg-gradient-radial from-silver-900/20 via-background to-background" />
          <div className="absolute inset-0 bg-grain opacity-30" aria-hidden="true" />
          
          <motion.div
            className="container-custom relative z-10 pt-20 pb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 text-caption text-accent mb-6 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span>About</span>
              </span>

              <h1 className="font-display text-display-xl lg:text-[clamp(3.5rem,8vw,6rem)] text-text mb-6 tracking-tight">
                LEWIS MUGO<span className="text-accent">.</span>
              </h1>

              <p className="text-body-lg lg:text-[clamp(1.125rem,2vw,1.375rem)] text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                Data Science student at the University of Nairobi. Building web applications,
                automation pipelines, and client websites. Based in Thika, Kenya.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-body-sm text-text-subtle">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <a href="mailto:lmugo5046@gmail.com" className="hover:text-accent transition-colors">lmugo5046@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <a href="https://wa.me/254113781240" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">+254 113 781 240</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>Thika, Kenya</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Introduction */}
        <Section id="introduction" index={1}>
          <SectionHeader
            label="Introduction"
            title="Independent builder. Practical outcomes."
            align="left"
          />
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="lead-paragraph">
              I'm Lewis Mugo — a Data Science student at the University of Nairobi. My work sits at the intersection of software engineering, automation, and data-oriented thinking.
            </p>
            <p className="text-body-lg text-text-muted">
              I design systems that solve real problems. A business platform connecting stock, catalogue and ordering. A video-content tool working from transcript intelligence. A digital storefront with a seamless WhatsApp ordering journey. The common thread is practical utility over architectural theatre.
            </p>
            <p className="text-body-lg text-text-muted">
              This portfolio records the work. Each project page shows what the build does and where it stands.
            </p>
          </div>
        </Section>

        {/* Timeline */}
        <Section id="timeline" className="bg-surface/30" index={2}>
          <SectionHeader
            label="Journey"
            title="What I have built"
            description="Independent building alongside university studies — each project taught me something the classroom could not."
            align="center"
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-border" aria-hidden="true" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={item.title} className="relative pl-16">
                    <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <div className="card p-5 lg:p-6">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-mono text-caption text-accent font-medium">{item.year}</span>
                        <h3 className="font-medium text-heading-sm text-text">{item.title}</h3>
                      </div>
                      <p className="text-body text-text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Academic Foundations */}
        <Section id="foundations" index={3}>
          <SectionHeader
            label="Education"
            title="Academic foundations and areas of study"
            description="University of Nairobi — Data Science. Coursework and independent study shaping how I think about problems."
            align="center"
          />
          <div className="space-y-10">
            {foundations.map((group, groupIndex) => (
              <div key={group.category} className="card p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent">
                    <group.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-medium text-heading-sm text-text">{group.category}</h3>
                </div>
                <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <div key={item.title}>
                      <dt className="font-mono text-body-sm font-medium text-text">{item.title}</dt>
                      <dd className="mt-0.5 text-body-sm text-text-muted">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Section>

        {/* Professional Philosophy */}
        <Section id="principles" className="bg-surface/30" index={4}>
          <SectionHeader
            label="Philosophy"
            title="Professional philosophy"
            description="Principles that guide engineering decisions when requirements are ambiguous and trade-offs are real."
            align="center"
          />
          <div className="max-w-3xl mx-auto">
            <ol className="space-y-4">
              {principles.map((principle, index) => (
                <li key={principle} className="flex gap-4 p-5 lg:p-6 card group">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center font-mono text-caption text-accent font-medium">
                    {index + 1}
                  </span>
                  <p className="text-body text-text-muted pt-1 flex-1">{principle}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* Tech Stack Detail */}
        <Section id="tech-detail" compact index={5}>
          <SectionHeader
            label="Technical Depth"
            title="Tools I've shipped with"
            description="Not a laundry list — technologies I've used to build and ship the projects in this portfolio."
            align="center"
          />
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                category: 'Frontend & Full-Stack',
                icon: Layers,
                items: [
                  { name: 'Next.js 14 (App Router)', detail: 'Server Components, Server Actions, Streaming' },
                  { name: 'React 18', detail: 'Concurrent features, Suspense, Context + useReducer' },
                  { name: 'TypeScript (strict)', detail: 'Type-safe across API, DB, and UI layers' },
                  { name: 'Tailwind CSS', detail: 'Custom design systems, CSS variables, responsive scales' },
                  { name: 'Motion / Framer Motion', detail: 'Layout animations, scroll-driven effects, reduced-motion' },
                ],
              },
              {
                category: 'Backend & Data',
                icon: Database,
                items: [
                  { name: 'Prisma ORM', detail: 'Multi-tenant schemas, row-level security, migrations' },
                  { name: 'PostgreSQL', detail: 'Relational modeling, JSONB, indexes, transactions' },
                  { name: 'Better Auth', detail: 'Email/password, multi-tenant organizations, Prisma adapter' },
                  { name: 'Python 3.12', detail: 'Async pipelines, type hints, virtual environments' },
                ],
              },
              {
                category: 'Automation & Media',
                icon: Cpu,
                items: [
                  { name: 'faster-whisper', detail: 'CPU int8 transcription, word timestamps, VAD filtering' },
                  { name: 'FFmpeg', detail: 'H.264/AAC encoding, libass burning, loudnorm, VAAPI' },
                  { name: 'OpenCV / YuNet ONNX', detail: 'Face detection, EMA smoothing, vertical reframing' },
                  { name: 'yt-dlp', detail: '1000+ site support, resumable downloads, metadata' },
                  { name: 'ASS Captions', detail: 'Karaoke styles, word-level timing, SRT export' },
                ],
              },
            ].map((group) => (
              <div key={group.category} className="card p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                    <group.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-medium text-heading-sm text-text">{group.category}</h3>
                </div>
                <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <dt className="font-mono text-body-sm font-medium text-text">{item.name}</dt>
                      <dd className="mt-0.5 text-body-sm text-text-muted">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact CTA */}
        <Section id="contact" compact className="bg-surface/30" index={6}>
          <div className="max-w-2xl mx-auto text-center card-elevated p-10 lg:p-16">
            <h2 className="font-display text-display-md lg:text-display-lg text-text mb-4">
              Open to opportunities
            </h2>
            <p className="text-body-lg text-text-muted mb-8">
              Freelance projects, collaborations, or just a conversation about software — I'm easy to reach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Me
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a href="mailto:lmugo5046@gmail.com" className="btn-secondary">
                Email Directly
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}