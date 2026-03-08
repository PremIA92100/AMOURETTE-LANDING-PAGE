'use client'

import { motion } from 'framer-motion'
import { Phone, Clock, MapPin } from 'lucide-react'
import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function ReservationPageContent({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <PageLayout locale={locale}>
      <section className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="text-5xl md:text-8xl font-serif text-stone-900 mb-8"
            >
              {locale === 'fr' ? 'Réserver une table' : 'Book a Table'}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
              className="text-stone-500 text-xl font-light leading-relaxed mb-12"
            >
              {locale === 'fr'
                ? "Contactez-nous par téléphone pour réserver votre table ou pour toute demande d'événement privatisé."
                : 'Contact us by phone to book your table or for any private event inquiry.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
              className="space-y-8"
            >
              <a
                href="tel:0952861447"
                className="inline-flex items-center gap-4 px-10 py-6 bg-amourette text-white rounded-full text-xl font-bold hover:bg-stone-900 transition-colors duration-500"
              >
                <Phone size={24} />
                09 52 86 14 47
              </a>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 text-stone-500">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-amourette" />
                  <span>Lun - Dim : 11h30 - 02h00</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-amourette" />
                  <span>10 Bd Delessert, 75016 Paris</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
