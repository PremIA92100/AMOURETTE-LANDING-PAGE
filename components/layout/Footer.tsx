import { Instagram, MapPin, Phone, Clock } from 'lucide-react'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { slugMap } from '@/lib/i18n'

export default function Footer({ locale = 'fr' }: { locale?: Locale }) {
  const legalHref = slugMap.legal[locale]
  const privacyHref = slugMap.privacy[locale]
  const cookiesHref = slugMap.cookies[locale]
  const accessibilityHref = slugMap.accessibility[locale]

  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-gold">Amourette</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              {locale === 'fr'
                ? "Une cuisine de coeur, des vins d'auteurs et des moments a partager dans le 16eme arrondissement de Paris."
                : 'Heartfelt cuisine, artisan wines and shared moments in the 16th arrondissement of Paris.'}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/amourettepassy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors p-2 border border-stone-800 rounded-full hover:border-gold"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif text-white">
              {locale === 'fr' ? 'Nous trouver' : 'Find us'}
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="text-gold mt-1 min-w-5" size={18} />
                <span>10 Boulevard Delessert, 75016 Paris</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-gold min-w-5" size={18} />
                <a
                  href="tel:0952861447"
                  className="hover:text-gold transition-colors"
                >
                  09 52 86 14 47
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-gold mt-1 min-w-5" size={18} />
                <div>
                  <p>Lun - Dim : 11h30 - 02h00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif text-white">
              {locale === 'fr' ? 'Informations' : 'Information'}
            </h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href={legalHref} className="hover:text-gold transition-colors">
                {locale === 'fr' ? 'Mentions legales' : 'Legal notices'}
              </Link>
              <Link href={privacyHref} className="hover:text-gold transition-colors">
                {locale === 'fr' ? 'Politique de confidentialite' : 'Privacy policy'}
              </Link>
              <Link href={cookiesHref} className="hover:text-gold transition-colors">
                {locale === 'fr' ? 'Politique cookies' : 'Cookie policy'}
              </Link>
              <Link href={accessibilityHref} className="hover:text-gold transition-colors">
                {locale === 'fr' ? 'Accessibilite' : 'Accessibility'}
              </Link>
              <a
                href="https://www.polo-auteuil.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Nos restaurants
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-900 mt-16 pt-8 text-center text-xs text-stone-600">
          <p>
            &copy; {new Date().getFullYear()} Amourette Passy. Tous droits
            reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
