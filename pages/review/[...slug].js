import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import OrderSummary from "../../components/cart/OrderSummary";
import SampleReivew from "../../components/product/SampleReview";
import { Button } from "semantic-ui-react";
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
  const [btnText, setBtnText] = useState("Show Order Summary");
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
    <div className={classes.container}>
      <h1> Thank you for your review! </h1>
      <p>
        {" "}
        We appreciate your feedback and will use it to improve our products and
        services. Please be as honest and descriptive as possible! We appreciate
        you!{" "}
      </p>
      {showOrderSummary && (
        <div>
          <OrderSummary
            items={items}
            price={price}
            customer={customer}
            cart_id={cart_id}
            order_id={order_id}
          />
          <div className={classes.spacing} />
        </div>
      )}
      <Button
        style={{
          "background-color": "var(--color-primary)",
          color: "white",
          "border-radius": "100px",
          "font-family": "var(--page-paragraph-font-family)",
          "font-size": "var(--page-paragraph-font-size)",
          "font-weight": "400",
        }}
        onClick={() => {
          setShowOrderSummary(!showOrderSummary);
          if (btnText === "Show Order Summary") {
            setBtnText("Hide Order Summary");
          } else {
            setBtnText("Show Order Summary");
          }
        }}
      >
        {btnText}
      </Button>
      <div className={classes.spacing} />
      <SampleReivew items={items} cart_id={cart_id} order_id={order_id} />
    </div>
  );
};

export default ReviewPage;
