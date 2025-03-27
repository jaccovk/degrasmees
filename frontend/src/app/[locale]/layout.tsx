"use server"

import "@/styles/index.scss"
import React from "react"
import { CustomToaster } from "@/components/Toaster/CustomToaster"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/../i18n/routing"
import { setRequestLocale } from "next-intl/server"

interface RootLayoutProps {
  params: Promise<{
    slug: string
    locale: string
  }>
  children: React.ReactNode
}

export default async function RootLayout({ params, children }: RootLayoutProps) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body>
        <CustomToaster />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

//import {getTranslations} from 'next-intl/server';
//
// export async function generateMetadata({params}) {
//   const {locale} = await params;
//   const t = await getTranslations({locale, namespace: 'Metadata'});
//
//   return {
//     title: t('title')
//   };
// }
