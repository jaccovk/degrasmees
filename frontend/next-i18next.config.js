const i18n = {
  defaultLocale: process.env.DEFAULT_LANGUAGE,
  localeDetection: false, // disable automatic redirection on the user's preferred locale
  locales: ["nl"],
  // locales: ["en", "nl", "de"],
  // domains: [
  //   {
  //     domain: "degrasmees.com",
  //     defaultLocale: "en",
  //   },
  //   {
  //     domain: "degrasmees.nl",
  //     defaultLocale: "nl",
  //   },
  //   {
  //     domain: "degrasmees.de",
  //     defaultLocale: "de",
  //   },
  // ],
}

const next18nextConfig = {
  i18n,
  localePath: "./base/locales",
  localeStructure: "{{lng}}/{{ns}}",
  reloadOnPrerender: process.env.NODE_ENV === "development",
}

module.exports = next18nextConfig
