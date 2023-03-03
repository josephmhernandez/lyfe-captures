import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import OrderSummary from "../../components/cart/OrderSummary";
import { getOrderSummaryEcommerceJs } from "../../components/cart/cartFunctionality";
import SampleReivew from "../../components/product/SampleReview";
import classes from "./ReviewPage.module.css";
const ReviewPage = () => {
  // review/{cart_id}/{order_id}
  const router = useRouter();
  const [email, setEmail] = useState("loading email...");
  const { slug } = router.query;

  const cart_id = slug ? slug[0] : undefined;
  const order_id = slug ? slug[1] : undefined;
  const [customer, setCustomer] = useState({});
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState({});
  const [showOrderSummary, setShowOrderSummary] = useState(false);

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
    <div className={classes.container}>
      <h1> Thank you for your review! </h1>
      <p>
        {" "}
        We appreciate your feedback and will use it to improve our products and
        services. Please be as honest and descriptive as possible! We appreciate
        you!{" "}
      </p>
      {showOrderSummary && (
        <OrderSummary
          items={items}
          price={price}
          customer={customer}
          cart_id={cart_id}
          order_id={order_id}
        />
      )}
      <SampleReivew items={items} cart_id={cart_id} order_id={order_id} />
    </div>
  );
};

export default ReviewPage;
