"use server"
import { sectionRenderer } from "@/utils/section-renderer"
import React from "react"
import Script from "next/script"
import getData from "@/utils/core/getData"
import App from "@/components/global/App"

interface HomeProps {
  params: {
    lang: string
  }
}

export default async function Home({ params }: HomeProps) {
  const { globalData, themeData, pageData } = await getData({
    slug: "home",
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
    <App params={{ ...params, globalData, themeData, pageData }}>
      <div className="sections">
        {meta && (
          <Script id="meta-schema" type="application/ld+json">
            {JSON.stringify(metaText)}
          </Script>
        )}
        {sections?.map((section: any, index: number) =>
          sectionRenderer(section, params.lang, index)
        )}
      </div>
    </App>
  )
}
