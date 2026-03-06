import type { Metadata } from 'next'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import ReservationPageContent from '@/components/pages/ReservationPage'

export const metadata: Metadata = {
  title: getPageMeta('reservation', 'fr').title,
  description: getPageMeta('reservation', 'fr').description,
  alternates: {
    canonical: getCanonicalUrl('reservation', 'fr'),
    ...getAlternatesForMetadata('reservation'),
  },
}

export default function ReservationPage() {
  return <ReservationPageContent locale="fr" />
}
