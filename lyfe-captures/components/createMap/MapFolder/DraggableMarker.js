import { useRef, useMemo, Fragment } from "react";
import { Marker } from "react-leaflet";
import { useDispatch } from "react-redux";
import { mapActions } from "../../../store/map-slice";

const DraggableMarker = ({ position, uid, draggable, viewCenter }) => {
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

  return (
    <Fragment>
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      ></Marker>
    </Fragment>
  );
};

export default DraggableMarker;
