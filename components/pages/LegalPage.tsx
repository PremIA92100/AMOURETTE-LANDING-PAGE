import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'

export default function LegalPageContent({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <PageLayout locale={locale}>
      <section className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-stone">
            <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-12">
              {locale === 'fr' ? 'Mentions legales' : 'Legal Notices'}
            </h1>

            <h2 className="text-2xl font-serif text-stone-900">
              1/ Editeur du site www.amourette-passy.fr
            </h2>
            <p className="text-stone-600 leading-relaxed">
              DELESSERT, au capital de 1 000 EUR, RCS 884135666, SIRET
              88413566600011
            </p>
            <p className="text-stone-600 leading-relaxed">
              Siege social : 34 Avenue des Champs-Elysees
            </p>
            <p className="text-stone-600 leading-relaxed">
              TVA : FR16884135666
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">
              2/ Hebergeur
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">
              3/ Contact
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Telephone : 09 52 86 14 47
            </p>
            <p className="text-stone-600 leading-relaxed">
              Adresse : 10 Boulevard Delessert, 75016 Paris
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
