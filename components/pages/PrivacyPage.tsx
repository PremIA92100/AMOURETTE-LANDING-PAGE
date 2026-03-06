import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'

export default function PrivacyPageContent({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <PageLayout locale={locale}>
      <section className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-stone">
            <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-12">
              {locale === 'fr'
                ? 'Politique de protection des donnees'
                : 'Privacy Policy'}
            </h1>

            <h2 className="text-2xl font-serif text-stone-900">1. Responsable du traitement</h2>
            <p className="text-stone-600 leading-relaxed">
              DELESSERT, SIRET 88413566600011, exploitant le restaurant Amourette,
              10 Boulevard Delessert, 75016 Paris.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">2. Donnees collectees</h2>
            <p className="text-stone-600 leading-relaxed">
              Les donnees personnelles collectees sont limitees aux informations
              necessaires au traitement des reservations et des demandes de contact :
              nom, prenom, adresse email, numero de telephone.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">3. Finalite</h2>
            <p className="text-stone-600 leading-relaxed">
              Les donnees sont traitees pour la gestion des reservations, la
              communication avec nos clients, et l&apos;amelioration de nos services.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">4. Vos droits</h2>
            <p className="text-stone-600 leading-relaxed">
              Conformement au RGPD, vous disposez d&apos;un droit d&apos;acces, de
              rectification, de suppression et de portabilite de vos donnees.
              Contactez-nous au 09 52 86 14 47 ou a l&apos;adresse du restaurant.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">5. Duree de conservation</h2>
            <p className="text-stone-600 leading-relaxed">
              Les donnees sont conservees pendant la duree necessaire aux
              finalites pour lesquelles elles ont ete collectees, dans le respect
              des obligations legales.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
