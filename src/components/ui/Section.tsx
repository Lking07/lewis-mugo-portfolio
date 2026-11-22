import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  compact?: boolean
  index?: number
}

export function Section({ children, className = '', id, compact = false }: SectionProps) {
  return (
    <section id={id} className={`${compact ? 'section-compact' : 'section'} ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
  id?: string
  index?: number
}

export function SectionHeader({
  label,
  title,
  description,
  className = '',
  align = 'left',
  id,
  index,
}: SectionHeaderProps) {
  return (
    <header className={`mb-12 lg:mb-14 ${className}`}>
      <div className="flex items-baseline gap-4">
        {index !== undefined && (
          <span className="mono-index shrink-0">{String(index).padStart(2, '0')}</span>
        )}
        <div>
          {label && <span className="eyebrow mb-4">{label}</span>}
          <h2
            id={id}
            className={`font-display text-display-md text-text lg:text-display-lg ${
              align === 'center' ? 'mx-auto text-center' : ''
            }`}
          >
            {title}
          </h2>
        </div>
      </div>
      {description && (
        <p
          className={`mt-4 text-body-lg text-text-muted ${
            align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
          }`}
        >
          {description}
        </p>
      )}
    </header>
  )
}