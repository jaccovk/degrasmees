import { defineRouting } from "next-intl/routing"

const isDev = process.env.NODE_ENV === "development"

export const routing = defineRouting({
  locales: ["nl", "en"],
  defaultLocale: "nl",
  domains: [
    {
      domain: isDev ? "localhost:3000" : "degrasmees.nl",
      defaultLocale: "nl",
      locales: ["nl"],
    },
    {
      domain: isDev ? "localhost:3001" : "degrasmees.com",
      defaultLocale: "en",
      locales: ["en"],
    },
  ],
  localePrefix: "never",
})
