/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: `${process.env.CONTENTFUL_ID}`,
    CONTENTFUL_ACCESS_KEY: `${process.env.CONTENTFUL_ACCESS_TOKEN}`
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

module.exports = nextConfig
