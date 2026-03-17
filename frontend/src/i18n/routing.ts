import { defineRouting } from "next-intl/routing"
import { RouteModels, getSupportedLocales } from "@/lib/core/route-resolver"

const isDev = process.env.NODE_ENV === "development"
const locales = getSupportedLocales()

const generatedPathnames = Object.entries(RouteModels).reduce(
  (acc, [model, translations]) => {
    if (model === "home") {
      acc["/"] = "/"
      return acc
    }

    if (model === "pages") {
      acc["/[slug]"] = "/[slug]"
      return acc
    }

    const basePath = `/${model}` // e.g. "/life-chapters"
    const dynamicPath = `/${model}/[slug]` // e.g. "/life-chapters/[slug]"

    // e.g. { nl: "/hoofdstukken", en: "/chapters" }
    acc[basePath] = translations

    // generate automatically the [slug] variants
    acc[dynamicPath] = Object.fromEntries(Object.entries(translations).map(([lang, path]) => [lang, `${path}/[slug]`]))

    return acc
  },
  {} as Record<string, any>
)

export const routing = defineRouting({
  locales: locales,
  defaultLocale: "nl",
  domains: [
    {
      domain: isDev ? "localhost:3000" : "degrasmees.nl",
      defaultLocale: "nl",
      locales: ["nl"],
    },
    {
      domain: isDev ? "localhost:3001" : "degrasmees.com",
      defaultLocale: "en",
      locales: ["en"],
    },
  ],
  localePrefix: "never", // no /nl/ or /en/ in the URL!
  pathnames: generatedPathnames,
})
