import { sectionRenderer } from "@/lib/core/section-renderer"
import App from "@/components/App"
import { getLocale } from "next-intl/server"
import { fetchPage } from "@/lib/models/page/fetch-page"
import { INextPageProps } from "@/Interfaces/strapi-types/next.interface"

export default async function Custom404({ props }: { props: INextPageProps | undefined }) {
  const locale = await getLocale()

  const pageData = await fetchPage({ slug: "404", locale })

  if (!pageData || !Object.keys(pageData).length) {
    return (
      <div style={{ textAlign: "center", padding: "100px 20px", fontFamily: "sans-serif" }}>
        <h1>404 - Pagina niet gevonden</h1>
        <p>Probeer later nog eens of neem contact op met DeGrasMees.</p>
      </div>
    )
  }

  const { sections } = pageData

  return (
    <App locale={locale} pageData={pageData}>
      <div className="sections" id="error-page">
        {sections && Array.isArray(sections) ? (
          sections.map((section: any, index: number) => sectionRenderer(section, locale, index, props))
        ) : (
          <p>Oeps, er is iets misgegaan.</p>
        )}
      </div>
    </App>
  )
}
