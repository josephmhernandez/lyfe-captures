import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { PropaneSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import MapPins from "./MapPins";

const Map = (props) => {
  // const { center, zoom } = props;
  // const [mapCenter, setCenter] = useState(props.center);

  // const pins = useSelector((state) => state.map.pinList);

  return (
    <div>
      <MapContainer
        center={props.center}
        zoom={12}
        scrollWheelZoom={false}
        // 24 x 36
        style={props.style}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
       <MapPins/> 
      </MapContainer>
    </div>
  );
};

export default Map;