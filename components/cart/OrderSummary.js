import { useEffect, useState } from "react";
import {
  getOrderSummaryEcommerceJs,
  fetchOrderSummary,
} from "./cartFunctionality";
import { Segment, Icon, Image } from "semantic-ui-react";
import OrderSummaryItem from "./OrderSummaryItem";
import classes from "./OrderSummary.module.css";
const OrderSummary = ({ items, customer, price, orderId }) => {
  let loadingCustomer = customer === {} ? true : false;
  let loadingPrice = price === {} ? true : false;
  let loadingOrderId = orderId === undefined ? true : false;
  console.log(price);
  let discount = price.discount
    ? price.discount.amount_saved.formatted_with_symbol
    : 0;
  let shipping = price.shipping ? price.shipping : 0;

  return (
    <div className={classes.orderContainer}>
      <Segment className={classes.orderSummaryContainer} raised>
        <div className={classes.headerOrderSummary}>
          <h1>Order Summary</h1>

          {loadingCustomer ? (
            <p>Loading...</p>
          ) : (
            <p>
              {`Thank you ${customer.first_name}! Your order confirmation is being
            sent to ${customer.email}`}
            </p>
          )}
          {loadingCustomer ? (
            <p>Loading Order Id...</p>
          ) : (
            <p>{`Your order reference id is ${customer.cust_ord_ref}`}</p>
          )}
          <p>{`We've also sent it to your email!`}</p>
        </div>
        {items.map((item) => {
          return <OrderSummaryItem item={item} key={item.map_id} />;
        })}
        {loadingPrice ? (
          <p>Loading...</p>
        ) : (
          <div className={classes.alignRight}>
            <h2>Tax: {price.tax}</h2>
            <h2>Shipping: {shipping}</h2>
            <h2>Discount: -{discount}</h2>
            <div className={classes.line}></div>
            <h1>Order Total: {price.total_price}</h1>
          </div>
        )}
      </Segment>
    </div>
  );
};

export default OrderSummary;
