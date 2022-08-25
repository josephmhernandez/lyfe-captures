// import MapObj from './Map/Map';
// import Map from './MapFolder/Map';
import dynamic from "next/dynamic";
import classes from "./CreateMap.module.css";
// import MapLazy from "./MapFolder/MapLazy";
// import Col from "@paljs/ui/Col";
import { Layout } from "@paljs/ui/Layout";

// import Accordion from "../ui/Accordion";
const DEFAULT_CENTER = [38.907132, -77.036546];
import {
  Accordion,
  AccordionItem,
  AccordionRefObject,
} from "@paljs/ui/Accordion";
import CustomizedAccordions from "./StyleAccordion/CustomizedAccordion";

const CreateMap = (props) => {
  const MapWithNoSSR = dynamic(() => import("./MapFolder/Map"), {
    ssr: false,
  });

  //   const accordionRef = useRef<AccordionRefObject>(null);

  /*



CREATE STYLE FOR ACCORDION : 
https://paljs.com/ui/components/accordion/

^ CREATE A STYLE OBJECT FROM THIS WEBPAGE AND THEN ADD IT TO THE 
ACCORDION COMPONENT 


*/


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
      <div className={classes.accordionBox}>
            <CustomizedAccordions/>
      </div>

    </div>
  );
};
export default CreateMap;