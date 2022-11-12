import React from "react";
import classes from "./CheckoutItems.module.css";
const CheckoutItems = (props) => {
  const item = props.item;
  const total_price = props.item.line_total.formatted_with_symbol;
  const quantity = "todo x1";
  const description_map_s_bought = "description_map_s_bought";

  console.log('in checkoutitems'); 
  return (
    <>
      <div className={classes.itemCart}>
        <img src={item.image.url} />
        <div className={classes.productNameDescription}>
          <h3>{props.item.product_name}</h3>
          <p>{description_map_s_bought}</p>
        </div>
        <p>{quantity}</p>
        <p>{total_price}</p>
      </div>
    </>
  );
};

export default CheckoutItems;
