import React from "react";
import classes from "./CheckoutItems.module.css";
import { useSelector } from "react-redux";
import { ConstructionOutlined } from "@mui/icons-material";

const CheckoutItems = (props) => {
  const item = props.item;
  const total_price = `${props.item.line_total.formatted_with_symbol}`;
  const quantity = `x${props.item.quantity}`;
  const cart = useSelector((state) => state.map.cart);
  // const description_map_s_bought = ""; //lookUpDescriptions();

  function lookUpDescriptions() {
    // Return descirption + color + quantity
    let description_list = [];
    try {
      for (const item of cart) {
        let description = `${item.description} (${item.color}) x${item.quantity}`;
        description_list.push(description);
      }
    } catch (err) {
      console.log("err", err);
    }

    return description_list;
  }

  let description_map_s_bought = lookUpDescriptions();
  return (
    <>
      <div className={classes.itemCart}>
        <img src={item.image.url} />
        <div className={classes.productNameDescription}>
          <h3>{props.item.product_name}</h3>
          {description_map_s_bought.map((description, index) => {
            return <p key={index}>{description}</p>;
          })}
        </div>
        <div>
          <p className={classes.productNameDescription}>{quantity}</p>
        </div>
        <div>
          <p className={classes.productNameDescription}>{total_price}</p>
        </div>
      </div>
    </>
  );
};

export default CheckoutItems;
