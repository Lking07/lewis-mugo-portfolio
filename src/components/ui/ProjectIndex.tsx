'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Project } from '@/lib/projects'

interface ProjectIndexProps {
  project: Project
  index: number
}

export function ProjectIndex({ project, index }: ProjectIndexProps) {
  const statusClass = project.status === 'wip' ? 'status-wip' : 'status-local'

  return (
    <article className="group relative border-t border-border pt-8 first:border-0">
      <Link
        href={project.href}
        className="block grid gap-6 lg:grid-cols-[1fr_220px] items-start"
        aria-label={`View the ${project.title} case study`}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="mono-index">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="font-display text-display-sm lg:text-[1.75rem] leading-tight text-text group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
          </div>

          <p className="text-body text-text-muted pl-8">{project.description}</p>

          <div className="flex flex-wrap items-center gap-3 pl-8">
            <ul className="flex flex-wrap gap-1.5 font-mono text-[11px] uppercase tracking-wider text-text-muted" aria-label={`${project.title} technologies`}>
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <span className={`status-mono ${project.status === 'wip' ? 'status-wip' : 'status-local'}`}>
              {project.statusLabel}
            </span>
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface hidden lg:block">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
            sizes="220px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
        </div>
      </Link>
    </article>
  )
}