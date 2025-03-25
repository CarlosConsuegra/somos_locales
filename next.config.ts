/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/somos_locales' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/somos_locales/' : '',
}

module.exports = nextConfig