import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { Mail, MessageSquare, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Lewis Mugo about web development, software projects and collaborations. Email or WhatsApp.',
}

const email = 'lmugo5046@gmail.com'
const whatsapp = 'https://wa.me/254113781240'
const whatsappLabel = '+254 113 781 240'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_0%,rgba(196,181,160,0.10),transparent_65%)]"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-grain" aria-hidden="true" />

          <div className="container-custom relative pb-14 pt-32 sm:pt-36 lg:pb-20 lg:pt-40">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.03em] text-text">
              Let&rsquo;s build
              <br />
              something
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-text-muted">
              I&rsquo;m available for freelance work, collaborations and technical
              conversations. Email is best for anything detailed; WhatsApp is faster for a
              quick question.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${email}`} className="btn-primary">
                Email me
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section-compact">
          <div className="container-custom grid gap-4 md:grid-cols-3">
            <article className="card p-6 lg:p-8">
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="mt-5 font-display text-2xl text-text">Email</h2>
              <p className="mt-2 text-body-sm text-text-muted">
                For project briefs, proposals and anything that needs detail.
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-5 inline-flex items-center gap-1.5 break-all text-body-sm text-accent transition-colors hover:text-accent/80"
              >
                {email}
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </a>
            </article>

            <article className="card p-6 lg:p-8">
              <MessageSquare className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="mt-5 font-display text-2xl text-text">WhatsApp</h2>
              <p className="mt-2 text-body-sm text-text-muted">
                The quickest way to reach me for short questions and follow-ups.
              </p>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-body-sm text-accent transition-colors hover:text-accent/80"
              >
                {whatsappLabel}
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </a>
            </article>

            <article className="card p-6 lg:p-8">
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="mt-5 font-display text-2xl text-text">Location</h2>
              <p className="mt-2 text-body-sm text-text-muted">
                Based in Thika, Kenya (UTC+3). Open to remote work and collaboration
                anywhere.
              </p>
              <span className="mt-5 inline-block text-body-sm text-text-subtle">
                Thika, Kenya
              </span>
            </article>
          </div>
        </section>

        <section className="section-compact border-t border-border bg-surface/30">
          <div className="container-custom flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-display-sm text-text">
                Want to see the work first?
              </h2>
              <p className="mt-2 max-w-xl text-body text-text-muted">
                Three projects, each captured from the running build with its current status.
              </p>
            </div>
            <Link href="/work" className="btn-secondary">
              View projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}