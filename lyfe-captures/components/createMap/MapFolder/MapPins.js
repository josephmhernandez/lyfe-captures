import React, { Fragment } from "react";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import DraggableMarker from "./DraggableMarker";

const MapPins = () => {
  const pins = useSelector((state) => state.map.pinList);
  const map = useMap();

  if (pins.length > 0) {
    console.log(pins[0].position);
  }

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
            size={pin.size}
            style={pin.style}
            draggable={true}
            animate={true}
          ></DraggableMarker>
        );
      })}
    </Fragment>
  );
};

export default MapPins;
