// sizePin: process.env.INITIAL_PIN_SIZE,
// pinList: [],
// location: process.env.MAP_LOCATION,
// lngLat: [process.env.MAP_LOCATION_LAT, process.env.MAP_LOCATION_LNG],
// orientation: "portrait",
// tileLayer: "white-transit",
// textPrimary: "",
// textSecondary: "",
// textCoordinates: "",
// addLngLat: false,
// size: "_24_36",
// zoom: process.env.MAP_ZOOM,
// cart: [],
// bbox: [],

export function loadSizePin() {
  const sizePin = localStorage.getItem("sizePin");
  console.log(sizePin);
  if (sizePin) {
    return JSON.parse(sizePin);
  }
  // Default sizePin
  return process.env.INITIAL_PIN_SIZE;
}

export function loadPinList() {
  const pinList = localStorage.getItem("pinList");
  console.log(pinList);
  if (pinList) {
    return JSON.parse(pinList);
  }
  // Default pinList
  return [];
}

export function loadLocation() {
  const location = localStorage.getItem("location");
  console.log(location);
  if (location) {
    return JSON.parse(location);
  }
  // Default location
  return process.env.MAP_LOCATION;
}
export function loadLngLat() {
  const lngLat = localStorage.getItem("lngLat");
  console.log("lngLat", lngLat);
  if (lngLat) {
    return JSON.parse(lngLat);
  }
  // Default lngLat
  return [process.env.MAP_LOCATION_LAT, process.env.MAP_LOCATION_LNG];
}
export function loadOrientation() {
  const orientation = localStorage.getItem("orientation");
  console.log("orientation from localstorage", orientation);
  if (orientation) {
    return JSON.parse(orientation);
  }
  // Default orientation
  return "portrait";
}
export function loadTileLayer() {
  const tileLayer = localStorage.getItem("tileLayer");
  console.log("tileLayer", tileLayer);
  if (tileLayer) {
    return JSON.parse(tileLayer);
  }
  // Default tileLayer
  return "white-transit";
}
export function loadTextPrimary() {
  const textPrimary = localStorage.getItem("textPrimary");
  console.log("textPrimary", textPrimary);
  if (textPrimary) {
    return JSON.parse(textPrimary);
  }
  // Default textPrimary
  return "";
}
export function loadTextSecondary() {
  const textSecondary = localStorage.getItem("textSecondary");
  console.log("textSecondary", textSecondary);
  if (textSecondary) {
    return JSON.parse(textSecondary);
  }
  // Default textSecondary
  return "";
}
export function loadTextCoordinates() {
  const textCoordinates = localStorage.getItem("textCoordinates");
  console.log("textCoordinates", textCoordinates);
  if (textCoordinates) {
    return JSON.parse(textCoordinates);
  }
  // Default textCoordinates
  return "";
}
export function loadAddLngLat() {
  const addLngLat = localStorage.getItem("addLngLat");
  console.log("addLngLat", addLngLat);
  if (addLngLat) {
    return JSON.parse(addLngLat);
  }
  // Default addLngLat
  return false;
}
export function loadSize() {
  const size = localStorage.getItem("size");
  console.log("size", size);
  if (size) {
    return JSON.parse(size);
  }
  // Default size
  return "_24_36";
}
export function loadZoom() {
  const zoom = localStorage.getItem("zoom");
  console.log("zoom", zoom);
  if (zoom) {
    return JSON.parse(zoom);
  }
  // Default zoom
  return process.env.MAP_ZOOM;
}
export function loadCart() {
  const cart = localStorage.getItem("cart");
  console.log("cart", cart);
  if (cart) {
    return JSON.parse(cart);
  }
  // Default cart
  return [];
}
export function loadBbox() {
  const bbox = localStorage.getItem("bbox");
  console.log("bbox", bbox);
  if (bbox) {
    return JSON.parse(bbox);
  }
  // Default bbox
  return [];
}
