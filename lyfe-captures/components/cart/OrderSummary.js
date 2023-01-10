import { useEffect, useState } from "react";
import {
  getOrderSummaryEcommerceJs,
  fetchOrderSummary,
} from "./cartFunctionality";
import { Segment, Icon, Image } from "semantic-ui-react";
import OrderSummaryItem from "./OrderSummaryItem";
import classes from "./OrderSummary.module.css";
const OrderSummary = ({ items, customer, price }) => {
  let loadingCustomer = customer === {} ? true : false;
  let loadingPrice = price === {} ? true : false;
  return (
    <div className={classes.orderContainer}>
      <h1>Order Summary</h1>

      <Segment className={classes.orderContainer} raised>
        {loadingCustomer ? (
          <p>Loading...</p>
        ) : (
          <p>
            Thank you {customer.first_name}! Your order confirmation is being
            sent to {customer.email}{" "}
          </p>
        )}
      </Segment>
      <Segment className={classes.orderSummaryContainer} raised>
        {items.map((item) => {
          return <OrderSummaryItem item={item} key={item.map_id} />;
        })}
        {loadingPrice ? (
          <p>Loading...</p>
        ) : (
          <div className={classes.alignRight}>
            <h2>Tax: {price.tax}</h2>
            <h2>Shipping: {price.shipping}</h2>
            <div className={classes.line}></div>
            <h1>Order Total: {price.total_price}</h1>
          </div>
        )}
      </Segment>
    </div>
  );
};

export default OrderSummary;
