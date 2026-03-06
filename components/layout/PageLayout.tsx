import Navbar from './Navbar'
import Footer from './Footer'
import type { Locale } from '@/lib/i18n'

export default function PageLayout({
  children,
  locale = 'fr',
}: {
  children: React.ReactNode
  locale?: Locale
}) {
  return (
    <>
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  )
}
