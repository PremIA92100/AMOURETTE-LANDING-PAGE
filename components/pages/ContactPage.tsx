'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Train, Bus } from 'lucide-react'
import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function ContactPageContent({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <PageLayout locale={locale}>
      <section className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="text-5xl md:text-8xl font-serif text-stone-900 mb-16 text-center"
            >
              {locale === 'fr' ? 'Contact' : 'Contact'}
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: easeOutExpo }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-serif text-stone-900">
                    Amourette Terrasse Paris Passy
                  </h2>

                  <div className="space-y-4 text-stone-600">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-amourette mt-1 shrink-0" size={20} />
                      <span>10 Boulevard Delessert, 75016 Paris</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="text-amourette shrink-0" size={20} />
                      <a href="tel:0952861447" className="hover:text-amourette transition-colors">
                        09 52 86 14 47
                      </a>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="text-amourette mt-1 shrink-0" size={20} />
                      <span>Lun - Dim : 11h30 - 02h00</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-serif text-stone-900">
                    {locale === 'fr' ? 'Acces' : 'Getting here'}
                  </h3>
                  <div className="space-y-3 text-stone-600">
                    <div className="flex items-center gap-4">
                      <Train className="text-amourette shrink-0" size={20} />
                      <span>Ligne 9 : Trocadero | Ligne 6 : Passy, Trocadero</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Bus className="text-amourette shrink-0" size={20} />
                      <span>Ligne 32 : Passy - La Tour</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
                  className="space-y-3"
                >
                  <h3 className="text-xl font-serif text-stone-900">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Terrasse', 'Musique live', 'Privatisation', 'Climatisation'].map((s) => (
                      <span
                        key={s}
                        className="px-4 py-2 border border-stone-200 rounded-full text-sm text-stone-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-stone-500">
                    Paiement : Carte Bleue, Especes
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
                className="h-[500px] rounded-lg overflow-hidden border border-stone-200"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8!2d2.2785!3d48.8575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6700469694f73%3A0x6e3a5d1c8e8c8a0!2s10%20Bd%20Delessert%2C%2075016%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amourette Passy - Google Maps"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
