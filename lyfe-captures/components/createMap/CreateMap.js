import { Card, Paper } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardOverlay from "./CardOverlay";
import classes from "./CreateMap.module.css";
const DEFAULT_CENTER = [38.907132, -77.036546];
import CustomizedAccordions from "./StyleAccordion/CustomizedAccordion";
const SIZE_OPTION = "_24_36";
import { MapConstants } from "./MapFolder/MapConstants";
const CreateMap = (props) => {
  const orientation = useSelector((state) => state.map.orientation);
  const optionObj = MapConstants.poster_size[SIZE_OPTION]; 
  const height = optionObj.portrait.map_height * optionObj.poster_multiplier;
  const width = optionObj.portrait.map_width * optionObj.poster_multiplier;
  const [mapStyle, setMapStyle] = useState({
    width: width.toString() + "px",
    height: height.toString() + "px",
  });

  useEffect(() => {
    if (orientation === "portrait") {
      // Map Size.

      const optionObj = MapConstants.poster_size[SIZE_OPTION]; 
      const height = optionObj.portrait.map_height * optionObj.poster_multiplier;
      const width = optionObj.portrait.map_width * optionObj.poster_multiplier;
      setMapStyle({
        width: width.toString() + "px",
        height: height.toString() + "px",
      });
    } else {
      //Landscape Calculate Map Size. 
      const optionObj = MapConstants.poster_size[SIZE_OPTION]; 
      const height = optionObj.landscape.map_height * optionObj.poster_multiplier;
      const width = optionObj.landscape.map_width * optionObj.poster_multiplier;
      setMapStyle({
        width: width.toString() + "px",
        height: height.toString() + "px",
      });
    }
  }, [orientation]);

  const MapWithNoSSR = dynamic(() => import("./MapFolder/Map"), {
    ssr: false,
  });

  return (
    <div className={classes.container}>
      <Paper elevation={24} className={classes.wrapper}>
        <CardOverlay>
          <MapWithNoSSR center={DEFAULT_CENTER} zoom={12} style={mapStyle}>
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
