/** @type {import('next').NextConfig} */

const nextConfig = {}

module.exports = nextConfig
module.exports = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  },
}
