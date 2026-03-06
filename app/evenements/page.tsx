import type { Metadata } from 'next'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import EventsPageContent from '@/components/pages/EventsPage'

export const metadata: Metadata = {
  title: getPageMeta('events', 'fr').title,
  description: getPageMeta('events', 'fr').description,
  alternates: {
    canonical: getCanonicalUrl('events', 'fr'),
    ...getAlternatesForMetadata('events'),
  },
}

export default function EvenementsPage() {
  return <EventsPageContent locale="fr" />
}
