# Configuration Next.js - Migration Amourette Passy

> Documentation technique pour migrer le repo React/Vite vers Next.js (App Router).
> Référence : BRIEF-DEV.md + URL-MAP-MIGRATION.md dans ~/workspace/projects/seo-amourette/
> Créé le 6 mars 2026

---

## Stack cible

- **Framework** : Next.js 15+ (App Router)
- **Styling** : Tailwind CSS 4
- **Animations** : Framer Motion (composants existants à adapter)
- **Hosting** : Vercel
- **i18n** : App Router natif avec `[locale]` dans le chemin

---

## 1. Structure des dossiers (App Router + i18n)

```
AMOURETTE-LANDING-PAGE/
├── app/
│   ├── [locale]/                    ← toutes les langues sauf FR
│   │   ├── layout.tsx               ← layout partagé avec hreflang
│   │   ├── page.tsx                 ← homepage /{locale}/
│   │   ├── menus/                   ← /en/menus/, /nl/menus/, etc.
│   │   │   └── page.tsx
│   │   ├── photos/                  ← /en/photos/, etc.
│   │   │   └── page.tsx
│   │   ├── events/                  ← /en/events/, etc.
│   │   │   └── page.tsx
│   │   ├── book-a-table/            ← EN slug (autres langues = slugs localisés)
│   │   │   └── page.tsx
│   │   ├── o/
│   │   │   └── privatisations/
│   │   │       └── page.tsx
│   │   ├── legal-notices/           ← EN slug
│   │   │   └── page.tsx
│   │   ├── address-contact/         ← EN slug
│   │   │   └── page.tsx
│   │   ├── privacy-policy/          ← EN slug
│   │   │   └── page.tsx
│   │   ├── cookie-policy/           ← EN slug
│   │   │   └── page.tsx
│   │   └── accessibility/           ← EN slug
│   │       └── page.tsx
│   ├── layout.tsx                   ← root layout (FR par défaut)
│   ├── page.tsx                     ← homepage FR : /
│   ├── menus-carte/                 ← FR slug
│   │   └── page.tsx
│   ├── photos/
│   │   └── page.tsx
│   ├── evenements/
│   │   └── page.tsx
│   ├── reserver-une-table/
│   │   └── page.tsx
│   ├── o/
│   │   └── privatisations/
│   │       └── page.tsx
│   ├── mentions-legales/
│   │   └── page.tsx
│   ├── informations-contact/
│   │   └── page.tsx
│   ├── politique-de-confidentialite/
│   │   └── page.tsx
│   ├── politique-cookies/
│   │   └── page.tsx
│   ├── accessibilite/
│   │   └── page.tsx
│   ├── sitemap.ts                   ← sitemap dynamique
│   └── robots.ts                   ← robots.txt dynamique
├── middleware.ts                    ← i18n routing
├── lib/
│   ├── i18n.ts                      ← config langues + slugs
│   ├── hreflang.ts                  ← génération balises hreflang
│   └── schema.ts                    ← Schema.org JSON-LD
├── messages/                        ← fichiers de traduction
│   ├── fr.json
│   ├── en.json
│   ├── de.json
│   ├── es.json
│   ├── it.json
│   ├── pt.json
│   ├── nl.json
│   ├── zh.json
│   ├── ja.json
│   ├── ru.json
│   ├── el.json
│   └── cs.json
├── public/
│   ├── images/                      ← 21 photos crawl/images/ + 7 WebP existants
│   └── favicon.ico
└── components/                      ← composants React existants adaptés
    ├── layout/
    ├── sections/
    └── ui/
```

> **Important** : les slugs localisés pour DE, ES, IT, etc. ne suivent pas le pattern `/[locale]/[slug-en]/`.
> Chaque langue a son propre slug. Voir section 2 ci-dessous.

---

## 2. Les 12 langues et leurs slugs par section

### Config de base

```typescript
// lib/i18n.ts

export const locales = ['fr', 'en', 'de', 'es', 'it', 'pt', 'nl', 'zh', 'ja', 'ru', 'el', 'cs'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'fr'
```

### Mapping complet des slugs localisés

```typescript
// lib/i18n.ts (suite)

export const slugMap = {
  home: {
    fr: '/',
    en: '/en/',
    de: '/de/',
    es: '/es/',
    it: '/it/',
    pt: '/pt/',
    nl: '/nl/',
    zh: '/zh/',
    ja: '/ja/',
    ru: '/ru/',
    el: '/el/',
    cs: '/cs/',
  },
  menus: {
    fr: '/menus-carte/',
    en: '/en/menus/',
    de: '/de/menus-karte/',
    es: '/es/menus/',
    it: '/it/menu/',
    pt: '/pt/menus/',
    nl: '/nl/menus/',
    zh: '/zh/menus/',
    ja: '/ja/menus/',
    ru: '/ru/menus/',
    el: '/el/menus/',
    cs: '/cs/menu/',
  },
  photos: {
    fr: '/photos/',
    en: '/en/photos/',
    de: '/de/fotos/',
    es: '/es/fotografias/',
    it: '/it/foto/',
    pt: '/pt/fotos/',
    nl: '/nl/fotos/',
    zh: '/zh/photos/',
    ja: '/ja/photos/',
    ru: '/ru/photos/',
    el: '/el/photos/',
    cs: '/cs/fotografie/',
  },
  events: {
    fr: '/evenements/',
    en: '/en/events/',
    de: '/de/veranstaltungen/',
    es: '/es/eventos/',
    it: '/it/eventi/',
    pt: '/pt/eventos/',
    nl: '/nl/evenementen/',
    zh: '/zh/events/',
    ja: '/ja/events/',
    ru: '/ru/events/',
    el: '/el/events/',
    cs: '/cs/události/',
  },
  reservation: {
    fr: '/reserver-une-table/',
    en: '/en/book-a-table/',
    de: '/de/einen-tisch-reservieren/',
    es: '/es/reservar-una-mesa/',
    it: '/it/prenotare-un-tavolo/',
    pt: '/pt/reserve-uma-mesa/',
    nl: '/nl/boek-een-tafel/',
    zh: '/zh/yuding-yi-zhang-zhuozi/',
    ja: '/ja/teburu-o-yoyaku-suru/',
    ru: '/ru/zakazat-stolik/',
    el: '/el/kleiste-ena-trapezi/',
    cs: '/cs/rezervovat-tabulku/',
  },
  privatisations: {
    fr: '/o/privatisations/',
    en: '/en/o/privatisations/',
    de: '/de/o/privatisations/',
    es: '/es/o/privatisations/',
    it: '/it/o/privatisations/',
    pt: '/pt/o/privatisations/',
    nl: '/nl/o/privatisations/',
    zh: '/zh/o/privatisations/',
    ja: '/ja/o/privatisations/',
    ru: '/ru/o/privatisations/',
    el: '/el/o/privatisations/',
    cs: '/cs/o/privatisations/',
  },
  legal: {
    fr: '/mentions-legales/',
    en: '/en/legal-notices/',
    de: '/de/impressum/',
    es: '/es/notas-legales/',
    it: '/it/note-legali/',
    pt: '/pt/avisos-legais/',
    nl: '/nl/wettelijke-bepalingen/',
    zh: '/zh/falu-xinxi/',
    ja: '/ja/hoteki-joho/',
    ru: '/ru/yuridicheskaya-informatsiya/',
    el: '/el/nomikes-plirofories/',
    cs: '/cs/pravni-oznameni/',
  },
  contact: {
    fr: '/informations-contact/',
    en: '/en/address-contact/',
    de: '/de/kontaktinformationen/',
    es: '/es/direccion-de-contacto/',
    it: '/it/informazioni-contatti/',
    pt: '/pt/endereco-contacto/',
    nl: '/nl/adres-contact/',
    zh: '/zh/address-contact/',
    ja: '/ja/address-contact/',
    ru: '/ru/address-contact/',
    el: '/el/address-contact/',
    cs: '/cs/adresa-kontakt/',
  },
  privacy: {
    fr: '/politique-de-confidentialite/',
    en: '/en/privacy-policy/',
    de: '/de/datenschutzrichtlinie/',
    es: '/es/politica-de-privacidad/',
    it: '/it/informativa-sulla-privacy/',
    pt: '/pt/politica-de-privacidade/',
    nl: '/nl/privacybeleid/',
    zh: '/zh/yinsi-zhengce/',
    ja: '/ja/puraibashi-porishi/',
    ru: '/ru/politika-konfidentsialnosti/',
    el: '/el/politiki-aporritou/',
    cs: '/cs/zasady-ochrony-soukromi/',
  },
  cookies: {
    fr: '/politique-cookies/',
    en: '/en/cookie-policy/',
    de: '/de/cookie-richtlinie/',
    es: '/es/politica-cookies/',
    it: '/it/politica-dei-cookie/',
    pt: '/pt/politica-cookies/',
    nl: '/nl/cookie-beleid/',
    zh: '/zh/cookie-policy/',
    ja: '/ja/cookie-policy/',
    ru: '/ru/cookie-policy/',
    el: '/el/cookie-policy/',
    cs: '/cs/cookie-policy/',
  },
  accessibility: {
    fr: '/accessibilite/',
    en: '/en/accessibility/',
    de: '/de/barrierefreiheit/',
    es: '/es/accesibilidad/',
    it: '/it/accessibilita/',
    pt: '/pt/acessibilidade/',
    nl: '/nl/toegankelijkheid/',
    zh: '/zh/wuzhangai/',
    ja: '/ja/akuseshibiriti/',
    ru: '/ru/dostupnost/',
    el: '/el/prosvasimotita/',
    cs: '/cs/pristupnost/',
  },
} satisfies Record<string, Record<Locale, string>>
```

---

## 3. Middleware i18n

Le middleware gère la détection de langue et le routing. Puisque les slugs sont localisés (pas un simple préfixe `/[locale]/`), on ne peut pas utiliser la détection automatique standard. Le routing est basé sur les préfixes de locale.

```typescript
// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Vérifier si le pathname commence par un locale connu (sauf FR = défaut)
  const pathnameHasLocale = locales
    .filter(locale => locale !== defaultLocale)
    .some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  // Détecter la langue préférée du navigateur
  const acceptLanguage = request.headers.get('accept-language') || ''
  const preferredLocale = detectLocale(acceptLanguage)

  // Si langue préférée != FR, rediriger (optionnel — voir note ci-dessous)
  // Pour SEO, on NE redirige PAS automatiquement : chaque URL doit être accessible directement
  // Le switcher de langue dans le nav suffit

  return NextResponse.next()
}

function detectLocale(acceptLanguage: string): string {
  // Parse les langues acceptées par ordre de préférence
  const preferred = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase().substring(0, 2))
    .find(lang => locales.includes(lang as any))

  return preferred || defaultLocale
}

export const config = {
  matcher: [
    '/((?!_next|_vercel|favicon.ico|images|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
}
```

> **Note SEO importante** : Ne pas faire de redirection automatique basée sur la langue du navigateur. Ça casse l'indexation multilingue. Chaque URL doit être accessible directement. Le switcher dans le nav permet à l'utilisateur de choisir sa langue.

---

## 4. Sitemap dynamique (sitemap.ts)

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { slugMap, locales } from '@/lib/i18n'

const baseUrl = 'https://www.amourette-passy.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Générer les 132 URLs pour les 11 sections × 12 langues
  for (const [section, slugsByLocale] of Object.entries(slugMap)) {
    for (const [locale, slug] of Object.entries(slugsByLocale)) {
      entries.push({
        url: `${baseUrl}${slug}`,
        lastModified: new Date(),
        changeFrequency: section === 'home' ? 'weekly' : 'monthly',
        priority: section === 'home' ? 1.0 : section === 'menus' ? 0.9 : 0.7,
      })
    }
  }

  return entries
}
```

---

## 5. Balises hreflang

### Fonction utilitaire

```typescript
// lib/hreflang.ts
import { slugMap, locales, defaultLocale } from './i18n'

const baseUrl = 'https://www.amourette-passy.fr'

type Section = keyof typeof slugMap

export function getHreflangLinks(section: Section) {
  const slugsByLocale = slugMap[section]

  return [
    // Les 12 langues
    ...locales.map(locale => ({
      rel: 'alternate',
      hreflang: locale,
      href: `${baseUrl}${slugsByLocale[locale]}`,
    })),
    // x-default pointe vers FR
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${baseUrl}${slugsByLocale[defaultLocale]}`,
    },
  ]
}
```

### Usage dans un layout / page

```typescript
// app/[locale]/menus/page.tsx
import type { Metadata } from 'next'
import { getHreflangLinks } from '@/lib/hreflang'

export const metadata: Metadata = {
  alternates: {
    languages: Object.fromEntries(
      getHreflangLinks('menus').map(link => [link.hreflang, link.href])
    ),
  },
}
```

### Exemple de sortie HTML générée par Next.js
```html
<link rel="alternate" hreflang="fr" href="https://www.amourette-passy.fr/menus-carte/" />
<link rel="alternate" hreflang="en" href="https://www.amourette-passy.fr/en/menus/" />
<link rel="alternate" hreflang="de" href="https://www.amourette-passy.fr/de/menus-karte/" />
...
<link rel="alternate" hreflang="x-default" href="https://www.amourette-passy.fr/menus-carte/" />
```

---

## 6. Schema.org (JSON-LD)

### Schema Restaurant de base (toutes les pages)

```typescript
// lib/schema.ts

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'LocalBusiness'],
  name: 'Amourette',
  description: 'Restaurant français traditionnel à Passy, Paris 16e. À 5 minutes de la Tour Eiffel. Terrasse, musique live, privatisation.',
  url: 'https://www.amourette-passy.fr',
  telephone: '+33952861447',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10 Boulevard Delessert',
    addressLocality: 'Paris',
    postalCode: '75016',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8583,
    longitude: 2.2944,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '11:30',
      closes: '02:00',
    },
  ],
  servesCuisine: ['French', 'Traditional', 'Homemade'],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Terrasse', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Musique live', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Privatisation', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Climatisation', value: true },
  ],
  hasMap: 'https://maps.google.com/?q=10+Boulevard+Delessert,+75016+Paris',
  image: [
    'https://www.amourette-passy.fr/images/restaurant-1.jpg',
    'https://www.amourette-passy.fr/images/restaurant-2.jpg',
  ],
  sameAs: [
    'https://www.instagram.com/amourettepassy/',
    'https://www.polo-auteuil.fr/',
  ],
}

// Schema pour la homepage uniquement
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Amourette Passy',
  url: 'https://www.amourette-passy.fr',
}
```

### Usage dans le layout racine

```typescript
// app/layout.tsx
import { restaurantSchema, websiteSchema } from '@/lib/schema'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Schema Menu (page Carte)

```typescript
// Ajout sur app/menus-carte/page.tsx
const menuSchema = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Carte Amourette',
  url: 'https://www.amourette-passy.fr/menus-carte/',
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: 'Entrées',
      hasMenuItem: [
        // À remplir avec les plats depuis crawl/SITE-COMPLET.md
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Plats',
      hasMenuItem: [],
    },
    {
      '@type': 'MenuSection',
      name: 'Desserts',
      hasMenuItem: [],
    },
  ],
}
```

---

## 7. Robots.ts

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'ThinkBot',
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.amourette-passy.fr/sitemap.xml',
  }
}
```

---

## 8. Gestion des slugs localisés pour [locale]

Puisque les slugs varient par langue (ex: DE = `/de/fotos/` pas `/de/photos/`), il faut gérer le routing de deux façons :

### Option A — Routes statiques par langue (recommandée)
Créer un dossier par slug localisé dans `app/[locale]/`. Exemple pour les photos :
- `app/[locale]/photos/page.tsx` → pour EN, ZH, JA, RU, EL
- `app/de/fotos/page.tsx` → pour DE (slug spécifique)
- `app/es/fotografias/page.tsx` → pour ES
- etc.

Avantage : simple, Next.js gère tout nativement.
Inconvénient : duplication de fichiers (mais les fichiers sont légers, juste des imports).

### Option B — Middleware de rewrite
Utiliser le middleware pour réécrire les URLs localisées vers un chemin générique :
```typescript
// middleware.ts (rewrite)
if (pathname === '/de/fotos/') {
  return NextResponse.rewrite(new URL('/[locale]/photos?locale=de', request.url))
}
```

Avantage : un seul composant page par section.
Inconvénient : plus complexe, risque d'erreurs.

**Recommandation : Option A** pour la migration initiale. Moins de risques, plus maintenable.

---

## 9. next.config.ts

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Trailing slashes pour correspondre aux URLs Zenchef
  trailingSlash: true,

  // Optimisation images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // Headers de sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig
```

---

## 10. Checklist migration technique

### Structure Next.js
- [ ] Initialiser Next.js 15 (App Router) dans le repo
- [ ] Configurer Tailwind CSS 4
- [ ] Configurer `trailingSlash: true` dans next.config.ts
- [ ] Créer `lib/i18n.ts` avec le mapping complet des 132 slugs
- [ ] Créer `middleware.ts` (sans redirection automatique)

### Pages (132 URLs)
- [ ] Routes FR racine (11 pages sans préfixe)
- [ ] Routes `[locale]` pour EN (slugs anglais)
- [ ] Routes spécifiques DE (slugs allemands)
- [ ] Routes spécifiques ES (slugs espagnols)
- [ ] Routes spécifiques IT (slugs italiens)
- [ ] Routes PT, NL, ZH, JA, RU, EL, CS
- [ ] Vérifier que chaque URL répond en 200 avec trailing slash

### SEO technique
- [ ] `app/sitemap.ts` dynamique (132 URLs)
- [ ] `app/robots.ts`
- [ ] Hreflang sur toutes les pages (via metadata alternates)
- [ ] Schema.org Restaurant + LocalBusiness (layout racine)
- [ ] Schema.org Menu (page carte)
- [ ] Meta title unique par page
- [ ] Meta description unique par page
- [ ] Canonical URL par page

### Performance
- [ ] Images en WebP / AVIF via `<Image />` Next.js
- [ ] Fonts optimisées (next/font)
- [ ] PageSpeed > 80 mobile
- [ ] Lazy loading composants

### Déploiement
- [ ] Configuration Vercel (vercel.json si nécessaire)
- [ ] Variables d'environnement (si nécessaire)
- [ ] noindex sur staging, retiré en production
- [ ] SSL automatique Vercel

---

## 11. Migration depuis React/Vite — composants à porter

Le repo actuel contient ces composants à adapter :

```
src/
├── App.jsx              → app/layout.tsx + app/page.tsx
├── sections/            → composants de section (Hero, Menu, Gallery, etc.)
│   └── *.jsx           → *.tsx (conversion TypeScript)
├── components/          → composants UI réutilisables
│   └── *.jsx           → *.tsx
├── data/               → à intégrer dans les fichiers de contenu ou messages/
└── index.css           → app/globals.css (Tailwind 4)
```

Animations Framer Motion : compatibles avec Next.js, ajouter `'use client'` aux composants animés.

---

*Créé le 6 mars 2026 — référence BRIEF-DEV.md + URL-MAP-MIGRATION.md*
