// Map constant for mapping sizes

// Stick to rules: 5 inches of space for lettering. 1/2 inch margins around map. 
export const MapConstants = {
  poster_size: {
    _24_36: {
      variant_size: "24 x 36 IN.",
      full_width: 24,
      full_height: 36,
      poster_multiplier: 16,
      portrait: {
        map_width: 23,
        map_height: 31,
      },
      landscape: {
        map_width: 35,
        map_height: 19,
      },
    },
  },
};

// Background color for the map first. ColorIconPathMap
export const MapStyleDict = {
  "white-transit": {
    id: "white-transit",
    iconImg: "/whiteBlackSquareIcon.svg",
    url: "t-white-url",
  },
  "black-transit": {
    id: "black-transit",
    iconImg: "/blackWhiteSquareIcon.svg",
    url: "t-black-url",
  },

}

export const SIZE_OPTION = "_24_36";
export const MATERIAL_OPTION = "POSTER"; 