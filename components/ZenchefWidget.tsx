'use client'

import { useEffect } from 'react'
import type { Locale } from '@/lib/i18n'

export default function ZenchefWidget({ locale = 'fr' }: { locale?: Locale }) {
  const lang = ['fr', 'en', 'de', 'es', 'it', 'pt'].includes(locale) ? locale : 'en'

  useEffect(() => {
    // Zenchef SDK injection (background, non-blocking)
    ;(function (d: Document, s: string, id: string) {
      const el = d.getElementsByTagName(s)[0]
      if (d.getElementById(id) || !el?.parentNode) return
      const js = d.createElement(s) as HTMLScriptElement
      js.id = id
      js.src = 'https://sdk.zenchef.com/v1/sdk.min.js'
      el.parentNode.insertBefore(js, el)
    })(document, 'script', 'zenchef-sdk')
  }, [])

  return (
    <>
      {/* Zenchef SDK config */}
      <div
        className="zc-widget-config"
        data-restaurant="355141"
        data-lang={lang}
        data-primary-color="#67A89A"
      />

      {/* Bouton réservation toujours visible immédiatement */}
      <a
        href={`https://bookings.zenchef.com/results?rid=355141&lang=${lang}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] bg-[#67A89A] hover:bg-[#5a9689] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors duration-300 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        {locale === 'fr' ? 'Réserver' : 'Book'}
      </a>
    </>
  )
}
