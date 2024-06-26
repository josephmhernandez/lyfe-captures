import CreateMap from "../../components/createMap/CreateMap";
import SpecialRequestModal from "../../components/ui/SpecialRequestModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMapDescriptionText } from "../../components/createMap/mapFunctionality";
import { mapActions } from "../../store/map-slice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  INTERNAL_SERVER_STATUS_CODE,
  SUCCESS_STATUS_CODE,
} from "../../constants/ApiConstants";
import { useMediaQuery } from "@mantine/hooks";
import { MEDIA_QUERY_MOBILE } from "../../constants/UiConstants";
import DemoCreateMap from "../../components/createMap/MobileDemo/DemoCreateMap";
import SpecialRequestInstructions from "../../components/ui/SpecialRequestInstructions";
import {
  MAP_SPECIAL_REQUEST_PRODUCT_NAME,
  MAP_DIGITAL_PRINT_PRODUCT_NAME,
} from "../../components/cart/ProductConstants";
import DigitalPrintModal from "../../components/ui/DigitalPrintModal/DigitalPrintModal";
const MapPage = () => {
  const isMobile = useMediaQuery(MEDIA_QUERY_MOBILE);
  const [openRequestModal, setOpenRequestModal] = useState(false);
  const [openDigitalPrintModal, setOpenDigitalPrintModal] = useState(false);
  const [mapInformation, setMapInformation] = useState({}); // Map Information
  const defaultCenter = useSelector((state) => state.map.lngLat);
  const primaryText = useSelector((state) => state.map.textPrimary);
  const secondaryText = useSelector((state) => state.map.textSecondary);

  const dispatch = useDispatch();

  const handleSpecialRequest = async () => {
    // Display Modal with form.
    let productName = MAP_SPECIAL_REQUEST_PRODUCT_NAME;

    let description = await getMapDescriptionText(
      primaryText,
      secondaryText,
      defaultCenter
    );

    dispatch(
      mapActions.addMapToSpecialRequest({
        name: productName,
        description: description,
      })
    );

    setOpenRequestModal(true);
  };

  const handleDigitalPrint = async () => {
    let productName = MAP_DIGITAL_PRINT_PRODUCT_NAME;
    let description = await getMapDescriptionText(
      primaryText,
      secondaryText,
      defaultCenter
    );

    dispatch(
      mapActions.addMapToSpecialRequest({
        name: productName,
        description: description,
      })
    );
    setOpenDigitalPrintModal(true);
  };

  return (
    <div>
      <SpecialRequestInstructions />

      <SpecialRequestModal
        mapInformation={mapInformation}
        open={openRequestModal}
        onClose={(resp) => {
          setOpenRequestModal(false);
          if (resp.status === SUCCESS_STATUS_CODE) {
            toast.success("Success! We'll get back to you within 24 hours");
          }
          console.log("resp", resp);
          if (resp.status === INTERNAL_SERVER_STATUS_CODE) {
            toast.error(
              `There was an error sending your request. Please email ${process.env.EMAIL_SUPPORT}`
            );
          }
        }}
      />
      <DigitalPrintModal
        mapInformation={mapInformation}
        open={openDigitalPrintModal}
        onClose={(resp) => {
          setOpenDigitalPrintModal(false);
          if (resp.status === SUCCESS_STATUS_CODE) {
            toast.success(
              "We'll email you a link to your map. It takes about a minute to generate"
            );
          }
          console.log("resp", resp);
          if (resp.status === INTERNAL_SERVER_STATUS_CODE) {
            toast.error(
              `There was an error sending your request. Please email ${process.env.EMAIL_SUPPORT}`
            );
          }
        }}
      />
      {/* Create Map Component */}
      {isMobile ? (
        <DemoCreateMap
          specialReqPushHandler={handleSpecialRequest}
          digitalPrintReq={handleDigitalPrint}
        />
      ) : (
        <CreateMap
          buttonText="Send Tailored Request"
          buttonPushHandler={handleSpecialRequest}
          digitalPrintReq={handleDigitalPrint}
        />
      )}
    </div>
  );
};

export default MapPage;
