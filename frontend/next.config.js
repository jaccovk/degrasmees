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
        port: '1339',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'degrasmees-strapi.test.jaccovankooten.nl',
        pathname: '/uploads/**',
      }
    ],
  },
}

module.exports = nextConfig
