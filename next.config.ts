import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

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

  async rewrites() {
    return [
      // DE localized slugs
      { source: '/de/menus-karte/', destination: '/de/menus/' },
      { source: '/de/fotos/', destination: '/de/photos/' },
      { source: '/de/veranstaltungen/', destination: '/de/events/' },
      { source: '/de/einen-tisch-reservieren/', destination: '/de/book-a-table/' },
      { source: '/de/impressum/', destination: '/de/legal-notices/' },
      { source: '/de/kontaktinformationen/', destination: '/de/address-contact/' },
      { source: '/de/datenschutzrichtlinie/', destination: '/de/privacy-policy/' },
      { source: '/de/cookie-richtlinie/', destination: '/de/cookie-policy/' },
      { source: '/de/barrierefreiheit/', destination: '/de/accessibility/' },
      // ES localized slugs
      { source: '/es/fotografias/', destination: '/es/photos/' },
      { source: '/es/eventos/', destination: '/es/events/' },
      { source: '/es/reservar-una-mesa/', destination: '/es/book-a-table/' },
      { source: '/es/notas-legales/', destination: '/es/legal-notices/' },
      { source: '/es/direccion-de-contacto/', destination: '/es/address-contact/' },
      { source: '/es/politica-de-privacidad/', destination: '/es/privacy-policy/' },
      { source: '/es/politica-cookies/', destination: '/es/cookie-policy/' },
      { source: '/es/accesibilidad/', destination: '/es/accessibility/' },
      // IT localized slugs
      { source: '/it/menu/', destination: '/it/menus/' },
      { source: '/it/foto/', destination: '/it/photos/' },
      { source: '/it/eventi/', destination: '/it/events/' },
      { source: '/it/prenotare-un-tavolo/', destination: '/it/book-a-table/' },
      { source: '/it/note-legali/', destination: '/it/legal-notices/' },
      { source: '/it/informazioni-contatti/', destination: '/it/address-contact/' },
      { source: '/it/informativa-sulla-privacy/', destination: '/it/privacy-policy/' },
      { source: '/it/politica-dei-cookie/', destination: '/it/cookie-policy/' },
      { source: '/it/accessibilita/', destination: '/it/accessibility/' },
      // PT localized slugs
      { source: '/pt/fotos/', destination: '/pt/photos/' },
      { source: '/pt/eventos/', destination: '/pt/events/' },
      { source: '/pt/reserve-uma-mesa/', destination: '/pt/book-a-table/' },
      { source: '/pt/avisos-legais/', destination: '/pt/legal-notices/' },
      { source: '/pt/endereco-contacto/', destination: '/pt/address-contact/' },
      { source: '/pt/politica-de-privacidade/', destination: '/pt/privacy-policy/' },
      { source: '/pt/politica-cookies/', destination: '/pt/cookie-policy/' },
      { source: '/pt/acessibilidade/', destination: '/pt/accessibility/' },
      // NL localized slugs
      { source: '/nl/fotos/', destination: '/nl/photos/' },
      { source: '/nl/evenementen/', destination: '/nl/events/' },
      { source: '/nl/boek-een-tafel/', destination: '/nl/book-a-table/' },
      { source: '/nl/wettelijke-bepalingen/', destination: '/nl/legal-notices/' },
      { source: '/nl/adres-contact/', destination: '/nl/address-contact/' },
      { source: '/nl/privacybeleid/', destination: '/nl/privacy-policy/' },
      { source: '/nl/cookie-beleid/', destination: '/nl/cookie-policy/' },
      { source: '/nl/toegankelijkheid/', destination: '/nl/accessibility/' },
      // ZH localized slugs
      { source: '/zh/yuding-yi-zhang-zhuozi/', destination: '/zh/book-a-table/' },
      { source: '/zh/falu-xinxi/', destination: '/zh/legal-notices/' },
      { source: '/zh/yinsi-zhengce/', destination: '/zh/privacy-policy/' },
      { source: '/zh/wuzhangai/', destination: '/zh/accessibility/' },
      // JA localized slugs
      { source: '/ja/teburu-o-yoyaku-suru/', destination: '/ja/book-a-table/' },
      { source: '/ja/hoteki-joho/', destination: '/ja/legal-notices/' },
      { source: '/ja/puraibashi-porishi/', destination: '/ja/privacy-policy/' },
      { source: '/ja/akuseshibiriti/', destination: '/ja/accessibility/' },
      // RU localized slugs
      { source: '/ru/zakazat-stolik/', destination: '/ru/book-a-table/' },
      { source: '/ru/yuridicheskaya-informatsiya/', destination: '/ru/legal-notices/' },
      { source: '/ru/politika-konfidentsialnosti/', destination: '/ru/privacy-policy/' },
      { source: '/ru/dostupnost/', destination: '/ru/accessibility/' },
      // EL localized slugs
      { source: '/el/kleiste-ena-trapezi/', destination: '/el/book-a-table/' },
      { source: '/el/nomikes-plirofories/', destination: '/el/legal-notices/' },
      { source: '/el/politiki-aporritou/', destination: '/el/privacy-policy/' },
      { source: '/el/prosvasimotita/', destination: '/el/accessibility/' },
      // CS localized slugs
      { source: '/cs/menu/', destination: '/cs/menus/' },
      { source: '/cs/fotografie/', destination: '/cs/photos/' },
      { source: '/cs/ud%C3%A1losti/', destination: '/cs/events/' },
      { source: '/cs/události/', destination: '/cs/events/' },
      { source: '/cs/rezervovat-tabulku/', destination: '/cs/book-a-table/' },
      { source: '/cs/pravni-oznameni/', destination: '/cs/legal-notices/' },
      { source: '/cs/adresa-kontakt/', destination: '/cs/address-contact/' },
      { source: '/cs/zasady-ochrony-soukromi/', destination: '/cs/privacy-policy/' },
      { source: '/cs/pristupnost/', destination: '/cs/accessibility/' },
    ]
  },
}

export default nextConfig
