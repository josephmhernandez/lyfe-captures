import { useRef, useMemo, Fragment } from "react";
import { Marker } from "react-leaflet";
import { useDispatch } from "react-redux";
import { mapActions } from "../../../store/map-slice";
import { PinListConstants } from "../StyleAccordion/PinListConstants";
const L = require("leaflet");

const DraggableMarker = ({ position, uid, draggable, style, size }) => {
  const dispatch = useDispatch();
  const markerRef = useRef(null);

  const eventHandlers = useMemo(() => ({
    dragend() {
      const marker = markerRef.current;
      if (marker != null) {
        const lngLat = marker.getLatLng();
        const payload = {
          id: uid,
          position: { lat: lngLat.lat, lng: lngLat.lng },
        };
        dispatch(mapActions.setPinLngLat(payload));
      }
    },
  }));

  // search pinListConstants for the image location that matches the style
  const obj = PinListConstants.find((o) => o.value === style);
  const imageLocation = obj.image;

  const myIcon = L.icon({
    iconUrl: imageLocation,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
  });

  return (
    <Fragment>
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={myIcon}
      ></Marker>
    </Fragment>
  );
};

export default DraggableMarker;
