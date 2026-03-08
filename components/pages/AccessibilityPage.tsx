import PageLayout from '@/components/layout/PageLayout'
import type { Locale } from '@/lib/i18n'

export default function AccessibilityPageContent({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <PageLayout locale={locale}>
      <section className="pt-32 pb-24 bg-paper min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-stone">
            <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-12">
              {locale === 'fr' ? 'Accessibilité' : 'Accessibility'}
            </h1>

            <p className="text-stone-500 text-sm italic mb-8">
              {locale === 'fr' ? 'Dernière mise à jour : Janvier 2026' : 'Last updated: January 2026'}
            </p>

            <p className="text-stone-600 leading-relaxed">
              Ce site vise la conformité WCAG 2.1 Niveau AA et respecte la Loi
              européenne sur l&apos;accessibilité (EAA, 28 juin 2025).
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">
              {locale === 'fr' ? 'Fonctionnalités' : 'Features'}
            </h2>
            <ul className="text-stone-600 space-y-2">
              <li>Navigation au clavier complète</li>
              <li>Lien d&apos;évitement vers le contenu principal</li>
              <li>Attributs ARIA pour les composants interactifs</li>
              <li>Focus visible sur tous les éléments interactifs</li>
              <li>Formulaires avec labels accessibles</li>
              <li>Textes alternatifs sur toutes les images</li>
              <li>Structure de titres hiérarchique</li>
              <li>Support du mode reduced motion</li>
            </ul>

            <h2 className="text-2xl font-serif text-stone-900 mt-8">Contact</h2>
            <p className="text-stone-600 leading-relaxed">
              Pour toute question relative à l&apos;accessibilité de ce site :
            </p>
            <ul className="text-stone-600 space-y-1">
              <li>Téléphone : 09 52 86 14 47</li>
              <li>Adresse : 10 Boulevard Delessert, 75016 Paris</li>
              <li>Délai de réponse : 5 jours ouvrables</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
