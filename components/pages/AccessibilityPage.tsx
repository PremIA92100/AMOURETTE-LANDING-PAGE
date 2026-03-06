import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'

export default function AccessibilityPageContent({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <PageLayout locale={locale}>
      <section className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-stone">
            <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-12">
              {locale === 'fr' ? 'Accessibilite' : 'Accessibility'}
            </h1>

            <p className="text-stone-500 text-sm italic mb-8">
              {locale === 'fr' ? 'Derniere mise a jour : Janvier 2026' : 'Last updated: January 2026'}
            </p>

            <p className="text-stone-600 leading-relaxed">
              Ce site vise la conformite WCAG 2.1 Niveau AA et respecte la Loi
              europeenne sur l&apos;accessibilite (EAA, 28 juin 2025).
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">
              {locale === 'fr' ? 'Fonctionnalites' : 'Features'}
            </h2>
            <ul className="text-stone-600 space-y-2">
              <li>Navigation au clavier complete</li>
              <li>Lien d&apos;evitement vers le contenu principal</li>
              <li>Attributs ARIA pour les composants interactifs</li>
              <li>Focus visible sur tous les elements interactifs</li>
              <li>Formulaires avec labels accessibles</li>
              <li>Textes alternatifs sur toutes les images</li>
              <li>Structure de titres hierarchique</li>
              <li>Support du mode reduced motion</li>
            </ul>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">Contact</h2>
            <p className="text-stone-600 leading-relaxed">
              Pour toute question relative a l&apos;accessibilite de ce site :
            </p>
            <ul className="text-stone-600 space-y-1">
              <li>Telephone : 09 52 86 14 47</li>
              <li>Adresse : 10 Boulevard Delessert, 75016 Paris</li>
              <li>Delai de reponse : 5 jours ouvrables</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
