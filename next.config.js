/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.pirocot.com'],
  },
  optimizeFonts: true,
  output: 'standalone',
}

module.exports = nextConfig
