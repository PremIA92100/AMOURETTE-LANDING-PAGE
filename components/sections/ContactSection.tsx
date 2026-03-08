'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { slugMap } from '@/lib/i18n'

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const contactItems = [
  {
    icon: MapPin,
    title: 'Adresse',
    value: '10 Boulevard Delessert, 75016 Paris',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    value: '09 52 86 14 47',
    href: 'tel:0952861447',
  },
  {
    icon: Clock,
    title: 'Horaires',
    value: 'Lundi au Dimanche, 11h30 - 02h00',
  },
]

export default function ContactSection({
  locale = 'fr',
}: {
  locale?: Locale
}) {
  return (
    <section className="py-20 pb-32 md:py-24 md:pb-24 bg-paper relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-10 md:space-y-12">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: easeOutExpo }}
                className="text-amourette text-sm font-bold uppercase tracking-[0.2em] mb-4 block"
              >
                Infos Pratiques
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: easeOutExpo,
                }}
                className="text-3xl md:text-6xl font-serif text-stone-900 mb-6 md:mb-8"
              >
                {locale === 'fr' ? 'Nous Contacter' : 'Contact Us'}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: easeOutExpo,
                }}
                className="text-stone-500 text-base md:text-lg font-light leading-relaxed"
              >
                {locale === 'fr'
                  ? "Pour toute demande d'événement privatisé ou de groupe, n'hésitez pas à nous contacter directement."
                  : 'For private event inquiries or group bookings, please contact us directly.'}
              </motion.p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {contactItems.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                      ease: easeOutExpo,
                    }}
                    className="flex items-start space-x-4 md:space-x-6"
                  >
                    <div className="p-3 md:p-4 rounded-full border border-stone-200 text-amourette shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-stone-900 text-lg md:text-xl font-serif mb-1 md:mb-2">
                        {item.title}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-stone-500 text-base md:hover:text-amourette transition-colors min-h-[44px] inline-flex items-center"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-stone-500 text-base">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.7, ease: easeOutExpo }}
              className="pt-4 md:pt-8"
            >
              <Link
                href={slugMap.reservation[locale]}
                className="inline-block w-full md:w-auto px-10 py-4 min-h-[44px] bg-stone-900 text-white text-center font-bold uppercase tracking-widest md:hover:bg-amourette transition-colors duration-300"
              >
                {locale === 'fr' ? 'Réserver une table' : 'Book a table'}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
            className="relative h-[350px] md:h-[600px] w-full overflow-hidden rounded-lg border border-stone-200"
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
    </section>
  )
}
