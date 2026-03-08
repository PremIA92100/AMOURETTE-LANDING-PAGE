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
                ? 'Politique de protection des données'
                : 'Privacy Policy'}
            </h1>

            <h2 className="text-2xl font-serif text-stone-900">1. Responsable du traitement</h2>
            <p className="text-stone-600 leading-relaxed">
              DELESSERT, SIRET 88413566600011, exploitant le restaurant Amourette,
              10 Boulevard Delessert, 75016 Paris.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">2. Données collectées</h2>
            <p className="text-stone-600 leading-relaxed">
              Les données personnelles collectées sont limitées aux informations
              nécessaires au traitement des réservations et des demandes de contact :
              nom, prénom, adresse email, numéro de téléphone.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">3. Finalité</h2>
            <p className="text-stone-600 leading-relaxed">
              Les données sont traitées pour la gestion des réservations, la
              communication avec nos clients, et l&apos;amélioration de nos services.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">4. Vos droits</h2>
            <p className="text-stone-600 leading-relaxed">
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
              rectification, de suppression et de portabilité de vos données.
              Contactez-nous au 09 52 86 14 47 ou à l&apos;adresse du restaurant.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">5. Durée de conservation</h2>
            <p className="text-stone-600 leading-relaxed">
              Les données sont conservées pendant la durée nécessaire aux
              finalités pour lesquelles elles ont été collectées, dans le respect
              des obligations légales.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
