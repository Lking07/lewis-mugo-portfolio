'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { Section } from '@/components/ui/Section'
import { ProjectIndex } from '@/components/ui/ProjectIndex'
import { getAllProjects } from '@/lib/projects'
import { ArrowRight } from 'lucide-react'

export default function WorkPage() {
  const projects = getAllProjects()

  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_0%,rgba(196,181,160,0.10),transparent_65%)]"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-grain" aria-hidden="true" />

          <div className="container-custom relative pb-16 pt-32 sm:pt-36 lg:pb-20 lg:pt-40">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="eyebrow">Selected work</span>
              <h1 className="mt-5 font-display text-[clamp(3.25rem,9vw,6.5rem)] leading-[0.88] tracking-[-0.03em] text-text">
                Work<span className="text-accent">.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-body-lg text-text-muted">
                A selection of digital products and software projects exploring practical problems
                across business platforms, automation and web experiences. Each page shows the
                interface as it actually renders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Index */}
        <Section id="projects">
          <div className="space-y-0">
            {projects.map((project, index) => (
              <ProjectIndex key={project.id} project={project} index={index} />
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section id="cta" compact className="border-t border-border bg-surface/30">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-display text-display-md text-text">Want the detail?</h2>
              <p className="mt-4 max-w-xl text-body-lg text-text-muted">
                Each project page shows what the build does, which tools it uses and where it stands.
              </p>
            </div>
            <Link href="/contact" className="btn-primary inline-flex">
              Ask me about a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}