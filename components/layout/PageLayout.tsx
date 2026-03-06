'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import ZenchefWidget from '@/components/ZenchefWidget'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import PageTransition from '@/components/PageTransition'
import type { Locale } from '@/lib/i18n'

export default function PageLayout({
  children,
  locale = 'fr',
}: {
  children: React.ReactNode
  locale?: Locale
}) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar locale={locale} />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer locale={locale} />
      <ZenchefWidget locale={locale} />
    </SmoothScroll>
  )
}
