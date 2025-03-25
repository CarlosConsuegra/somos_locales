const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/somos_locales' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/somos_locales/' : '',
  trailingSlash: true, // Add this line
}

module.exports = nextConfig