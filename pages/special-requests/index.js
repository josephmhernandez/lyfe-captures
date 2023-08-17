import CreateMap from "../../components/createMap/CreateMap";
import SpecialRequestModal from "../../components/ui/SpecialRequestModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMapDescriptionText } from "../../components/createMap/mapFunctionality";
import { mapActions } from "../../store/map-slice";
import classes from "./specialRequests.module.css";

const CreateMapSpecialRequest = () => {
  const [openRequestModal, setOpenRequestModal] = useState(false);
  const [mapInformation, setMapInformation] = useState({}); // Map Information
  const defaultCenter = useSelector((state) => state.map.lngLat);
  const primaryText = useSelector((state) => state.map.textPrimary);
  const secondaryText = useSelector((state) => state.map.textSecondary);

  const dispatch = useDispatch();

  const handleSpecialRequest = async () => {
    // Display Modal with form.

    let productName = "(Special Req.) Personalized Map";

    // let lineItemId = await addToCartEcommerceJs(productName, 1);
    // let price = await getPriceEcommerceJs(productName);
    let lineItemId = "12345";
    let price = 100;

    let description = await getMapDescriptionText(
      primaryText,
      secondaryText,
      defaultCenter
    );

    dispatch(
      mapActions.addMapToCart({
        name: productName,
        unitPrice: price,
        lineItemId: lineItemId.line_items,
        description: description,
      })
    );

    // Popualte Map Information.
    // Number of pins on map. type of pins on map
    // Map Text Information.
    // Map Color Style.
    // Map Orientation.
    // Map Location

    // Get the map payload and se
    setOpenRequestModal(true);
  };

  return (
    <div>
      <div className={classes.centerText}>
        <h1>
          Design Your Map here and send us any special requests. A copy of the
          map will be emailed to us to check out so this gives us a starting
          place for designs! Use the "Make Special Request" button below to send
          us your request.
        </h1>
      </div>
      <SpecialRequestModal
        mapInformation={mapInformation}
        open={openRequestModal}
        onClose={() => {
          setOpenRequestModal(false);
        }}
      />
      <CreateMap
        buttonText="Make Special Request"
        buttonPushHandler={handleSpecialRequest}
      />
    </div>
  );
};

export default CreateMapSpecialRequest;
