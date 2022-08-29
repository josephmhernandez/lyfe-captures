import { Card, Paper } from "@mui/material";
import dynamic from "next/dynamic";
import CardOverlay from "./CardOverlay";
import classes from "./CreateMap.module.css";
const DEFAULT_CENTER = [38.907132, -77.036546];
import CustomizedAccordions from "./StyleAccordion/CustomizedAccordion";

const CreateMap = (props) => {
  const MapWithNoSSR = dynamic(() => import("./MapFolder/Map"), {
    ssr: false,
  });

  return (
    <div className={classes.container}>
      <Paper elevation={24} className={classes.wrapper}>
        <CardOverlay>
          <MapWithNoSSR
            center={DEFAULT_CENTER}
            zoom={12}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </MapWithNoSSR>
        </CardOverlay>
      </Paper>
      <Paper elevation={24} className={classes.accordionBox}>
        <CustomizedAccordions />
      </Paper>
    </div>
  );
};
export default CreateMap;
