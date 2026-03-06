import PageLayout from '@/components/layout/PageLayout'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import MenuPreview from '@/components/sections/MenuPreview'
import GallerySection from '@/components/sections/Gallery'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <PageLayout locale="fr">
      <Hero locale="fr" />
      <About />
      <MenuPreview locale="fr" />
      <GallerySection locale="fr" />
      <ContactSection locale="fr" />
    </PageLayout>
  )
}
