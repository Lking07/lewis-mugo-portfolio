import type { Metadata, Viewport } from 'next'
import './globals.css'
import { bodoniModa, manrope, plexMono } from './fonts'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lewismugo.com'
const description = 'Lewis Mugo — web developer, software builder and data science student in Thika, Kenya. Case studies of real, working software, documented honestly.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'LEWIS MUGO. — Web Developer & Software Builder',
    template: '%s | LEWIS MUGO.',
  },
  description,
  keywords: [
    'web developer',
    'software builder',
    'data science',
    'Next.js',
    'React',
    'TypeScript',
    'Python',
    'portfolio',
    'Thika',
    'Kenya',
  ],
  authors: [{ name: 'Lewis Mugo' }],
  creator: 'Lewis Mugo',
  publisher: 'Lewis Mugo',
  alternates: { canonical: '/' },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: '/',
    siteName: 'LEWIS MUGO.',
    title: 'LEWIS MUGO. — Web Developer & Software Builder',
    description,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'LEWIS MUGO. — portfolio of Lewis Mugo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LEWIS MUGO. — Web Developer & Software Builder',
    description,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#0a0a09',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-text antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}