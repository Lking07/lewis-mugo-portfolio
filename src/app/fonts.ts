import localFont from 'next/font/local'

export const bodoniModa = localFont({
  src: [
    { path: './fonts/bodoni-moda-regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/bodoni-moda-regular-italic.ttf', weight: '400', style: 'italic' },
    { path: './fonts/bodoni-moda-bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/bodoni-moda-bold-italic.ttf', weight: '700', style: 'italic' },
  ],
  variable: '--font-display',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

export const manrope = localFont({
  src: [{ path: './fonts/manrope-variable.woff2', weight: '400 700', style: 'normal' }],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
})

export const plexMono = localFont({
  src: [
    { path: './fonts/ibm-plex-mono-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ibm-plex-mono-500.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
})