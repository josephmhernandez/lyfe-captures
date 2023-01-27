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
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.chec.io",
        port: "",
        pathname: "/merchants/47490/assets/**",
      },
    ],
  },
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    CHEC_PK: process.env.CHEC_PK,
    CHEC_SK: process.env.CHEC_SK,
    STRIPE_PK: process.env.STRIPE_PK,
    MAPTILER_API_KEY: process.env.MAPTILER_API_KEY,
    MAX_CHARS_PRIMARY: process.env.MAX_CHARS_PRIMARY,
    MAX_CHARS_SECONDARY: process.env.MAX_CHARS_SECONDARY,

    MAX_PINS: process.env.MAX_PINS,

    MAP_ZOOM: process.env.MAP_ZOOM,
    MAP_LOCATION_LAT: process.env.MAP_LOCATION_LAT,
    MAP_LOCATION_LNG: process.env.MAP_LOCATION_LNG,
    INITIAL_PIN_SIZE: process.env.INITIAL_PIN_SIZE,
    MAP_LOCATION: process.env.MAP_LOCATION,
    MAX_MAP_ZOOM: process.env.MAX_MAP_ZOOM,
    MIN_MAP_ZOOM: process.env.MIN_MAP_ZOOM,
    TILE_ZOOM_OFFSET: process.env.TILE_ZOOM_OFFSET,

    CART_ITEM_MAX_QUANTITY: process.env.CART_ITEM_MAX_QUANTITY,
    EMAIL_SUPPORT: process.env.EMAIL_SUPPORT,
  },
};
