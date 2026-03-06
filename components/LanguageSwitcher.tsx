'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { locales, slugMap, type Locale } from '@/lib/i18n'

const languageNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  zh: '中文',
  ja: '日本語',
  ru: 'Русский',
  el: 'Ελληνικά',
  cs: 'Čeština',
}

function detectCurrentSection(pathname: string): { section: string; locale: Locale } {
  // Try to find which section + locale matches the current pathname
  for (const [section, slugsByLocale] of Object.entries(slugMap)) {
    for (const [locale, slug] of Object.entries(slugsByLocale)) {
      // Normalize: remove trailing slash for comparison
      const normalizedPath = pathname.replace(/\/$/, '') || '/'
      const normalizedSlug = slug.replace(/\/$/, '') || '/'
      if (normalizedPath === normalizedSlug) {
        return { section, locale: locale as Locale }
      }
    }
  }
  return { section: 'home', locale: 'fr' }
}

export default function LanguageSwitcher({
  locale: currentLocale,
  isScrolled = false,
}: {
  locale: Locale
  isScrolled?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const { section } = detectCurrentSection(pathname)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 text-sm uppercase tracking-widest font-medium transition-colors ${
          isScrolled
            ? 'text-stone-600 hover:text-amourette'
            : 'text-stone-300 hover:text-white'
        }`}
        aria-label="Change language"
      >
        <Globe size={16} />
        {currentLocale.toUpperCase()}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-3 bg-white rounded-lg shadow-xl border border-stone-100 py-2 min-w-[160px] z-50">
          {locales.map((lang) => {
            const href = slugMap[section as keyof typeof slugMap]?.[lang] || `/${lang}/`
            return (
              <Link
                key={lang}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm transition-colors ${
                  lang === currentLocale
                    ? 'text-amourette font-semibold bg-stone-50'
                    : 'text-stone-600 hover:text-amourette hover:bg-stone-50'
                }`}
              >
                {languageNames[lang]}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
