
import React, { Fragment } from "react";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import DraggableMarker from "./DraggableMarker";

const MapPins = () => {
  
  const pins = useSelector((state) => state.map.pinList);
  const map = useMap();

  return (
    <Fragment>
      {pins.map((pin) => {
        const viewCenter = map.getCenter();         
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
