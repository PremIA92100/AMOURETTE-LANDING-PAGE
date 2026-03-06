import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if pathname starts with a known locale (except default FR)
  const pathnameHasLocale = locales
    .filter((locale) => locale !== defaultLocale)
    .some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

  if (pathnameHasLocale) return NextResponse.next()

  // No automatic redirect based on browser language (SEO critical)
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|_vercel|favicon.ico|images|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
}
