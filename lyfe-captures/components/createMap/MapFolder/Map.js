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

import { useDispatch, useSelector } from "react-redux";
import MapPins from "./MapPins";
import { useEffect, useMemo } from "react";
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
    }

    const timer = setTimeout(() => {}, 2000);
    return () => clearTimeout(timer);
  }, []);

  return null;
};

const Map = (props) => {
  let bounds = new L.LatLngBounds(new L.LatLng(-89.98155760646617, -180), new L.LatLng(89.99346179538875, 180));
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
        style={props.style}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapPins />
        <MapFunctionality />
      </MapContainer>
    </div>
  );
};

export default Map;
