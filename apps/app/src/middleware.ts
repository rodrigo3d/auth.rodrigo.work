// export { auth as middleware } from '@/lib/auth'

// // Optionally, don't invoke Middleware on some paths
// export const config = {
//   matcher: ['/((?!api2|_next/static|_next/image|favicon.ico).*)'],
// }

import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'

import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  COOKIE_NAME,
} from '@locales/constants/i18n'
import { COOKIE_IDP_NAME } from 'src/constants/auth'

acceptLanguage.languages(LANGUAGES)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
}

export function middleware(req: NextRequest) {
  let lang

  if (req.cookies.has(COOKIE_NAME))
    lang = acceptLanguage.get(req.cookies.get(COOKIE_NAME)?.value)
  if (!lang) lang = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lang) lang = DEFAULT_LANGUAGE

  if (
    !LANGUAGES.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lang}${req.nextUrl.pathname}`, req.url)
    )
  }

  if (req.url) {
    const refererUrl = new URL(req.url ?? '')
    const langInReferer = LANGUAGES.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    )

    if (
      !req.cookies.has(COOKIE_IDP_NAME) &&
      !req.nextUrl.pathname.includes(`/auth`)
    ) {
      const response = NextResponse.redirect(
        new URL(`/${langInReferer ?? lang}/auth/login`, req.url)
      )

      if (langInReferer) response.cookies.set(COOKIE_NAME, langInReferer)

      return response
    }

    if (
      req.cookies.has(COOKIE_IDP_NAME) &&
      !req.nextUrl.pathname.includes(`/app`)
    ) {
      const response = NextResponse.redirect(
        new URL(`/${langInReferer ?? lang}/app`, req.url)
      )

      if (langInReferer) response.cookies.set(COOKIE_NAME, langInReferer)

      return response
    }

    const response = NextResponse.next()

    if (langInReferer) response.cookies.set(COOKIE_NAME, langInReferer)
    if (req.cookies.has(COOKIE_IDP_NAME))
      response.cookies.set(
        COOKIE_IDP_NAME,
        req.cookies.get(COOKIE_IDP_NAME)?.value ?? ''
      )

    return response
  }

  if (
    !req.cookies.has(COOKIE_IDP_NAME) &&
    !req.nextUrl.pathname.includes(`/auth`)
  ) {
    return NextResponse.redirect(new URL(`/${lang}/auth/login`, req.url))
  }

  if (
    req.cookies.has(COOKIE_IDP_NAME) &&
    !req.nextUrl.pathname.includes(`/app`)
  ) {
    return NextResponse.redirect(new URL(`/${lang}/app`, req.url))
  }

  return NextResponse.next()
}
