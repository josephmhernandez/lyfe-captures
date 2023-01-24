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
      portrait: {
        map_width: 23,
        map_height: 31,
      },
      landscape: {
        map_width: 35,
        map_height: 19,
      },
      styling: {
        basic: {
          // 4.5 inches of space for letting. 1/2 inch margins around map. really 4 in or it will be crowded.
          block_inches: 4.5, // 4.5*23 = 103.5 px //4*23 = 92 px
          // Font sizes in pixels.
          // text block in pixels
          primary_font_size: 32,
          primary_font: "Semplicita",
          primary_font_color: "#000000",
          // primary_text_block: x, // written out in pixels through browswer inspector. (helps with printing process. Nothing on front end)
          secondary_font_size: 16,
          secondary_font: "Semplicita",
          secondary_font_color: "#000000",
          // secondary_text_block: x, //writen out in pixels through browswer inspector. (helps with printing process. Nothing on front end)
          coordinate_font_size: 12,
          coordinate_font: "Semplicita",
          coordinate_font_color: "#000000",
          // coordinate_text_block: x, //writen out in pixels through browswer inspector. (helps with printing process. Nothing on front end)
          borders: [
            {
              border_inches: 0.5,
              color: "#FFFFFF",
            },
          ],
        },
      },
    },
  },
};

// Background color for the map first. ColorIconPathMap
export const MapStyleDict = {
  test: {
    id: "test",
    iconImg: "/whiteBlackSquareIcon.svg",
    url: "https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=PmIF6Ez34ROeDo7jJGuD#",
  },
  "light-transit": {
    id: "light-transit",
    iconImg: "/whiteBlackSquareIcon.svg",
    url: `https://api.maptiler.com/maps/1ec3a490-b9a7-418e-b22b-26f45c463081/{z}/{x}/{y}.png?key=${process.env.MAPTILER_API_KEY}`,
  },
  "dark-transit": {
    id: "dark-transit",
    iconImg: "/blackWhiteSquareIcon.svg",
    url: `https://api.maptiler.com/maps/265e1571-5b2a-47cf-bdf4-0f78abaefb47/{z}/{x}/{y}.png?key=${process.env.MAPTILER_API_KEY}`,
  },
  "modern-light": {
    id: "modern-light",
    iconImg: "/modernLightIcon.svg",
    url: `https://api.maptiler.com/maps/b5849635-c4d4-4bb8-b7ea-78ccd9bcf89c/{z}/{x}/{y}.png?key=${process.env.MAPTILER_API_KEY}`,
  },
};

export const SIZE_OPTION = "_24_36";
export const MATERIAL_OPTION = "POSTER";
export const DEFAULT_TILE_LAYER = "light-transit";
