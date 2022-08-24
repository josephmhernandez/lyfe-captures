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
} 
