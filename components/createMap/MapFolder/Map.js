import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import {
  MapStyleDict,
  DEFAULT_TILE_LAYER,
  MapConstants,
} from "../MapFolder/MapConstants";
import { useDispatch, useSelector } from "react-redux";
import MapPins from "./MapPins";
import { useEffect } from "react";
import { mapActions } from "../../../store/map-slice";

const MapFunctionality = () => {
  const dispatch = useDispatch();
  const bbox = useSelector((state) => state.map.bbox);
  const map = useMapEvents({
    moveend: () => {
      const bbox_new = JSON.stringify(map.getBounds());
      const payload = {
        lat: map.getCenter().lat,
        lng: map.getCenter().lng,
        zoom: map.getZoom(),
        bbox: bbox_new,
      };
      dispatch(mapActions.changeMapCenter(payload));
    },
  });

  const zoomOffset = useSelector((state) => state.map.tileZoomOffset);
  const mapZoom = useSelector((state) => state.map.zoom);

  useEffect(() => {
    if (bbox != JSON.stringify(map.getBounds())) {
      const bbox_new = JSON.stringify(map.getBounds());
      const payload = {
        lat: map.getCenter().lat,
        lng: map.getCenter().lng,
        zoom: map.getZoom(),
        bbox: bbox_new,
      };
      dispatch(mapActions.changeMapCenter(payload));
      console.log("center", map.getCenter());
      console.log("zoomOffsest", zoomOffset);
      console.log("mapZoom", mapZoom);
      console.log("bbox", bbox);
    }

    const timer = setTimeout(() => {}, 2000);
    return () => clearTimeout(timer);
  }, []);

  return null;
};

const MapTileLayer = (props) => {
  const tileLayer = useSelector((state) => state.map.tileLayer);
  const tileZoomOffset = useSelector((state) => state.map.tileZoomOffset);

  let tileSize = 256 / 2 ** tileZoomOffset;
  if (tileZoomOffset == 0) {
    tileSize = 256;
  }

  let url = "";
  // Map from tileLayer to api url. (open map tiles)
  if (tileLayer in MapStyleDict) {
    url = MapStyleDict[tileLayer].url;
  } else {
    console.log("Error: " + tileLayer + " not found in MapStyleDict");
    url = MapStyleDict[MapConstants.DEFAULT_TILE_LAYER].url;
  }

  return (
    <TileLayer
      tileSize={tileSize}
      url={url}
      zoomOffset={Number(tileZoomOffset)}
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  );
};

const Map = (props) => {
  const tileLayer = useSelector((state) => state.map.tileLayer);
  let bounds = new L.LatLngBounds(
    new L.LatLng(-89.98155760646617, -180),
    new L.LatLng(89.99346179538875, 180)
  );

  let url = "";
  // Map from tileLayer to api url. (open map tiles)
  if (tileLayer in MapStyleDict) {
    url = MapStyleDict[tileLayer].url;
  } else {
    console.log("Error: " + tileLayer + " not found in MapStyleDict");
    url = MapStyleDict[DEFAULT_TILE_LAYER].url;
  }

  return (
    <div>
      <MapContainer
        center={props.center}
        zoom={props.zoom}
        scrollWheelZoom={false}
        minZoom={process.env.MIN_MAP_ZOOM}
        maxZoom={process.env.MAX_MAP_ZOOM}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        // 24 x 36
        attributionControl={false}
        style={props.style}
      >
        <MapTileLayer />
        <MapPins />
        <MapFunctionality />
      </MapContainer>
    </div>
  );
};

export default Map;
