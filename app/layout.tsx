import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { restaurantSchema, websiteSchema } from '@/lib/schema'
import { getAlternatesForMetadata } from '@/lib/hreflang'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Amourette | Terrasse Paris Passy - Restaurant 16eme',
  description:
    'Restaurant Amourette a Passy, Paris 16e. Cuisine francaise traditionnelle, terrasse, musique live. A 5 min de la Tour Eiffel. Ouvert 7j/7.',
  metadataBase: new URL('https://www.amourette-passy.fr'),
  alternates: getAlternatesForMetadata('home'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Amourette Passy',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="bg-paper text-stone-900 min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
