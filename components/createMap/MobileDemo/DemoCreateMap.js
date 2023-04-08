import { useSelector } from "react-redux";
import { MapConstants, MOBILE_ZOOM_OFFSET } from "../MapFolder/MapConstants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import CardOverlay from "../CardOverlay";
import classes from "./DemoCreateMap.module.css";

import DemoAccordion from "./AccordionDemo/DemoAccordion";
import Search from "./AccordionDemo/Search";
import { Button } from "semantic-ui-react";
import { mapActions } from "../../../store/map-slice";

import {
  getPriceEcommerceJs,
  addToCartEcommerceJs,
} from "../../cart/cartFunctionality";
import { getMapDescriptionText } from "../mapFunctionality";
import DemoEnlargedTextDisplay from "./DemoEnlargedTextDisplay";
import { useRouter } from "next/router";
const DemoCreateMap = () => {
  const router = useRouter();
  const [hasText, setHasText] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultCenter = useSelector((state) => state.map.lngLat);
  const zoom = useSelector((state) => state.map.zoom);
  const primaryText = useSelector((state) => state.map.textPrimary);
  const secondaryText = useSelector((state) => state.map.textSecondary);
  const addLngLat = useSelector((state) => state.map.addLngLat);
  const tileLayer = useSelector((state) => state.map.tileLayer);
  const orientation = useSelector((state) => state.map.orientation);

  // Map Size.
  const optionObj = MapConstants.poster_size["_24_36_demo"];
  const height = optionObj.portrait.map_height * optionObj.poster_multiplier;
  const width = optionObj.portrait.map_width * optionObj.poster_multiplier;

  const zoomOffset = useSelector((state) => state.map.tileZoomOffset);
  const mapZoom = useSelector((state) => state.map.zoom);
  const bbox = useSelector((state) => state.map.bbox);

  const [mapStyle, setMapStyle] = useState({
    width: width.toString() + "px",
    height: height.toString() + "px",
    zIndex: -1,
  });

  const dispatch = useDispatch();
  if (zoomOffset !== MOBILE_ZOOM_OFFSET) {
    dispatch(mapActions.setZoomOffset(MOBILE_ZOOM_OFFSET));
  }

  useEffect(() => {
    if (orientation === "portrait") {
      // Map Size.
      const optionObj = MapConstants.poster_size["_24_36_demo"];
      const height =
        optionObj.portrait.map_height * optionObj.poster_multiplier;
      const width = optionObj.portrait.map_width * optionObj.poster_multiplier;
      setMapStyle({
        width: width.toString() + "px",
        height: height.toString() + "px",
      });
      if (
        !addLngLat &&
        primaryText.length === 0 &&
        secondaryText.length === 0
      ) {
        setHasText(false);
        setMapStyle({
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
        });
      } else {
        setHasText(true);
      }
    } else {
      //Landscape Calculate Map Size.
      const optionObj = MapConstants.poster_size["_24_36_demo"];
      const height =
        optionObj.landscape.map_height * optionObj.poster_multiplier;
      const width = optionObj.landscape.map_width * optionObj.poster_multiplier;

      setMapStyle({
        width: width.toString() + "px",
        height: height.toString() + "px",
      });

      if (
        !addLngLat &&
        primaryText.length === 0 &&
        secondaryText.length === 0
      ) {
        setHasText(false);
        setMapStyle({
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
        });
      } else {
        setHasText(true);
      }
    }
  }, [
    orientation,
    addLngLat,
    primaryText,
    secondaryText,
    tileLayer,
    defaultCenter,
  ]);

  const handleBuyNow = async (event) => {
    setLoading(true);

    let productName = "Personalized Map";
    event.preventDefault();

    let lineItemId = await addToCartEcommerceJs(productName, 1);
    let price = await getPriceEcommerceJs(productName);

    // Make sure we are working with mobile.
    dispatch(mapActions.setSizeOption("_24_36_demo"));

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
    router.push("/cart");
    setLoading(false);
  };

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

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  const MapWithNoSSR = dynamic(import("../MapFolder/Map"), {
    ssr: false,
    loading: () => (
      <div>
        <p>loading map...</p>
      </div>
    ),
  });
  return (
    <div>
      <div className={classes.centerObj}>
        <Search />
      </div>
      {/* CardOverlay is the only thing that isn't a new compnonent in demo */}
      <div className={classes.wrapper}>
        <CardOverlay SIZE_OPTION={"_24_36_demo"}>
          <MapWithNoSSR
            center={defaultCenter}
            zoom={zoom}
            style={mapStyle}
          ></MapWithNoSSR>
        </CardOverlay>
      </div>
      <div className={classes.centerObj}>
        {/* Text Block Display Example on map  */}
        {hasText && <p>Text Block Enlarged:</p>}
        {hasText && <DemoEnlargedTextDisplay />}
      </div>
      <div className={classes.centerObj}>
        <DemoAccordion />

        <Button
          style={{
            "background-color": "#23d160",
            color: "white",
            "border-radius": "100px",
            "font-family": "var(--page-heading-font-family)",
            "font-size": "var(--page-paragraph-font-size)",
            "font-weight": "400",
          }}
          onClick={handleBuyNow}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default DemoCreateMap;
