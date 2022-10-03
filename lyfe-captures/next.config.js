/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

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

    MAX_PINS: process.env.MAX_PINS,

    MAP_ZOOM: process.env.MAP_ZOOM,
    MAP_LOCATION_LAT: process.env.MAP_LOCATION_LAT,
    MAP_LOCATION_LNG: process.env.MAP_LOCATION_LNG,
    INITIAL_PIN_SIZE: process.env.INITIAL_PIN_SIZE,
    MAP_LOCATION: process.env.MAP_LOCATION,
  },
};
