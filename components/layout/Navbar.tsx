'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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

export default function Navbar({ locale = 'fr' }: { locale?: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navLinks = getNavLinks(locale)
  const homeHref = locale === 'fr' ? '/' : `/${locale}/`
  const reservationHref = slugMap.reservation[locale]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-paper/90 backdrop-blur-md py-4 shadow-sm border-b border-stone-100/50'
            : 'bg-transparent py-8'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link
            href={homeHref}
            className={`text-2xl font-serif font-bold tracking-tighter transition-colors ${
              isScrolled ? 'text-amourette' : 'text-white'
            }`}
          >
            Amourette
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors text-sm uppercase tracking-widest font-medium ${
                  isScrolled
                    ? 'text-stone-600 hover:text-amourette'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={reservationHref}
              className={`px-6 py-2 border uppercase text-xs tracking-widest font-bold transition-all duration-300 ${
                isScrolled
                  ? 'border-amourette text-amourette hover:bg-amourette hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-stone-900'
              }`}
            >
              {locale === 'fr' ? 'Réserver' : 'Book'}
            </Link>
            <LanguageSwitcher locale={locale} isScrolled={isScrolled} />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher locale={locale} isScrolled={isScrolled} compact />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-paper pt-24 px-6 md:hidden flex flex-col items-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-stone-600 min-h-[44px] flex items-center"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={reservationHref}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-4 min-h-[44px] bg-amourette text-white font-bold uppercase tracking-widest mt-8"
            >
              {locale === 'fr' ? 'Réserver une table' : 'Book a table'}
            </Link>
            <div className="mt-6">
              <LanguageSwitcher locale={locale} isScrolled={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
