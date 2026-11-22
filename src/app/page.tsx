'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Zap,
  Database,
  Cpu,
  Globe,
  Mail,
  MessageSquare,
  MapPin,
} from 'lucide-react'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ProjectIndex } from '@/components/ui/ProjectIndex'
import { getAllProjects } from '@/lib/projects'

const capabilities = [
  {
    title: 'Web application development',
    description:
      'Full-stack applications with Next.js, React and TypeScript. App Router, server components, and interfaces that hold up under real content.',
  },
  {
    title: 'Frontend engineering',
    description:
      'Accessible, responsive interfaces built with Tailwind CSS, deliberate motion, and design systems that stay consistent as a product grows.',
  },
  {
    title: 'Product data modelling',
    description:
      'Multi-tenant schemas with Prisma and PostgreSQL, authentication, and admin tooling designed around the workflows people actually run.',
  },
  {
    title: 'Workflow automation',
    description:
      'Local-first pipelines for media and content work: Python, FFmpeg, faster-whisper, and hardware-aware processing without a cloud bill.',
  },
  {
    title: 'AI integration & prototyping',
    description:
      'Service abstractions that start as a mock and swap cleanly for a model. Context injection, intent handling, and action execution.',
  },
  {
    title: 'Data-oriented thinking',
    description:
      'A statistics and mathematics foundation applied to product decisions — measurement, trade-offs, and reasoning about uncertainty.',
  },
]

export default function HomePage() {
  const projects = getAllProjects()

  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,rgba(196,181,160,0.10),transparent_60%)]"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grain" aria-hidden="true" />

          <div className="container-custom flex min-h-[calc(100svh-5rem)] flex-col justify-center pb-16 pt-24 sm:pt-28 lg:pb-20 lg:pt-24">
            <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="eyebrow mb-6">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  Thika, Kenya — available for freelance
                </p>

                <h1 className="font-display text-[clamp(3.5rem,11vw,7.5rem)] leading-[0.86] tracking-[-0.03em] text-text">
                  LEWIS
                  <br />
                  MUGO<span className="text-accent">.</span>
                </h1>

                <p className="mt-6 font-display text-[clamp(1.35rem,2.4vw,1.9rem)] italic leading-tight text-text">
                  Web Developer, Software Builder & Data Science Student
                </p>

                <p className="mt-5 max-w-xl text-body-lg text-text-muted">
                  I build web applications, business tools and local-first pipelines. This portfolio presents a selection of real projects — each captured from the running build.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href="/work" className="btn-primary group">
                    See the projects
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Get in touch
                  </Link>
                </div>

                <p className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text-subtle">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent/70" aria-hidden="true" />
                    Thika, Kenya
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-accent/70" aria-hidden="true" />
                    lmugo5046@gmail.com
                  </span>
                </p>
              </motion.div>

              <motion.figure
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              >
                <div className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-elevated">
                  <Image
                    src="/projects/butchery-os/storefront.webp"
                    alt="Butchery OS storefront hero with the headline Premium Cuts, Delivered Your Way"
                    width={1440}
                    height={720}
                    className="h-auto w-full"
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
                </div>
                <figcaption className="mt-4 plate-caption">
                  <span>Plate 01 — Butchery OS storefront</span>
                  <Link href="/work/butchery-os" className="inline-flex items-center gap-1 text-text-muted hover:text-accent">
                    View project
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </figcaption>
              </motion.figure>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <Section id="how-i-work" compact index={1}>
          <SectionHeader
            label="HOW I WORK"
            title="Thoughtful engineering. Practical results."
          />
          <div className="max-w-3xl mx-auto text-center">
            <p className="lead-paragraph">
              I bring together software development, automation and analytical thinking to build digital experiences around real-world needs.
            </p>
          </div>
        </Section>

        {/* Projects Index */}
        <Section id="work" className="border-t border-border" index={2}>
          <SectionHeader
            label="Selected work"
            title="Selected work"
            description="A selection of digital products and software projects exploring practical problems across business platforms, automation and web experiences. Each row is a real build, captured from the running application."
          />
          <div className="space-y-0">
            {projects.map((project, index) => (
              <ProjectIndex key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="mt-10">
            <Link href="/work" className="btn-secondary inline-flex">
              Open the full work index
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Section>

        {/* Capabilities */}
        <Section id="capabilities" className="border-t border-border bg-surface/30" index={3}>
          <SectionHeader
            label="Capabilities"
            title="What I build with"
            description="Technologies and domains backed by shipped code rather than tutorial completions."
          />
          <ol className="space-y-4 md:grid md:grid-cols-2 md:gap-8">
            {capabilities.map((cap, index) => (
              <li key={cap.title} className="relative pl-12 pb-8 md:pb-0 md:border-r md:border-border last:md:border-0">
                <span className="absolute left-0 top-1 mono-index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mb-2 font-medium text-heading-sm text-text">{cap.title}</h3>
                <p className="text-body-sm text-text-muted">{cap.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text-subtle">
            TypeScript · Next.js · React · Tailwind CSS · Prisma · PostgreSQL · Better Auth · Python · FFmpeg · Faster-Whisper · OpenCV · Vite
          </div>
        </Section>

        {/* About Preview */}
        <Section id="about-preview" className="border-t border-border" index={4}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow">About</span>
              <h2 className="mt-4 font-display text-display-lg leading-[0.95] text-text">
                Lewis Mugo
                <span className="text-accent">.</span>
              </h2>
              <p className="mt-5 max-w-md text-body text-text-muted">
                Data Science student at the University of Nairobi. Building software
                independently alongside my studies. Based in Thika, Kenya.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/about" className="btn-secondary text-body-sm">
                  Full story
                </Link>
                <a
                  href="mailto:lmugo5046@gmail.com"
                  className="inline-flex items-center gap-2 text-body-sm text-text-muted transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email
                </a>
                <a
                  href="https://wa.me/254113781240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-body-sm text-text-muted transition-colors hover:text-accent"
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-5 text-body-lg text-text-muted lg:col-span-7">
              <p>
                My academic work in statistics, linear algebra and discrete mathematics shapes how
                I approach software: as a system with measurable properties and real trade-offs,
                not a sequence of isolated coding tasks.
              </p>
              <p>
                Outside coursework I build full-stack applications, automation pipelines and client
                websites, and I keep this portfolio as a record of that work.
              </p>
            </div>
          </div>
        </Section>

        {/* Contact CTA */}
        <Section id="contact-cta" compact className="border-t border-border bg-surface/30" index={5}>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-display text-display-md text-text lg:text-display-lg">
                Let&apos;s build something.
              </h2>
              <p className="mt-4 max-w-xl text-body-lg text-text-muted">
                Freelance projects, collaborations, or a conversation about software — I am open to
                it.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href="mailto:lmugo5046@gmail.com" className="btn-secondary">
                Email directly
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}