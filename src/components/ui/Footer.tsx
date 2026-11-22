import Link from 'next/link'
import { Mail, MessageSquare, MapPin, ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50" role="contentinfo">
      <div className="container-custom py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-display text-display-md text-text hover:text-accent transition-colors duration-200 inline-block mb-6"
              aria-label="LEWIS MUGO — Home"
            >
              LEWIS MUGO<span className="text-accent">.</span>
            </Link>
            <p className="text-body-lg text-text-muted max-w-prose mb-8">
              I build practical digital experiences and software tools. Web applications,
              automation pipelines, and data-oriented products — crafted with care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:lmugo5046@gmail.com"
                className="inline-flex items-center gap-2 text-body text-text-muted hover:text-text transition-colors duration-200"
                aria-label="Email Lewis Mugo"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                lmugo5046@gmail.com
              </a>
              <a
                href="https://wa.me/254113781240"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body text-text-muted hover:text-text transition-colors duration-200"
                aria-label="WhatsApp Lewis Mugo"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                +254 113 781 240
              </a>
              <span className="inline-flex items-center gap-2 text-body text-text-muted">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                Thika, Kenya
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-heading-sm text-text mb-4">Selected Work</h3>
            <nav aria-label="Selected work">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/work/butchery-os"
                    className="text-body text-text-muted hover:text-text transition-colors duration-200"
                  >
                    Butchery OS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work/chopify"
                    className="text-body text-text-muted hover:text-text transition-colors duration-200"
                  >
                    Chopify
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work/charles-butchery"
                    className="text-body text-text-muted hover:text-text transition-colors duration-200"
                  >
                    Charles Butchery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="text-body text-text-muted hover:text-text transition-colors duration-200"
                  >
                    View all projects
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-medium text-heading-sm text-text mb-4">Connect</h3>
            <nav aria-label="Contact links">
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:lmugo5046@gmail.com"
                    className="inline-flex items-center gap-3 text-body text-text-muted hover:text-text transition-colors duration-200 group"
                    aria-label="Email Lewis Mugo"
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    <span>Email</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/254113781240"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-body text-text-muted hover:text-text transition-colors duration-200 group"
                    aria-label="WhatsApp Lewis Mugo"
                  >
                    <MessageSquare className="w-5 h-5" aria-hidden="true" />
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <span className="inline-flex items-center gap-3 text-body text-text-subtle">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                    <span>Thika, Kenya</span>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-text-subtle">
            © {new Date().getFullYear()} LEWIS MUGO. All rights reserved.
          </p>
          <p className="text-body-sm text-text-subtle">
            Built with Next.js, TypeScript, and care.
          </p>
        </div>
      </div>
    </footer>
  )
}