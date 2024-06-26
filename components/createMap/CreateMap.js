import { Paper } from "@mui/material";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardOverlay from "./CardOverlay";
import classes from "./CreateMap.module.css";
import CustomizedAccordions from "./StyleAccordion/CustomizedAccordion";
import {
  MapConstants,
  SIZE_OPTION,
  MATERIAL_OPTION,
  WEB_ZOOM_OFFSET,
} from "./MapFolder/MapConstants";
import { BTN_STYLE } from "../../constants/UiConstants";
import { mapActions } from "../../store/map-slice";
import { AddToCartButton, BuyNowButton } from "../ui/CustomButtons";
import { useRouter } from "next/router";
import Commerce from "@chec/commerce.js";
import {
  getPriceEcommerceJs,
  addToCartEcommerceJs,
} from "../cart/cartFunctionality";
import { getMapDescriptionText } from "./mapFunctionality";
import * as gtag from "../../lib/gtag";
import * as pintag from "../../lib/pintag";
import { Button } from "flowbite-react";

const commerce = new Commerce(process.env.CHEC_PK);

const CreateMap = (props) => {
  const orientation = useSelector((state) => state.map.orientation);
  const defaultCenter = useSelector((state) => state.map.lngLat);
  const primaryText = useSelector((state) => state.map.textPrimary);
  const secondaryText = useSelector((state) => state.map.textSecondary);
  const addLngLat = useSelector((state) => state.map.addLngLat);
  const zoom = useSelector((state) => state.map.zoom);
  const router = useRouter();
  const tileLayer = useSelector((state) => state.map.tileLayer);
  const [loading, setLoading] = useState(false);
  const sizeOption = SIZE_OPTION;

  const [activeIndex, setActiveIndex] = useState(0);

  const optionObj = MapConstants.poster_size[SIZE_OPTION];
  const height = optionObj.portrait.map_height * optionObj.poster_multiplier;
  const width = optionObj.portrait.map_width * optionObj.poster_multiplier;
  const [mapStyle, setMapStyle] = useState({
    width: width.toString() + "px",
    height: height.toString() + "px",
    zIndex: -1,
  });

  const zoomOffset = useSelector((state) => state.map.tileZoomOffset);
  const mapZoom = useSelector((state) => state.map.zoom);
  const bbox = useSelector((state) => state.map.bbox);

  const dispatch = useDispatch();
  if (zoomOffset != WEB_ZOOM_OFFSET) {
    dispatch(mapActions.setZoomOffset(WEB_ZOOM_OFFSET));
  }

  useEffect(() => {
    let currMapStyle = {};
    if (orientation === "portrait") {
      // Map Size.
      const optionObj = MapConstants.poster_size[SIZE_OPTION];
      const height =
        optionObj.portrait.map_height * optionObj.poster_multiplier;
      const width = optionObj.portrait.map_width * optionObj.poster_multiplier;

      currMapStyle = {
        ...currMapStyle,
        width: width.toString() + "px",
        height: height.toString() + "px",
      };

      if (
        !addLngLat &&
        primaryText.length === 0 &&
        secondaryText.length === 0
      ) {
        currMapStyle = {
          ...currMapStyle,
          height:
            (
              (optionObj.full_height - optionObj.margin) *
              optionObj.poster_multiplier
            ).toString() + "px",
          width:
            (
              (optionObj.full_width - optionObj.margin) *
              optionObj.poster_multiplier
            ).toString() + "px",
        };
      }
    } else {
      //Landscape Calculate Map Size.
      const optionObj = MapConstants.poster_size[SIZE_OPTION];
      const height =
        optionObj.landscape.map_height * optionObj.poster_multiplier;
      const width = optionObj.landscape.map_width * optionObj.poster_multiplier;

      currMapStyle = {
        ...currMapStyle,
        width: width.toString() + "px",
        height: height.toString() + "px",
      };

      if (
        !addLngLat &&
        primaryText.length === 0 &&
        secondaryText.length === 0
      ) {
        currMapStyle = {
          ...currMapStyle,
          height:
            (
              (optionObj.full_width - optionObj.margin) *
              optionObj.poster_multiplier
            ).toString() + "px",
          width:
            (
              (optionObj.full_height - optionObj.margin) *
              optionObj.poster_multiplier
            ).toString() + "px",
        };
      }
    }

    if (tileLayer === "img-bg-black") {
      currMapStyle = {
        ...currMapStyle,
        opacity: 0.6,
      };
    }

    setMapStyle(currMapStyle);
  }, [
    orientation,
    defaultCenter,
    addLngLat,
    primaryText,
    secondaryText,
    tileLayer,
  ]);

  const handleAddToCart = async (event) => {
    setLoading(true);
    let productName = "Personalized Map";

    event.preventDefault();

    let lineItemId = await addToCartEcommerceJs(productName, 1);
    let price = await getPriceEcommerceJs(productName);

    dispatch(mapActions.setSizeOption(SIZE_OPTION));

    let variantInfo = {
      Size: MapConstants.poster_size[SIZE_OPTION].variant_size,
      Material: MATERIAL_OPTION,
    };

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

    // Send to google analytics
    gtag.event({
      action: "AddToCart",
      category: "checkout",
      label: "add-map-to-cart",
      value: productName,
    });

    pintag.pinTagEvent("addtocart", {
      value: price,
      order_quantity: 1,
      currency: "USD",
    });

    router.push("/cart");
    setLoading(false);
  };

  const MapWithNoSSR = dynamic(import("./MapFolder/Map"), {
    ssr: false,
    loading: () => (
      <div>
        <p>loading map...</p>
      </div>
    ),
  });

  if (loading) {
    return <p> loading... </p>;
  }
  // const handleZoomOffsetIncrease = () => {
  //   console.log("zoomOffsetIncrease");
  //   console.log("new zoomOffset", zoomOffset + 1);
  //   dispatch(mapActions.setZoomOffset(zoomOffset + 1));
  // };

  // const handleZoomOffsetDecrease = () => {
  //   console.log("zoomOffsetDecrease");
  //   console.log("new zoomOffset", zoomOffset - 1);
  //   dispatch(mapActions.setZoomOffset(zoomOffset - 1));
  // };

  // Used for Special Requests
  const BUTTON_TEXT = props.buttonText ? props.buttonText : "Add to Cart";
  const BUTTON_PUSH_HANDLER = props.buttonPushHandler
    ? props.buttonPushHandler
    : handleAddToCart;

  return (
    <Fragment>
      {/* <div className={classes.noteContainer}>
        <p>
          <span style={{ fontWeight: "bold" }}>Please Note:</span> Sometimes
          when using Google Chrome there are white grid lines that appear on the
          map. Be assured, those lines will not show up on your masterpiece!
        </p>
      </div> */}
      <div className={classes.container}>
        <Paper elevation={24} className={classes.wrapper}>
          <CardOverlay setActiveIndex={setActiveIndex} SIZE_OPTION={"_24_36"}>
            <MapWithNoSSR center={defaultCenter} zoom={zoom} style={mapStyle}>
              {/* {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={defaultCenter} draggable={true} animate={true}>
                  <Popup>Hey ! you found me</Popup>
                </Marker>
              </>
            )} */}
            </MapWithNoSSR>
          </CardOverlay>
        </Paper>
        <Paper elevation={24} className={classes.accordionBox}>
          <CustomizedAccordions
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <Button
            size={"xl"}
            gradientDuoTone="purpleToBlue"
            onClick={props.digitalPrintReq}
            className="m-[.5vh]"
          >
            <span>
              Digital Print{""}
              <span className={classes.newTag}>{"Free"}</span>
            </span>
          </Button>
          <div className={classes.actionBtns}>
            <Button
              size={"xl"}
              gradientDuoTone="purpleToBlue"
              onClick={BUTTON_PUSH_HANDLER}
              className="m-[.5vh]"
            >
              {`${BUTTON_TEXT}`}
            </Button>

            <Button
              size={"xl"}
              gradientMonochrome="success"
              onClick={handleAddToCart}
              className="m-[.5vh]"
            >
              Buy Now
            </Button>
            {/* <BuyNowButton onClick={handleAddToCart}>Buy Now</BuyNowButton> */}
          </div>
        </Paper>
      </div>
    </Fragment>
  );
};

export default CreateMap;
