import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
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
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
