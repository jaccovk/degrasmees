"use server"
import { sectionRenderer } from "@/utils/core/section-renderer"
import React from "react"
import { NextSeo } from "next-seo"
import App from "@/components/global/App"
import getData from "@/utils/models/get-data"
import Script from "next/script"

interface Props {
  params: Promise<{
    slug: string
    lang: string
  }>
}

export default async function Page(props: Props) {
  const params = await props.params
  const { globalData, themeData, pageData } = await getData({
    slug: params.slug,
    lang: params.lang,
  })

  const { meta, sections } = pageData

  const metaText = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta?.metaTitle || "",
    description: meta?.metaDescription || "",
  }

  return (
    <App params={{ lang: params.lang, globalData, themeData, pageData }}>
      <div className="sections">
        {meta && (
          <Script id="meta-schema" type="application/ld+json">
            {JSON.stringify(metaText)}
          </Script>
        )}
        <NextSeo title={metaText.name} description={metaText.description} />
        {sections?.map((section: any, index: number) =>
          sectionRenderer(section, params.lang, index)
        )}
      </div>
    </App>
  )
}
