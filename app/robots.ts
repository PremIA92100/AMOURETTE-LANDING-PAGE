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
