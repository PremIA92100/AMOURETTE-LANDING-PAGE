import type { Metadata } from 'next'
import { getPageMeta } from '@/lib/metadata'
import { getAlternatesForMetadata, getCanonicalUrl } from '@/lib/hreflang'
import MenuPageContent from '@/components/pages/MenuPage'
import { menuSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: getPageMeta('menus', 'fr').title,
  description: getPageMeta('menus', 'fr').description,
  alternates: {
    canonical: getCanonicalUrl('menus', 'fr'),
    ...getAlternatesForMetadata('menus'),
  },
  other: {
    'script:ld+json': JSON.stringify(menuSchema),
  },
}

export default function MenusPage() {
  return <MenuPageContent locale="fr" />
}
