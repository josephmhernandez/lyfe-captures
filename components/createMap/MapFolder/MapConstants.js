// Map constant for mapping sizes

// Stick to rules: 5 inches of space for lettering. 1/2 inch margins around map.
export const MapConstants = {
  poster_size: {
    _24_36: {
      variant_size: "24 x 36 IN.",
      full_width: 24,
      full_height: 36,
      // Multiplier for converting inches to pixels.
      poster_multiplier: 23,
      margin: 0,
      portrait: {
        map_width: 24,
        map_height: 36,
      },
      landscape: {
        map_width: 36,
        map_height: 24,
      },
      styling: {
        basic: {
          // 4.5 inches of space for letting. 1/2 inch margins around map. really 4 in or it will be crowded.
          // block_inches: 4.5, // 4.5*23 = 103.5 px //4*23 = 92 px
          // Font sizes in pixels.
          // text block in pixels
          // primary_font_size: 32,
          // primary_font: "Semplicita",
          // primary_font_color: "#000000",
          // // primary_text_block: x, // written out in pixels through browswer inspector. (helps with printing process. Nothing on front end)
          // secondary_font_size: 16,
          // secondary_font: "Semplicita",
          // secondary_font_color: "#000000",
          // // secondary_text_block: x, //writen out in pixels through browswer inspector. (helps with printing process. Nothing on front end)
          // coordinate_font_size: 12,
          // coordinate_font: "Semplicita",
          // coordinate_font_color: "#000000",
          // coordinate_text_block: x, //writen out in pixels through browswer inspector. (helps with printing process. Nothing on front end)
          // borders: [
          //   {
          //     border_inches: 0.5,
          //     color: "#FFFFFF",
          //   },
          // ],
        },
      },
    },
    _24_36_demo: {
      variant_size: "24 x 36 IN.",
      full_width: 24,
      full_height: 36,
      // Multiplier for converting inches to pixels.
      poster_multiplier: 9,
      margin: 0,
      portrait: {
        map_width: 24,
        map_height: 36,
      },
      landscape: {
        map_width: 36,
        map_height: 24,
      },
    },
  },
};

// Background color for the map first. ColorIconPathMap
export const MapStyleDict = {
  // test: {
  //   id: "test",
  //   iconImg: "/whiteBlackSquareIcon.svg",
  //   url: "https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=PmIF6Ez34ROeDo7jJGuD#",
  //   text: {
  //     fontFamily: {
  //       primary: "Semplicita",
  //       secondary: "Semplicita",
  //       coordinate: "Semplicita",
  //     },
  //     size: {
  //       primary: "24",
  //       secondary: "12",
  //       coordinate: "8",
  //     },
  //     color: {
  //       background: "#FFFFFF",
  //       primary: "#000000",
  //       secondary: "#000000",
  //       coordinate: "#000000",
  //     },
  //     color_transparent: {
  //       background: "#0000",
  //       primary: "#FFFFFF",
  //       secondary: "#FFFFFF",
  //       coordinate: "#FFFFFF",
  //     },
  //     textBlock: {
  //       padding: "8px",
  //       rounded: "3px",
  //       spacing: "1", // Inches
  //     },
  //   },
  // },
  "dark-transit": {
    id: "dark-transit",
    iconImg: "/blackWhiteSquareIcon.svg",
    url: `https://api.maptiler.com/maps/265e1571-5b2a-47cf-bdf4-0f78abaefb47/{z}/{x}/{y}.png?key=${process.env.MAPTILER_API_KEY}`,
    text: {
      fontFamily: {
        primary: "Semplicita",
        secondary: "Semplicita",
        coordinate: "Semplicita",
      },
      size: {
        primary: "24",
        secondary: "12",
        coordinate: "8",
      },
      size_demo: {
        primary: "8",
        secondary: "4",
        coordinate: "2",
      },
      color: {
        background: "#FFFFFF",
        primary: "#000000",
        secondary: "#000000",
        coordinate: "#000000",
      },
      color_transparent: {
        background: "#0000",
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        coordinate: "#FFFFFF",
      },
      textBlock: {
        padding: "8px",
        rounded: "8px",
        spacing: "1", // Inches
      },
      text_block_demo: {
        padding: "1px",
        rounded: "3px",
        spacing: "1",
      },
    },
  },
  "modern-light": {
    id: "modern-light",
    iconImg: "/modernLightIcon.svg",
    url: `https://api.maptiler.com/maps/b5849635-c4d4-4bb8-b7ea-78ccd9bcf89c/{z}/{x}/{y}.png?key=${process.env.MAPTILER_API_KEY}`,
    text: {
      fontFamily: {
        primary: "Semplicita",
        secondary: "Semplicita",
        coordinate: "Semplicita",
      },
      size: {
        primary: "24",
        secondary: "12",
        coordinate: "8",
      },
      size_demo: {
        primary: "8",
        secondary: "4",
        coordinate: "2",
      },
      color: {
        background: "#000000",
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        coordinate: "#FFFFFF",
      },
      color_transparent: {
        background: "#0000",
        primary: "#000000",
        secondary: "#000000",
        coordinate: "#000000",
      },
      textBlock: {
        padding: "8px",
        rounded: "8px",
        spacing: "1", // Inches
      },
      text_block_demo: {
        padding: "1px",
        rounded: "3px",
        spacing: "1",
      },
    },
  },
  "city-lights": {
    id: "city-lights",
    iconImg: "/city-lights.png",
    url: `https://api.maptiler.com/maps/70207988-ec48-4dce-8172-230ff9375b7d/{z}/{x}/{y}.png?key=${process.env.MAPTILER_API_KEY}`,
    text: {
      fontFamily: {
        primary: "Semplicita",
        secondary: "Semplicita",
        coordinate: "Semplicita",
      },
      size: {
        primary: "24",
        secondary: "12",
        coordinate: "8",
      },
      size_demo: {
        primary: "8",
        secondary: "4",
        coordinate: "2",
      },
      color: {
        background: "#000000",
        primary: "#ffd900",
        secondary: "#ffd900",
        coordinate: "#ffd900",
      },
      color_transparent: {
        background: "#0000",
        primary: "#ffd900",
        secondary: "#ffd900",
        coordinate: "#ffd900",
      },
      textBlock: {
        padding: "8px",
        rounded: "8px",
        spacing: "1", // Inches
      },
      text_block_demo: {
        padding: "1px",
        rounded: "3px",
        spacing: "1",
      },
    },
  },
  "ocean-tan": {
    id: "ocean-tan",
    iconImg: "/tan-ocean.png",
    url: `https://api.maptiler.com/maps/cd852295-1a11-4a53-a22b-995b2ded0e62/{z}/{x}/{y}.png?key=${process.env.MAPTILER_API_KEY}`,
    text: {
      fontFamily: {
        primary: "Semplicita",
        secondary: "Semplicita",
        coordinate: "Semplicita",
      },
      size: {
        primary: "24",
        secondary: "12",
        coordinate: "8",
      },
      size_demo: {
        primary: "8",
        secondary: "4",
        coordinate: "3",
      },
      color: {
        background: "#000000",
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        coordinate: "#FFFFFF",
      },
      color_transparent: {
        background: "#0000",
        primary: "#000000",
        secondary: "#000000",
        coordinate: "#000000",
      },
      textBlock: {
        padding: "8px",
        rounded: "8px",
        spacing: "1", // Inches
      },
      text_block_demo: {
        padding: "1px",
        rounded: "3px",
        spacing: "1",
      },
    },
  },
  "flag-back": {
    id: "flag-back",
    iconImg: "/tan-ocean.png",
    url: `https://api.maptiler.com/maps/b5849635-c4d4-4bb8-b7ea-78ccd9bcf89c/{z}/{x}/{y}.png?key=${process.env.MAPTILER_API_KEY}`,
    isOverlay: true,
    text: {
      fontFamily: {
        primary: "Semplicita",
        secondary: "Semplicita",
        coordinate: "Semplicita",
      },
      size: {
        primary: "24",
        secondary: "12",
        coordinate: "8",
      },
      size_demo: {
        primary: "8",
        secondary: "4",
        coordinate: "3",
      },
      color: {
        background: "#000000",
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        coordinate: "#FFFFFF",
      },
      color_transparent: {
        background: "#0000",
        primary: "#000000",
        secondary: "#000000",
        coordinate: "#000000",
      },
      textBlock: {
        padding: "8px",
        rounded: "8px",
        spacing: "1", // Inches
      },
      text_block_demo: {
        padding: "1px",
        rounded: "3px",
        spacing: "1",
      },
    },
  },
};

export const BG_IMG_CODE_URL_MAP = {
  usa: {
    "2_3": "createMap/flags/usa/2_3_usa.png",
  },
};

export const SIZE_OPTION = "_24_36";
export const MATERIAL_OPTION = "POSTER";
export const DEFAULT_TILE_LAYER = "dark-transit";
export const DEFAULT_FLAG_BG_IMG_CODE = "usa";

export const MOBILE_ZOOM_OFFSET = 3;
export const WEB_ZOOM_OFFSET = 2;
