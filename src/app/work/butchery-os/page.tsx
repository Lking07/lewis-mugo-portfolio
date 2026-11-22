import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseStudy } from '@/components/ui/CaseStudy'
import { getProject } from '@/lib/projects'

const project = getProject('butchery-os')

export const metadata: Metadata = {
  title: 'Butchery OS',
  description:
    'A digital platform that unifies butcher shop operations and customer ordering — storefront, stock-aware catalogue, inventory management and an authenticated admin area. Built with Next.js, TypeScript, Prisma, PostgreSQL and Better Auth.',
}

export default function Page() {
  if (!project) notFound()

  return (
    <CaseStudy project={project}>
      <p>
        Butchery OS was built to test one question: can the admin side of a small butcher
        shop and the customer-facing shop live in the same application without either
        feeling bolted on? The answer is a single Next.js app with a storefront, a product
        catalogue, stock-aware inventory and an admin area behind authentication.
      </p>
      <p>
        The parts that matter most are the ordinary ones. Stock levels drive the badges and
        availability a customer sees. Prices are held in Kenyan shillings. The admin tables
        let stock, pricing and featured products change without touching code. Data is
        modelled with Prisma over PostgreSQL, and sessions are handled with Better Auth.
      </p>
    </CaseStudy>
  )
}