import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { PropaneSharp } from "@mui/icons-material";

const Map = (props) => {
  return (
    <div>
      <MapContainer
        center={[40.8054, -74.0241]}
        zoom={14}
        scrollWheelZoom={false}
        // 24 x 36
        style={props.style}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[40.8054, -74.0241]} draggable={true} animate={true}>
          <Popup>Hey ! you found me</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
