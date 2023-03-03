import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./orderComplete.module.css";
import Image from "next/image";
import OrderSummary from "../../components/cart/OrderSummary";
import { getOrderSummaryEcommerceJs } from "../../components/cart/cartFunctionality";
import SampleReivew from "../../components/product/SampleReview";

const OrderCompleteId = () => {
  const router = useRouter();
  const [email, setEmail] = useState("loading email...");
  const { slug } = router.query;

  const cart_id = slug ? slug[0] : undefined;
  const order_id = slug ? slug[1] : undefined;
  const [customer, setCustomer] = useState({});
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState({});

  const url_get_order_summary = "/api/commerce/get_order_summary";
  useEffect(() => {
    const params = {
      order_id: order_id,
    };
    fetch(url_get_order_summary, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => {
        res.json().then((data) => {
          if (data.customer) {
            setEmail(data.customer.email);
            setItems(data.pretty_items);
            setCustomer(data.customer);
            setPrice(data.price);
          }
        });
      })
      .catch((err) => console.log(err));
  }, [order_id]);

  return (
    <div>
      <div className={classes.spacing} />
      <div className={classes.orderComplete}>
        <h1>We are on our way!</h1>
        <div className={classes.grid}>
          <ul>
            <li>
              <p>Order confirmation emailed to {email}</p>
            </li>
            <li>
              <p>
                {`Your map is being created as we speak! As soon as we ship it
                we'll send you a tracking number for your package`}
              </p>
            </li>
            <li>
              <p>Your map will be shipped within the next two days!</p>
            </li>
            <li>
              <p>Reach out if you have any questions or suggestions!</p>
            </li>
            <li>
              <p>Order summary available below</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.spacing} />
      {/* <div className={classes.sampleReview}>
        <SampleReivew />
      </div> */}
      <div className={classes.sampleReview}>
        <OrderSummary
          items={items}
          customer={customer}
          price={price}
          orderId={order_id}
        />
      </div>
      <div className={classes.spacing} />
    </div>
  );
};

export default OrderCompleteId;
