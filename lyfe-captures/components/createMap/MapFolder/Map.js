import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { PropaneSharp } from "@mui/icons-material";

const Map = (props) => {
  // const { center, zoom } = props;
  const [mapCenter, setCenter] = useState(props.center);
  const pinList = useSelector((state) => state.map.pinList);


  // const getMapViewCenter = () => {
  //   const map = useMap();
  //   const center = map.getCenter();

  //   return center;
  // }

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
        {pinList.map((pin) => (
            <Marker
              key={pin.id}
              position={props.center}
              draggable={true}
              animate={true}
            ></Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
