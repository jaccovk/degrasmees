"use server"
import "@/styles/index.scss"
import { i18n } from "../../../i18n-config"
import React from "react"
import { Toaster } from "react-hot-toast"
// import { Inter } from "next/dist/compiled/@next/font/dist/google"

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{
    slug: string
    lang: string
  }>
}

export default async function RootLayout(props: RootLayoutProps) {
  const params = await props.params
  // const inter = Inter({ subsets: ["latin"] })

  const { children } = props

  return (
    <html lang={params.lang}>
      {/*<body className={inter.className}>*/}
      <body>
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        {children}
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}
