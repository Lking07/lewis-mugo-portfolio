import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseStudy } from '@/components/ui/CaseStudy'
import { getProject } from '@/lib/projects'

const project = getProject('charles-butchery')

export const metadata: Metadata = {
  title: 'Charles Butchery',
  description:
    'A digital storefront bringing the product catalogue, customer experience and WhatsApp ordering journey into one cohesive experience for a Nairobi butchery. Built with Vite, JavaScript and Tailwind CSS.',
}

export default function Page() {
  if (!project) notFound()

  return (
    <CaseStudy project={project}>
      <p>
        Charles Butchery is a digital storefront for a real butcher business — the kind of
        client site where the job is to bring the product catalogue, customer experience and
        ordering journey into one cohesive experience. It presents the shop, its categories
        and its cuts, with prices by weight and an order builder that carries a basket.
      </p>
      <p>
        The build is deliberately light: Vite, plain JavaScript and Tailwind CSS, with the
        cart persisted in localStorage. Ordering hands off to WhatsApp with a pre-filled
        message, which is how many small Kenyan businesses actually take orders.
      </p>
      <p>
        Business details, pricing and product photography are placeholders. The patterns —
        catalogue, filters, basket, messaging handoff — are the same ones a production
        client site needs.
      </p>
    </CaseStudy>
  )
}