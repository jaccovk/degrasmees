import { sectionRenderer } from "@/lib/core/section-renderer"
import React from "react"
import App from "@/components/App"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { fetchPage } from "@/lib/models/page/fetch-page"
import { INextPageProps } from "@/Interfaces/strapi-types/next.interface"

export async function generateMetadata({ params }: INextPageProps): Promise<Metadata> {
  const { locale } = await params
  const pageData = await fetchPage({ slug: "home", locale })

  if (!pageData || !Object.keys(pageData).length) {
    notFound()
  }

  const { meta } = pageData

  return {
    // "@context": "https://schema.org", TODO !!!
    // "@type": "WebPage",
    title: meta?.metaTitle || "",
    description: meta?.metaDescription || "",
  }
}

export default async function Home(props: INextPageProps) {
  const { locale } = await props.params
  const pageData = await fetchPage({ slug: "home", locale })

  if (!pageData || !Object.keys(pageData).length) {
    notFound()
  }

  const { sections } = pageData

  return (
    <App locale={locale} pageData={pageData}>
      <div className="sections" id="home">
        {sections?.map((section: any, index: number) => sectionRenderer(section, locale, index, props))}
      </div>
    </App>
  )
}
