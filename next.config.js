/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: `${process.env.NEXT_PUBLIC_CONTENTFUL_ID}`,
    CONTENTFUL_ACCESS_KEY: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ibb.co',
        port: '',
      },
    ],
  },
}

module.exports = withPWA({
  nextConfig
}) 
