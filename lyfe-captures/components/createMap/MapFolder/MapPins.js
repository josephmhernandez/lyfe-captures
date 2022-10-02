import { ifWidthInBreakpoint } from "@paljs/ui";
import React, { Fragment, memo, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import DraggableMarker from "./DraggableMarker";

const MapPins = () => {
  
  const pins = useSelector((state) => state.map.pinList);
  const map = useMap();

  // const pins = useMemo(() => {
 
  //    () => {
  //       useSelector((state) => state.map.pinList);
  //    }, []
  // ); 

  // const pins = useMemo(
  //   () => useSelector((state) => state.map.pinList),
  //   []
  // ); 
  return (
    <Fragment>
      {pins.map((pin) => {
        const viewCenter = map.getCenter();         

        // console.log("pin", JSON.stringify(pin));
        // const posObject = {lat: pin.position[0], lng: pin.position[1]};
        console.log('viewCenter', JSON.stringify(viewCenter));
        console.log('act position', JSON.stringify(pin.position));
        return (
          <DraggableMarker
            key={pin.id}
            uid={pin.id}
            viewCenter={viewCenter}
            position={pin.position}
            draggable={true}
            animate={true}
          ></DraggableMarker>
        );
      })}
    </Fragment>
  );
};

export default MapPins;
