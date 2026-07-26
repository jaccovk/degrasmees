import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  env: {
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
  },
  sassOptions: {
    // Schakelt de waarschuwing voor de oude JS API uit
    silenceDeprecations: ["legacy-js-api"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: __dirname,
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
    // Alleen nodig voor de lokale "localhost"-remotePattern hierboven; productie-hosts
    // (test.jaccovankooten.nl, strapi.**) zijn geen local IPs en werken hier los van.
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
  },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
