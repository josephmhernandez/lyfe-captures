import React, { useState, useEffect } from "react";
import classes from "./CartModal.module.css";
import { ColorIconPathMap } from "../createMap/MapFolder/MapConstants";
import Commerce from "@chec/commerce.js";
import { getPrice } from "./cartFunctionality";
const ItemCartModal = (props) => {
  let total_price = props.item.quantity * props.item.unitPrice;
  let total_price_formatted = "$ " + total_price.toFixed(2);

  return (
    <React.Fragment>
      <div className={classes.itemBlock}>
        {/* picture, description, qunatity Price*/}
        <div className={classes.itemBlockDescription}>
          {/* to do load this based on color available.  */}
          <img src={ColorIconPathMap["white-black"]} />
          <p>{props.item.description}</p>
        </div>
        <div className={classes.itemBlockQuantity}>
          <button
            onClick={() => {
              props.handleAddQuantity(props.item);
            }}
            className="positive ui button"
          >
            +
          </button>
          <p>{props.item.quantity}</p>
          <button
            onClick={() => props.handleSubQuantity(props.item)}
            className="negative ui button"
          >
            -
          </button>
        </div>

        <p>{total_price_formatted}</p>
      </div>
    </React.Fragment>
  );
};

export default ItemCartModal;
