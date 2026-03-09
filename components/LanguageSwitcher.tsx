'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { locales, slugMap, type Locale } from '@/lib/i18n'

const languageData: Record<Locale, { name: string; flag: string }> = {
  fr: { name: 'Français', flag: '🇫🇷' },
  en: { name: 'English', flag: '🇬🇧' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  es: { name: 'Español', flag: '🇪🇸' },
  it: { name: 'Italiano', flag: '🇮🇹' },
  pt: { name: 'Português', flag: '🇵🇹' },
  nl: { name: 'Nederlands', flag: '🇳🇱' },
  zh: { name: '中文', flag: '🇨🇳' },
  ja: { name: '日本語', flag: '🇯🇵' },
  ru: { name: 'Русский', flag: '🇷🇺' },
  el: { name: 'Ελληνικά', flag: '🇬🇷' },
  cs: { name: 'Čeština', flag: '🇨🇿' },
}

function detectCurrentSection(pathname: string): { section: string; locale: Locale } {
  for (const [section, slugsByLocale] of Object.entries(slugMap)) {
    for (const [locale, slug] of Object.entries(slugsByLocale)) {
      const normalizedPath = pathname.replace(/\/$/, '') || '/'
      const normalizedSlug = slug.replace(/\/$/, '') || '/'
      if (normalizedPath === normalizedSlug) {
        return { section, locale: locale as Locale }
      }
    }
  }
  return { section: 'home', locale: 'fr' }
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function LanguageSwitcher({
  locale: currentLocale,
  isScrolled = false,
  compact = false,
}: {
  locale: Locale
  isScrolled?: boolean
  compact?: boolean
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
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Lock body scroll when panel open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <div ref={ref}>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 text-sm uppercase tracking-widest font-medium transition-colors ${
          isScrolled
            ? 'text-stone-600 hover:text-amourette'
            : 'text-stone-300 hover:text-white'
        }`}
        aria-label="Change language"
      >
        {!compact && <Globe size={16} />}
        {currentLocale.toUpperCase()}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-0.5 opacity-60">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Fullscreen overlay + panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Language panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: easeOutExpo }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] bg-paper rounded-2xl shadow-2xl border border-stone-100 p-8 md:p-10 w-[90vw] max-w-md max-h-[80vh] overflow-y-auto"
            >
              {/* Title */}
              <p className="text-amourette text-xs font-bold uppercase tracking-[0.3em] mb-6 text-center">
                Langue / Language
              </p>

              {/* Language grid */}
              <div className="grid grid-cols-2 gap-2">
                {locales.map((lang, i) => {
                  const href = slugMap[section as keyof typeof slugMap]?.[lang] || `/${lang}/`
                  const data = languageData[lang]
                  const isActive = lang === currentLocale

                  return (
                    <motion.div
                      key={lang}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.03, ease: easeOutExpo }}
                    >
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 min-h-[48px] ${
                          isActive
                            ? 'bg-amourette/10 text-amourette font-semibold'
                            : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                        }`}
                      >
                        <span className="text-xl">{data.flag}</span>
                        <span className="text-sm">{data.name}</span>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
