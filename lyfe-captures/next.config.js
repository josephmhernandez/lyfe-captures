/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    primaryColor: "#8657c7",
  },
  reactStrictMode: true,
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,

    MAX_CHARS_PRIMARY: process.env.MAX_CHARS_PRIMARY,
    MAX_CHARS_SECONDARY: process.env.MAX_CHARS_SECONDARY,
  }
} 
