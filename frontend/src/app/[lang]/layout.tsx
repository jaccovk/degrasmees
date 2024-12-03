"use server"
import "@/styles/index.scss"
import { i18n } from "../../../i18n-config"
import React from "react"
import { CustomToaster } from "@/components/Toaster/CustomToaster"

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{
    slug: string
    lang: string
  }>
}

export default async function RootLayout(props: RootLayoutProps) {
  const params = await props.params

  const { children } = props

  return (
    <html lang={params.lang}>
      <body>
        <CustomToaster />
        {children}
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}
