/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")

const nextConfig = {
  env: {
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1339",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "**.test.jaccovankooten.nl",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "strapi.**",
        pathname: "/uploads/**",
      },
    ],
  },
  i18n,
}

module.exports = nextConfig
