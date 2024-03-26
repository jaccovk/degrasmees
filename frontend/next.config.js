/** @type {import('next').NextConfig} */

const nextConfig = {
  // experimental: {
  //     appDir: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1338',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'strapi.jaapvankooten.nl',
        pathname: '/uploads/**',
      }
    ],
  },
}

module.exports = nextConfig
