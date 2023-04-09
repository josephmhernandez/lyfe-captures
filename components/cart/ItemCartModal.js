import React from "react";
import classes from "./CartModal.module.css";
import {
  MapStyleDict,
  DEFAULT_TILE_LAYER,
} from "../createMap/MapFolder/MapConstants";
import Image from "next/image";
import { Button, Icon } from "semantic-ui-react";

const ItemCartModal = (props) => {
  let total_price = props.item.quantity * props.item.unitPrice;
  let total_price_formatted = "$" + total_price.toFixed(2);

  let errorMessage = "";

  if (props.item.quantity < 1) {
    errorMessage = "Map will be deleted on Update";
  }

  if (props.item.quantity >= 100) {
    errorMessage =
      "If you you need to order more than " +
      process.env.CART_ITEM_MAX_QUANTITY +
      " email us at " +
      process.env.EMAIL_SUPPORT;
  }

  // Need to get the specific map style
  const tileLayer = props.item.tileLayer;
  let iconImagePath = "";
  try {
    iconImagePath = MapStyleDict[tileLayer].iconImg;
  } catch (e) {
    console.log("cannot find image icon for tileLayer: ", tileLayer);
    iconImagePath = MapStyleDict[DEFAULT_TILE_LAYER].iconImg;
  }

  return (
    <React.Fragment>
      <div className={classes.itemBlock}>
        {/* picture, description, qunatity Price*/}
        <div className={classes.itemBlockDescription}>
          {/* to do load this based on color available.  */}
          <Image height={100} width={100} size="small" src={iconImagePath} />
          <p>{props.item.description}</p>
        </div>
        <div className={classes.itemBlockQuantity}>
          <Button
            icon
            style={{
              "background-color": "var(--color-primary)",
              color: "white",
              "border-radius": "100px",
              "font-family": "var(--page-paragraph-font-family)",
              "font-size": "1rem",
              "font-weight": "400",
            }}
            onClick={() => props.handleAddQuantity(props.item)}
          >
            <Icon name="plus" />
          </Button>
          <p>{props.item.quantity}</p>

          <Button
            icon
            style={{
              "background-color": "var(--color-primary)",
              color: "white",
              "border-radius": "100px",
              "font-family": "var(--page-paragraph-font-family)",
              "font-size": "1rem",
              "font-weight": "400",
            }}
            onClick={() => props.handleSubQuantity(props.item)}
          >
            <Icon name="minus" />
          </Button>
          {/* {errorMessage && <p>{errorMessage}</p>} */}
        </div>
        <div className={classes.itemBlockPrice}>
          <p>{total_price_formatted}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemCartModal;
