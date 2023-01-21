import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./orderComplete.module.css";
import Image from "next/image";
import OrderSummary from "../../components/cart/OrderSummary";
import { getOrderSummaryEcommerceJs } from "../../components/cart/cartFunctionality";
import SampleReivew from "../../components/product/SampleReview";
const img = "/images/dog-with-stick.jpg";

const OrderCompleteId = () => {
  const router = useRouter();
  const [email, setEmail] = useState("loading email...");
  const { slug } = router.query;

  const cart_id = slug ? slug[0] : undefined;
  const order_id = slug ? slug[1] : undefined;
  const [customer, setCustomer] = useState({});
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState({});

  useEffect(() => {
    getOrderSummaryEcommerceJs(order_id).then((res) => {
      if (res && res.customer) {
        setEmail(res.customer.email);
        setItems(res.pretty_items);
        setCustomer(res.customer);
        setPrice(res.price);
      }
    });
  }, [order_id]);

  return (
    <div>
      <div className={classes.spacing} />
      <div className={classes.orderComplete}>
        <h1>We are on our way!</h1>
        <div className={classes.grid}>
          <ul>
            <li>
              <p>Your order confirmation will be emailed to {email}</p>
            </li>
            <li>
              <p>
                Your map is being created as we speak! As soon as we ship it
                we'll send you a tracking number for your package
              </p>
            </li>
            <li>
              <p>Your map will be shipped within the next two days!</p>
            </li>
            <li>
              <p>
                Your review request will be sent after you receive your product.
                You can see a sample below
              </p>
            </li>
            <li>
              <p>Your order summary is also available below</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.spacing} />
      <div className={classes.sampleReview}>
        <SampleReivew />
      </div>
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
