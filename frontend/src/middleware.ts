import { NextRequest, NextResponse } from "next/server"

let locales = ["nl", "en", "de"]
let defaultLocale = "nl"

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("Accept-Language")
  const preferredLocale = acceptLanguage?.split(",").map((l) => l.split(";")[0])
  return preferredLocale?.find((locale) => locales.includes(locale)) || defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const lang = getLocale(request)

  if (request.nextUrl.pathname.includes(".")) {
    const ignorePathNames = ["/robots.txt", "/sitemap.xml"]

    if (request.nextUrl.locale !== defaultLocale && !ignorePathNames.includes(request.nextUrl.pathname)) {
      const url = request.nextUrl.clone()
      url.locale = defaultLocale
      return NextResponse.redirect(url)
    }
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
}
