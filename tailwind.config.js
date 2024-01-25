/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",

    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-white-bg": "#ffffff",
        primaryWhite: "#ffffff",
      },
      fontFamily: {
        "great-vibes": ['"Great Vibes"', "sans-serif"], // Enclose font name in quotes for spaces
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Apply font-display: swap for smoother transitions
            "@font-face": {
              fontDisplay: "swap",
            },
          },
        },
      }),
    },
  },
  plugins: [require("flowbite/plugin")],
};
