import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import {
  MapConstants,
  MapStyleDict,
  WEB_ZOOM_OFFSET,
  DEFAULT_TILE_LAYER,
} from "../components/createMap/MapFolder/MapConstants";

import { addToMapObjLocalStorage } from "../components/cart/cartFunctionality";

const mapSlice = createSlice({
  name: "map",
  initialState: {
    sizePin: process.env.INITIAL_PIN_SIZE,
    pinList: [],
    location: process.env.MAP_LOCATION,
    lngLat: [process.env.MAP_LOCATION_LAT, process.env.MAP_LOCATION_LNG],
    orientation: "portrait",
    tileLayer: DEFAULT_TILE_LAYER,
    textPrimary: "",
    textSecondary: "",
    textCoordinates: "",
    addLngLat: false,
    size: "_24_36",
    styling: "basic",
    zoom: process.env.MAP_ZOOM,
    tileZoomOffset: WEB_ZOOM_OFFSET,
    transparentTextBlock: false,
    bgImgCode: "",
    // cart: [],
    bbox: [],
  },
  reducers: {
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

      if (data.bbox !== undefined) {
        state.bbox = data.bbox;
      }
    },
    setTransparentTextBlock: (state, action) => {
      state.transparentTextBlock = action.payload;
    },
    changeLocation: (state, action) => {
      // On location search we want to search api for location and update lngLat
      // when
      const { place_id, structured_formatting } = action.payload;

      if (
        structured_formatting.main_text &&
        structured_formatting.main_text.length > process.env.MAX_CHARS_PRIMARY
      ) {
        state.textPrimary = structured_formatting.main_text.slice(
          0,
          process.env.MAX_CHARS_PRIMARY
        );
      } else {
        state.textPrimary = structured_formatting.main_text
          ? structured_formatting.main_text
          : "";
      }

      if (
        structured_formatting.secondary_text &&
        structured_formatting.secondary_text.length >
          process.env.MAX_CHARS_SECONDARY
      ) {
        state.textSecondary = structured_formatting.secondary_text.slice(
          0,
          process.env.MAX_CHARS_SECONDARY
        );
      } else {
        state.textSecondary = structured_formatting.secondary_text
          ? structured_formatting.secondary_text
          : "";
      }

      // Search place_id and get coordinates
      state.location = action.place_id;
    },
    setTileLayer: (state, action) => {
      let tileLayer = action.payload.tileLayer;

      let bgImgCode = "";
      // look up tileLayer in MapStyleDict for isOverlay flag

      if (MapStyleDict[tileLayer].isOverlay) {
        // if isOverlay, don't clear bgImgCode
        return {
          ...state,
          tileLayer: tileLayer,
        };
      }

      return {
        ...state,
        tileLayer: tileLayer,
        bgImgCode: "",
      };
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
      const tempCoordinates = `N40 23'37.234" W111 54'54.73 template"`;

      // If pin in bbox. use pin coordinates
      const pin_list = state.pinList;
      if (pin_list.length > 0) {
        const pin = current(state.pinList[0]);
        if (mapContains(state.bbox, pin.position)) {
          const new_text_coordinates =
            convertToDms(pin.position.lat, false) +
            " " +
            convertToDms(pin.position.lng, true);
          return {
            ...state,
            textCoordinates: new_text_coordinates,
          };
        } else {
          // console.log("map doesnt contain pin");
        }
      }

      // Use center of map
      //Add cordinate text to the map.
      const [lat, lng] = state.lngLat;
      const new_text_coordinates =
        convertToDms(lat, false) + " " + convertToDms(lng, true);
      return {
        ...state,
        textCoordinates: new_text_coordinates,
      };
    },
    removeTextCoordinate: (state, action) => {
      //Remove cordinate text from the map.
      state.textCoordinates = "";
    },
    setAddLngLatFlag: (state, action) => {
      return {
        ...state,
        addLngLat: action.payload,
      };
    },
    removeAllText: (state, action) => {
      // Remove all text from the map.
      return {
        ...state,
        textPrimary: "",
        textSecondary: "",
        textCoordinates: "",
        addLngLat: false,
      };
    },
    addPinToMap: (state, action) => {
      // Add pin to the map. Call pin to center if the pin is already in pinlist.
      const size = action.payload.size;
      const style = action.payload.style;
      const position = state.lngLat; // Change this position to the state of the center of the map...
      const unique_id = uuid();

      let pinList = state.pinList;

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
        position: {
          lat: position[0],
          lng: position[1],
        },
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
    addMapToCart: (state, action) => {
      // only function in redux slice that calls cartFunctionality.
      let mapObj = {};
      mapObj.pinList = state.pinList;
      mapObj.location = state.location;
      mapObj.center = state.lngLat;
      mapObj.zoom = state.zoom;
      mapObj.orientation = state.orientation;
      mapObj.textPrimary = state.textPrimary;
      mapObj.textSecondary = state.textSecondary;
      mapObj.textCoordinates = state.textCoordinates;
      mapObj.styling = state.styling;
      mapObj.size = state.size;
      mapObj.tileLayer = state.tileLayer;
      mapObj.bbox = state.bbox;
      mapObj.tileZoomOffset = state.tileZoomOffset;
      mapObj.bgImgCode = state.bgImgCode;
      mapObj.quantity = 1;
      mapObj.description = "";
      mapObj.id = uuid();
      mapObj.name = action.payload.name; // This is the official name of the product
      mapObj.unitPrice = action.payload.unitPrice;
      mapObj.lineItemId = action.payload.lineItemId;
      mapObj.isTransparentTextBlock = state.transparentTextBlock;
      // Make sure if coordinates are added that we recaclulate them
      if (mapObj.textCoordinates !== "") {
        if (mapContains(mapObj.bbox, mapObj.pinList[0]?.position)) {
          const new_text_coordinates =
            convertToDms(mapObj.pinList[0].position.lat, false) +
            " " +
            convertToDms(mapObj.pinList[0].position.lng, true);
          mapObj.textCoordinates = new_text_coordinates;
        } else {
          const [lat, lng] = mapObj.center;
          const new_text_coordinates =
            convertToDms(lat, false) + " " + convertToDms(lng, true);
          mapObj.textCoordinates = new_text_coordinates;
        }
      }

      mapObj.text_styling_specs = MapStyleDict[mapObj.tileLayer];
      // TO DO: Test this :)
      if (
        mapObj.textPrimary != "" ||
        mapObj.textSecondary != "" ||
        mapObj.textCoordinates != ""
      ) {
        // has text
        mapObj.mapDimensionsIn = {
          ...MapConstants["poster_size"][mapObj.size][state.orientation],
          map_pixel_multiplier:
            MapConstants["poster_size"][mapObj.size]["poster_multiplier"],
        };
      } else {
        if (mapObj.orientation === "landscape") {
          mapObj.mapDimensionsIn = {
            map_width: MapConstants["poster_size"][mapObj.size].full_height - 1,
            map_height: MapConstants["poster_size"][mapObj.size].full_width - 1,
            map_pixel_multiplier:
              MapConstants["poster_size"][mapObj.size]["poster_multiplier"],
          };
        } else {
          mapObj.mapDimensionsIn = {
            map_width: MapConstants["poster_size"][mapObj.size].full_width - 1,
            map_height:
              MapConstants["poster_size"][mapObj.size].full_height - 1,
            map_pixel_multiplier:
              MapConstants["poster_size"][mapObj.size]["poster_multiplier"],
          };
        }
      }

      mapObj.description = action.payload.description;

      // call local storage to update cart.
      addToMapObjLocalStorage(mapObj);
    },
    removePinsFromMap: (state, action) => {
      // Remove all pins from the map.
      return {
        ...state,
        pinList: [],
      };
    },

    setZoom: (state, action) => {
      // Plan to use this for increasing experience. Maybe reset zoom to x whenever we search a new place.
      state.zoom = action.payload;
    },
    setZoomOffset: (state, action) => {
      // For Mobile we want to set it to 3. And for desktop we want to set it to 2.
      state.tileZoomOffset = action.payload;
    },
    setSizeOption: (state, action) => {
      state.size = action.payload;
    },
    setBgImgCode: (state, action) => {
      state.bgImgCode = action.payload;
    },
  },
});

export const mapActions = mapSlice.actions;

export default mapSlice;

function mapContains(bbox_raw, pos) {
  if (pos === undefined) {
    return false;
  }
  const bbox = JSON.parse(bbox_raw);
  var bounds = new L.LatLngBounds(
    new L.LatLng(bbox["_northEast"].lat, bbox["_northEast"].lng),
    new L.LatLng(bbox["_southWest"].lat, bbox["_southWest"].lng)
  );

  return bounds.contains(new L.LatLng(pos.lat, pos.lng));
}

/**
 * Converts decimal degrees to degrees minutes seconds.
 *
 * @param dd the decimal degrees value.
 * @param isLng specifies whether the decimal degrees value is a longitude.
 * @return degrees minutes seconds string in the format N 49°15'51.35"
 */
function convertToDms(dd, isLng) {
  var dir = dd < 0 ? (isLng ? "W" : "S") : isLng ? "E" : "N";

  var absDd = Math.abs(dd);
  var deg = absDd | 0;
  var frac = absDd - deg;
  var min = (frac * 60) | 0;
  var sec = frac * 3600 - min * 60;
  // Round it to 2 decimal points.
  sec = Math.round(sec * 100) / 100;
  return dir + " " + deg + "°" + min + "'" + sec + '"';
}
