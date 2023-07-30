// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config.js')
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
}

module.exports = nextConfig
