import { sectionRenderer } from "@/lib/core/section-renderer"
import React from "react"
import App from "@/components/App"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { fetchPage } from "@/lib/models/page/fetch-page"
import { INextPageProps } from "@/Interfaces/strapi-types/next.interface"

export async function generateMetadata({ params }: INextPageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const pageData = await fetchPage({ slug, locale })

  if (!pageData) return {}

  return {
    title: pageData.meta?.metaTitle || "",
    description: pageData.meta?.metaDescription || "",
  }
}

export default async function Page(props: INextPageProps) {
  const { slug, locale } = await props.params

  const pageData = await fetchPage({ slug, locale })

  if (!pageData || !Object.keys(pageData).length) {
    notFound()
  }

  const { sections } = pageData

  return (
    <App locale={locale} pageData={pageData}>
      <div className="sections" id="page-content">
        {sections && Array.isArray(sections) ? (
          sections.map((section: any, index: number) => sectionRenderer(section, locale, index, props))
        ) : (
          <p>Geen secties gevonden voor deze pagina.</p>
        )}
      </div>
    </App>
  )
}
