import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'

export default function CookiesPageContent({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <PageLayout locale={locale}>
      <section className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-stone">
            <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-12">
              {locale === 'fr' ? 'Politique de cookies' : 'Cookie Policy'}
            </h1>

            <h2 className="text-2xl font-serif text-stone-900">
              {locale === 'fr' ? "Qu'est-ce qu'un cookie ?" : 'What is a cookie?'}
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Un cookie est un petit fichier texte depose sur votre terminal lors
              de la visite d&apos;un site web. Il permet au site de memoriser des
              informations sur votre visite.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">
              {locale === 'fr' ? 'Cookies utilises' : 'Cookies used'}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-stone-600">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-3 pr-4 font-medium text-stone-900">Cookie</th>
                    <th className="text-left py-3 pr-4 font-medium text-stone-900">
                      {locale === 'fr' ? 'Finalite' : 'Purpose'}
                    </th>
                    <th className="text-left py-3 font-medium text-stone-900">
                      {locale === 'fr' ? 'Duree' : 'Duration'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="py-3 pr-4">Cookies essentiels</td>
                    <td className="py-3 pr-4">Fonctionnement du site</td>
                    <td className="py-3">Session</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3 pr-4">Google Analytics</td>
                    <td className="py-3 pr-4">Mesure d&apos;audience</td>
                    <td className="py-3">13 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">
              {locale === 'fr' ? 'Gestion des cookies' : 'Managing cookies'}
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Vous pouvez a tout moment modifier vos preferences en matiere de
              cookies via les parametres de votre navigateur.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
