import { QrCodeScannerOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const mapSlice = createSlice({
  name: "map",
  initialState: {
    sizePin: process.env.INITIAL_PIN_SIZE,
    pinList: [],
    location: process.env.MAP_LOCATION,
    lngLat: [process.env.MAP_LOCATION_LAT, process.env.MAP_LOCATION_LNG],
    orientation: "portrait",
    color: "",
    textPrimary: "",
    textSecondary: "",
    textCoordinates: "",
    addLngLat: false,
    zoom: process.env.MAP_ZOOM,
  },
  reducers: {
    addPin: (state, action) => {
      state.pinList.push(action.payload);

      //Get map and add pin to the map.
      //Need references to all pins so we can get their locations and change sizes of pins.
    },
    removePin: (state, action) => {
      //Get pin id and remove it from list. also remove it from map.
    },
    changePinSize: (state, action) => {
      state.sizePin = action.payload;
      // Change all pin sizes
    },
    changeOrientation: (state, action) => {
      //Get map and change orientation of the map.
      state.orientation = action.payload;
    },
    changeMapCenter: (state, action) => {
      // Input payload: {lat: 40.907132, lng: -77.036546}
      // const data = JSON.parse(action.payload);
      const data = action.payload;
      if (data.lng !== undefined && data.lat !== undefined) {
        state.lngLat = [data.lat, data.lng];
      }

      if (data.zoom !== undefined) {
        state.zoom = data.zoom;
      }
    },
    changeLocation: (state, action) => {
      // On location search we want to search api for location and update lngLat
      // when
      const { place_id, structured_formatting } = action.payload;

      if (
        structured_formatting.main_text.length > process.env.MAX_CHARS_PRIMARY
      ) {
        state.textPrimary = structured_formatting.main_text.slice(
          0,
          process.env.MAX_CHARS_PRIMARY
        );
      } else {
        state.textPrimary = structured_formatting.main_text;
      }

      if (
        structured_formatting.secondary_text.length >
        process.env.MAX_CHARS_SECONDARY
      ) {
        state.textSecondary = action.payload.slice(
          0,
          process.env.MAX_CHARS_SECONDARY
        );
      } else {
        state.textSecondary = structured_formatting.secondary_text;
      }

      // Search place_id and get coordinates
      state.location = action.place_id;
    },
    setTextPrimary: (state, action) => {
      if (action.payload.length > process.env.MAX_CHARS_PRIMARY) {
        state.textPrimary = action.payload.slice(
          0,
          process.env.MAX_CHARS_PRIMARY
        );
      } else {
        state.textPrimary = action.payload;
      }
    },
    setTextSecondary: (state, action) => {
      if (action.payload.length > process.env.MAX_CHARS_SECONDARY) {
        state.textSecondary = action.payload.slice(
          0,
          process.env.MAX_CHARS_SECONDARY
        );
      } else {
        state.textSecondary = action.payload;
      }
      //Add secondary text to the map.
    },
    addTextCoordinate: (state, action) => {
      //   state.addLngLat = action.payload;
      const tempCoordinates = `N40 23'37.234" W111 54'54.73"`;

      state.textCoordinates = tempCoordinates;
      //Add cordinate text to the map.
    },
    removeTextCoordinate: (state, action) => {
      state.textCoordinates = "";

      //Remove cordinate text from the map.
    },
    setAddLngLatFlag: (state, action) => {
      state.addLngLat = action.payload;
    },
    removeAllText: (state, action) => {
      // Remove all text from the map.

      state.textPrimary = "";
      state.textSecondary = "";
      state.textCoordinates = "";
      state.addLngLat = false;
    },
    addPinToMap: (state, action) => {
      // Add pin to the map. Call pin to center if the pin is already in pinlist.

      // Pin size.
      // Pin style.
      // Pin location.
      const size = action.payload.size;
      const style = action.payload.style;
      const position = state.lngLat; // Change this position to the state of the center of the map...
      const unique_id = uuid();

      const pinList = state.pinList;

      if (pinList.length >= process.env.MAX_PINS) {
        // Add pin to map.
        pinList.shift();
        if (pinList.length == 0) {
          pinList = [];
        }
      }

      // const map = useMap();
      // const center = map.getCenter();
      // const center = [40.907132, -77.036546];

      pinList[pinList.length] = {
        id: unique_id,
        size: size,
        style: style,
        position: position,
      };
      state.pinList = pinList;
    },
    updateAddLngLatValue: (state, action) => {
      // I dont think this should be inside slice  needs to be a js function outside this.
      // TO DO: update the add lng-lat position
      // pin list empty: lng-lat is the center of the map
      // pin list not empty && pin is visible on the map:
      // - lng-lat is location of first pin in the list
    },
    setPinLngLat: (state, action) => {
      const unique_id = action.payload.id;
      const position = action.payload.position;

      const pinList = state.pinList;

      const i = pinList.findIndex((obj) => obj.id === unique_id);
      pinList[i].position = position;

      state.pinList = pinList;
    },
    removePinsFromMap: (state, action) => {
      // Remove all pins from the map.
      state.pinList = [];
    },
  },
});

export const mapActions = mapSlice.actions;

export default mapSlice;
