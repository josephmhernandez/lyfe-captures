import { Card, Button } from "semantic-ui-react";
import {
  getAccordionButtonStyle,
  getAccordionActionButtonStyle,
} from "../../constants/UiConstants";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getPublicImage } from "../../utils/awsFunctions";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { mapActions } from "../../store/map-slice";
import {
  GALLERY_IMG_LIST,
  DEFAULT_MAP_PAYLOAD,
} from "../../constants/GalleryConstants";
import _ from "lodash";
import { getMapDescriptionText } from "../createMap/mapFunctionality";
import {
  addToCartEcommerceJs,
  getPriceEcommerceJs,
} from "../cart/cartFunctionality";
import { toast } from "react-toastify";

import classes from "./GalleryCard.module.css";

const GalleryCard = (props) => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const router = useRouter();
  const dispatch = useDispatch();
  const [url, setUrl] = useState([]);

  useEffect(() => {
    const getGalleryImages = async () => {
      const file = await getPublicImage(props.src);
      setUrl(file);
    };
    getGalleryImages();
  });

  const handleCustomize = () => {
    // Use the id to get the map_payload then call dispatch loadMap to set the state store correctly
    // get the map_payload in Gallery Constants

    const mapObj = _.find(GALLERY_IMG_LIST, { id: props.id });
    const mapPayload = _.get(mapObj, "map_payload", DEFAULT_MAP_PAYLOAD);

    dispatch(mapActions.loadMap(mapPayload));
    router.push("/maps");
  };

  const handleBuyNow = async () => {
    toast.info("Adding to cart...");

    const mapObj = _.find(GALLERY_IMG_LIST, { id: props.id });
    let mapPayload = _.get(mapObj, "map_payload", undefined);
    mapPayload.id = props.id;

    if (mapPayload) {
      let productName = "Personalized Map";

      let lineItemId = await addToCartEcommerceJs(productName, 1);
      let price = await getPriceEcommerceJs(productName);

      let description = await getMapDescriptionText(
        _.get(mapPayload, "textPrimary", ""),
        _.get(mapPayload, "textSecondary", ""),
        _.get(mapPayload, "center", "")
      );

      dispatch(
        mapActions.addMapToCartFromGallery({
          map_payload: mapPayload,
          ecommerce_props: {
            name: productName,
            unitPrice: price,
            lineItemId: lineItemId.line_items,
            description: description,
          },
        })
      );
      router.push("/cart");
    } else {
      toast.error("Error adding map to cart. Please email us directly");
    }
  };

  return (
    <Card raised>
      <Image src={url} wrapped ui={false} width={300} height={300} />
      <Card.Content textAlign="left">
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className={classes.buttonContent}>
          <Button
            style={getAccordionButtonStyle(props.isMobile)}
            onClick={handleCustomize}
          >
            Customize
          </Button>
          <Button
            style={getAccordionActionButtonStyle(props.isMobile)}
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
export default GalleryCard;
