'use client'

import { ReactNode, isValidElement } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Project, getAllProjects } from '@/lib/projects'

interface CaseStudyProps {
  project: Project
  children?: ReactNode
}

function getPrevNext(currentSlug: string) {
  const all = getAllProjects()
  const currentIndex = all.findIndex((p) => p.slug === currentSlug)
  const prev = currentIndex > 0 ? all[currentIndex - 1] : null
  const next = currentIndex < all.length - 1 ? all[currentIndex + 1] : null
  return { prev, next }
}

function renderChildren(children: ReactNode) {
  const nodes = Array.isArray(children) ? children : [children]
  return nodes.map((child, i) => {
    if (isValidElement(child)) {
      return (
        <p key={i} className={i === 0 ? 'lead-paragraph' : 'text-text-muted'}>
          {(child.props as Record<string, unknown>).children as React.ReactNode}
        </p>
      )
    } else {
      return (
        <p key={i} className={i === 0 ? 'lead-paragraph' : 'text-text-muted'}>
          {child}
        </p>
      )
    }
  })
}

export function CaseStudy({ project, children }: CaseStudyProps) {
  const { prev, next } = getPrevNext(project.slug)

  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_0%,rgba(196,181,160,0.10),transparent_65%)]"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-grain" aria-hidden="true" />

          <div className="container-custom relative pb-14 pt-32 sm:pt-36 lg:pb-16 lg:pt-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-subtle transition-colors hover:text-text"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                All work
              </Link>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="mono-index">{project.category}</span>
                <span className={`status-mono ${project.status === 'wip' ? 'status-wip' : 'status-local'}`}>
                  {project.statusLabel}
                </span>
              </div>

              <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.03em] text-text">
                {project.title}
                <span className="text-accent">.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-body-lg text-text-muted">{project.description}</p>

              {/* Facts Panel */}
              <dl className="mt-10 facts-panel">
                <div>
                  <dt>Stack</dt>
                  <dd>{project.tech.join(' / ')}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{project.statusLabel}</dd>
                </div>
                <div>
                  <dt>Scope</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>Note</dt>
                  <dd>{project.note ?? '—'}</dd>
                </div>
              </dl>
            </motion.div>
          </div>
        </section>

        {/* Context */}
        {children && (
          <section className="section-compact border-b border-border">
            <div className="container-custom grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="eyebrow">Context</span>
              </div>
              <div className="space-y-6 text-body-lg text-text-muted lg:col-span-8 max-w-3xl">
                {renderChildren(children)}
              </div>
            </div>
          </section>
        )}

        {/* Plates */}
        <section className="section">
          <div className="container-custom">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <span className="eyebrow">Plates</span>
                <h2 className="mt-4 font-display text-display-md text-text">From the running build</h2>
              </div>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-text-subtle sm:block">
                {project.images.length} {project.images.length === 1 ? 'plate' : 'plates'}
              </span>
            </div>

            <div className="space-y-8">
              {project.images.map((shot, index) => (
                <figure key={shot.src} className="plate">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    className="h-auto w-full"
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    priority={index === 0}
                  />
                  <figcaption className="plate-caption">
                    <span>Plate {String(index + 1).padStart(2, '0')} — {shot.caption}</span>
                    <Link href={project.href} className="inline-flex items-center gap-1 text-text-muted hover:text-accent">
                      View project
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        <nav className="section-compact border-t border-border bg-surface/30" aria-label="Project navigation">
          <div className="container-custom flex items-center justify-between">
            {prev && (
              <Link href={prev.href} className="project-nav-link">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>
                  <span className="mono-index">Previous</span>
                  <br />
                  <span className="mono-index-strong">{prev.title}</span>
                </span>
              </Link>
            )}

            <Link href="/work" className="btn-secondary">
              All projects
            </Link>

            {next && (
              <Link href={next.href} className="project-nav-link project-nav-link-next">
                <span>
                  <span className="mono-index">Next</span>
                  <br />
                  <span className="mono-index-strong">{next.title}</span>
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </nav>

        {/* CTA */}
        <section className="section-compact border-t border-border bg-surface/30">
          <div className="container-custom flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="max-w-xl text-body-lg text-text-muted">
              Want to know more about how this was built, or what is still missing?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/work" className="btn-secondary">
                All projects
              </Link>
              <Link href="/contact" className="btn-primary">
                Get in touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}