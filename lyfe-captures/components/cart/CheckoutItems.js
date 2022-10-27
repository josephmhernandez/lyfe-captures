import { ClassNames } from "@emotion/react";
import React from "react";
// import { Item, Header } from 'semantic-ui-react';
import classes from "./CheckoutItems.module.css";
const CheckoutItems = (props) => {
  console.log(props, "props from checkout container");

  console.log(props.item);
  const item = props.item;
  console.log(item.image.url);
  const total_price = props.item.line_total.formatted_with_symbol;
  const quantity = "todo x1";
  const identify_map = "todo White";

  return (
    <>
      <div className={classes.itemCart}>
        <img src={item.image.url} />
        <div className={classes.productNameDescription}>
          <h3>{props.item.product_name}</h3>
          <p>{identify_map}</p>
        </div>
        <p>{quantity}</p>
        <p>{total_price}</p>
      </div>
    </>
  );
};

export default CheckoutItems;
