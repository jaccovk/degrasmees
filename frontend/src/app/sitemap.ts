import { MetadataRoute } from "next"
import { fetchAPI } from "@/lib/core/fetch-api"
import { generateLocalizedUrl, getSupportedLocales, ContentModel } from "@/lib/core/route-resolver"

// -=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=
// 0. CONFIGURATION
// -=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=
const DYNAMIC_COLLECTIONS: { model: ContentModel; path: string }[] = [
  { model: "pages", path: "/pages" },
  { model: "life-chapters", path: "/life-chapters" },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || "https://celinevandekuilen.nl"
  const locales = getSupportedLocales()

  let allRoutes: MetadataRoute.Sitemap = []

  // -=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=
  // 1. SINGLE TYPES (like /home) AND STATIC ROUTES
  // -=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=
  for (const locale of locales) {
    try {
      const homeResponse = await fetchAPI({
        path: "/home",
        urlParamsObject: { fields: ["updatedAt"], locale: locale },
      })
      const homeData = homeResponse?.data || homeResponse
      allRoutes.push({
        url: `${baseUrl}${generateLocalizedUrl("home", locale)}`,
        lastModified: homeData?.updatedAt ? new Date(homeData.updatedAt) : new Date(),
      })

      allRoutes.push({
        url: `${baseUrl}${generateLocalizedUrl("life-chapters", locale)}`,
        lastModified: new Date(),
      })
    } catch (error) {
      console.error(`Error fetching Single Types for locale ${locale}:`, error)
      allRoutes.push({ url: `${baseUrl}${generateLocalizedUrl("home", locale)}`, lastModified: new Date() })
    }
  }

  // -=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=
  // 2. DYNAMIC COLLECTIONS
  // -=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=
  const fetchPromises = locales.flatMap((locale) =>
    DYNAMIC_COLLECTIONS.map(async ({ model, path }) => {
      try {
        const response = await fetchAPI({
          path: path,
          urlParamsObject: { fields: ["slug", "updatedAt"], locale: locale },
        })

        const data = response?.data || response

        if (data && Array.isArray(data)) {
          return data.map((item: any) => ({
            url: `${baseUrl}${generateLocalizedUrl(model, locale, item.slug)}`,
            lastModified: new Date(item.updatedAt || new Date()),
          }))
        }
      } catch (error) {
        console.error(`Sitemap generation failed for ${model} in ${locale}:`, error)
      }
      return []
    })
  )

  const dynamicResults = await Promise.all(fetchPromises)
  allRoutes = [...allRoutes, ...dynamicResults.flat()]

  return allRoutes
}
