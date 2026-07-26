"use server"
import { fetchAPI } from "@/lib/core/fetch-api"
import { GlobalProps } from "@/Interfaces/strapi-types/global.interface"

export async function fetchGlobal({ locale }: { locale: string }) {
  const modelName = "global"
  const path = `/${modelName}`

  const urlParamsObject = {
    locale: locale,
    populate: [
      "personaldata",
      "personaldata.favicon",
      "personaldata.phone",
      "navigation",
      "navigation.links",
      "navigation.socialLinks",
      "navigation.logo",
      "navigation.logoFooter",
    ],
  }

  const options = {
    next: { tags: [modelName] },
  }

  try {
    const { data } = await fetchAPI({ path, urlParamsObject, options })
    if (!data) return {} as GlobalProps
    return data as GlobalProps
  } catch (error) {
    console.error(`\n\nERROR: No data found for global: ${error}`)
    return {} as GlobalProps
  }
}
