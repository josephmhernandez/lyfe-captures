import { ConstructionOutlined, MarkEmailReadTwoTone } from "@mui/icons-material";
import { useState, useRef, useMemo, Fragment } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useDispatch } from "react-redux";
import { mapActions } from "../../../store/map-slice";

const DraggableMarker = ({position, uid, draggable, viewCenter}) => {
  // const [position, setPosition] = useState(props.position);
  const dispatch = useDispatch();
  const markerRef = useRef(null); 

  // const position = useState(position);



  // Use Memo needs to have key passed into it. Key is coming up undefined. here. 


  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        console.log('in dragend');
        if (marker != null) {
          // setPosition(marker.getLatLng());
          // Set dipatch action to set pin lng lat
          // console.log('new position ' + marker.getLatLng());
          const lngLat = marker.getLatLng();
          const payload = {
            id: uid,
            position: {lat: lngLat.lat, lng: lngLat.lng},
          };


          // console.log('disatch payload');
          dispatch(mapActions.setPinLngLat(payload));
        }
      },
    })
  );

  return (
    <Fragment>
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      >
        {/* <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup> */}
      </Marker>
    </Fragment>
  );
};

export default DraggableMarker;
