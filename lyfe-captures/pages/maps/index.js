import Layout from "../../components/layout/Layout";
import CreateMap from "../../components/createMap/CreateMap";
import classes from "./index.module.css";
// import Map from "../../components/createMap/MapFolder/Map";


const mapCenter = {lat: 38.9072, lng: -77.0369}
const mapDimension = {width: 700, height: 700}

const MapPage = () => {
  return (
    <div >
      <CreateMap/>
      {/* <CreateMap
        decimalLatitude={mapCenter.lat}
        decimalLongitude={mapCenter.lng}
        width={mapDimension.width}
        height={mapDimension.height}
      /> */}
    </div>
  );
};
export default MapPage;
