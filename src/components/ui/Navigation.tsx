'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: 'transform, background-color' }}
      >
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="font-display text-display-sm text-text hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              aria-label="LEWIS MUGO — Home"
            >
              LEWIS MUGO<span className="text-accent">.</span>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium text-body-sm transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-text'
                      : 'text-text-muted hover:text-text'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-[-4px] left-0 h-[1px] bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive(item.href) ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex btn-primary text-body-sm"
              >
                Get in touch
              </Link>

              <button
                className="btn-ghost p-2 lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <motion.div
            id="mobile-menu"
            className="lg:hidden overflow-hidden border-t border-border bg-background"
            initial={false}
            animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-2 py-3 font-medium text-body ${
                    isActive(item.href)
                      ? 'text-text'
                      : 'text-text-muted hover:text-text'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Link
                  href="/contact"
                  className="inline-flex btn-primary text-body-sm w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </motion.div>
        </nav>
      </motion.header>
    </>
  )
}