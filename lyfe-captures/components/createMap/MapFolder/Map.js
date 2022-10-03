import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { PropaneSharp } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import MapPins from "./MapPins";
import { useMemo } from "react";
import { mapActions } from "../../../store/map-slice";


const MapFunctionality= () => {
  const dispatch = useDispatch(); 

  const map = useMapEvents({
    moveend: () => {
      const payload = {
        lat: map.getCenter().lat,
        lng: map.getCenter().lng,
        zoom: map.getZoom(),
      };
      dispatch(mapActions.changeMapCenter(payload)); 
    }
  })

  return null; 
}


const Map = (props) => {

  return (
    <div>
      <MapContainer
        center={props.center}
        zoom={props.zoom}
        scrollWheelZoom={false}
        // 24 x 36
        style={props.style}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
       <MapPins/> 
       <MapFunctionality/>
      </MapContainer>
    </div>
  );
};

export default Map;