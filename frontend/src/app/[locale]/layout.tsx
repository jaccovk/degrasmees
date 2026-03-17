import "@/styles/index.scss"
import React from "react"
import { CustomToaster } from "@/components/Toaster/CustomToaster"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/../i18n/routing"
import { setRequestLocale } from "next-intl/server"
import { fetchTheme } from "@/lib/models/theme/fetch-theme"
import { Metadata } from "next"
// import { GoogleAnalytics } from "@next/third-parties/google"
import { Montserrat, Inter } from "next/font/google"
import classNames from "classnames"

interface RootLayoutProps {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "700", "800"] })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  ...(process.env.ENVIRONMENT !== "localhost"
    ? { metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || "") }
    : {}),
}

export default async function RootLayout({ params, children }: RootLayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  const themeData = await fetchTheme()
  const initialTheme = themeData?.darkMode ? "dark" : "light"

  return (
    <html
      lang={locale}
      className={classNames(inter.variable, montserrat.variable, inter.className)}
      data-theme={initialTheme}
    >
      <body>
        <CustomToaster />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        {/*<GoogleAnalytics gaId="G-JOUWCODE" />*/}
      </body>
    </html>
  )
}
