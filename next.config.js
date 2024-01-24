/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.lottie$/,
      type: "asset/resource",
    });

    return config;
  },
};

module.exports = nextConfig;

module.exports = {
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    primaryColor: "#8657c7",
  },
  reactStrictMode: false,
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.chec.io",
        port: "",
        pathname: "/merchants/47490/assets/**",
      },
      {
        protocol: "https",
        hostname:
          "mapyourmemory-storage-7ecb0ad634450-staging.s3.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
      {
        protocol: "https",
        hostname:
          "mapyourmemory-storage-7ecb0ad634450-staging.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
  env: {
    BUILD_ENV: process.env.BUILD_ENV,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    CHEC_PK: process.env.CHEC_PK,
    CHEC_SK: process.env.CHEC_SK,
    STRIPE_PK: process.env.STRIPE_PK,
    MAPTILER_API_KEY: process.env.MAPTILER_API_KEY,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,

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
    EMAIL_SPECIAL_REQUESTS: process.env.EMAIL_SPECIAL_REQUESTS,
    EMAIL_MARKETING_SENDER: process.env.EMAIL_MARKETING_SENDER,

    // Analytics
    FB_PIXEL_ID: process.env.FB_PIXEL_ID,
    GTM_ID: process.env.GTM_ID,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
};
