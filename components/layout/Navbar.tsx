'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MapPin, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { slugMap } from '@/lib/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'

type NavLink = { name: string; href: string }

const navByLocale: Record<string, NavLink[]> = {
  fr: [
    { name: 'La Carte', href: '/menus-carte/' },
    { name: 'Photos', href: '/photos/' },
    { name: 'Privatisations', href: '/o/privatisations/' },
    { name: 'Contact', href: '/informations-contact/' },
  ],
  en: [
    { name: 'Menu', href: '/en/menus/' },
    { name: 'Photos', href: '/en/photos/' },
    { name: 'Private Events', href: '/en/o/privatisations/' },
    { name: 'Contact', href: '/en/address-contact/' },
  ],
}

function getNavLinks(locale: Locale): NavLink[] {
  if (navByLocale[locale]) return navByLocale[locale]
  return [
    { name: 'Menu', href: slugMap.menus[locale] },
    { name: 'Photos', href: slugMap.photos[locale] },
    { name: 'Privatisations', href: slugMap.privatisations[locale] },
    { name: 'Contact', href: slugMap.contact[locale] },
  ]
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Navbar({ locale = 'fr' }: { locale?: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = getNavLinks(locale)
  const homeHref = locale === 'fr' ? '/' : `/${locale}/`

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <>
      {/* ─── Navbar ─── */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-paper/90 backdrop-blur-md py-4 shadow-sm border-b border-stone-100/50'
            : 'bg-transparent py-6 md:py-8'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href={homeHref}
            className={`text-2xl font-serif font-bold tracking-tighter transition-colors z-50 ${
              isMenuOpen
                ? 'text-stone-900'
                : isScrolled
                  ? 'text-amourette'
                  : 'text-white'
            }`}
          >
            Amourette
          </Link>

          {/* Right side: Language + Hamburger */}
          <div className="flex items-center gap-4 z-50">
            {!isMenuOpen && (
              <LanguageSwitcher locale={locale} isScrolled={isScrolled} compact />
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ${
                isMenuOpen
                  ? 'text-stone-900'
                  : isScrolled
                    ? 'text-stone-900'
                    : 'text-white'
              }`}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ─── Fullscreen overlay menu ─── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
            className="fixed inset-0 z-40 bg-paper flex flex-col justify-center items-center"
          >
            {/* Nav links */}
            <nav className="flex flex-col items-center gap-2 md:gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                    ease: easeOutExpo,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl md:text-5xl font-serif text-stone-800 hover:text-amourette transition-colors duration-300 py-3 md:py-4 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: easeOutExpo }}
              className="w-16 h-[1px] bg-amourette/40 mt-10 md:mt-14 mb-8 md:mb-10 origin-center"
            />

            {/* Footer info */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: easeOutExpo }}
              className="flex flex-col items-center gap-3 text-stone-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-amourette" />
                <span>10 Bd Delessert, 75016 Paris</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-amourette" />
                <a href="tel:0952861447" className="hover:text-amourette transition-colors">
                  09 52 86 14 47
                </a>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://www.instagram.com/amourettepassy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amourette transition-colors uppercase tracking-widest text-xs"
                >
                  Instagram
                </a>
                <span className="text-stone-300">·</span>
                <a
                  href="https://www.tripadvisor.fr/Restaurant_Review-g187147-d25182853-Reviews-Amourette_Passy-Paris_Ile_de_France.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amourette transition-colors uppercase tracking-widest text-xs"
                >
                  TripAdvisor
                </a>
              </div>
            </motion.div>

            {/* Language switcher in menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-8"
            >
              <LanguageSwitcher locale={locale} isScrolled={true} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
