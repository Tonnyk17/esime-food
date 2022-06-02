/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pngimg.com','img.pystatic.com'], //TODO save images on Firebase & add the domain
  },
}

module.exports = nextConfig
