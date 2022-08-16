// import MapObj from './Map/Map';
// import Map from './MapFolder/Map';
import dynamic from "next/dynamic";
import classes from "./CreateMap.module.css";
import MapLazy from "./MapFolder/MapLazy";
import Col from '@paljs/ui/Col';
// import Accordion from "../ui/Accordion";
const DEFAULT_CENTER = [38.907132, -77.036546];
import {
  Accordion,
  AccordionItem,
  AccordionRefObject,
} from "@paljs/ui/Accordion";

const CreateMap = (props) => {
  const MapWithNoSSR = dynamic(() => import("./MapFolder/Map"), {
    ssr: false,
  });

//   const accordionRef = useRef<AccordionRefObject>(null);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <MapWithNoSSR
          className={classes.homeMap}
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
      </div>
      <div className={classes.accordion}>
        <Accordion>
          <AccordionItem uniqueKey={1} title="head 1">
            Hello 1Hello 1Hello 1Hello 1
          </AccordionItem>
          <AccordionItem uniqueKey={2} title="head 2">
            Hello 2Hello 2Hello 2Hello 2
          </AccordionItem>
          <AccordionItem uniqueKey={3} title="head 3">
            <p> AYOOOOO</p>
          </AccordionItem>
        </Accordion>
        {/* <Accordion title={"Location"}>
          <p>Placeholder: location</p>
        </Accordion>
        <Accordion title="Orientation">
          <p> yo hi</p>
        </Accordion>
        <Accordion title="Colors">
            <p>Placeholder: colors</p>
        </Accordion>
        <Accordion title="Pins">
            <p>Placeholder: pins</p>
        </Accordion>
        <Accordion title="Text">
            <p>Placeholder: text</p>
        </Accordion> */}
      </div>
    </div>
  );
};
export default CreateMap;
