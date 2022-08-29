import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "map",
  initialState: {
    sizePin: 40,
    pinList: [],
    location: "Washington, DC",
    orientation: "portrait",
    color: "",
    textPrimary: "",
    textSecondary: "",
    textCoordinates: "",
    addLngLat: false,
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
    changeOreintation: (state, action) => {
      state.orientation = action.payload;

      //Get map and change orientation of the map.
    },
    changeLocation: (state, action) => {
      state.location = action.payload;

      // Get map. convert location to lng lat. update map.
    },
    setTextPrimary: (state, action) => {
      state.textPrimary = action.payload;

      //Add priamry text to the map.
    },
    setTextSecondary: (state, action) => {
      state.textSecondary = action.payload;

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
  },
});

export const mapActions = mapSlice.actions;

export default mapSlice;
