import type { Metadata } from 'next'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import ContactPageContent from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: getPageMeta('contact', 'fr').title,
  description: getPageMeta('contact', 'fr').description,
  alternates: {
    canonical: getCanonicalUrl('contact', 'fr'),
    ...getAlternatesForMetadata('contact'),
  },
}

export default function ContactPage() {
  return <ContactPageContent locale="fr" />
}
