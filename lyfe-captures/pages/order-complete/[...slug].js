import { useRouter } from "next/router";
import classes from "./orderComplete.module.css";
import { getOrderSummaryEcommerceJs } from "../../components/cart/cartFunctionality";
import { useEffect, useState } from "react";
// TO DO: Thank you Page... Thank you banner (order has been processed), Order Summary, View Some other products.
import Image from "next/image";

const img = "/images/dog-with-stick.jpg";

const OrderCompleteId = () => {
  const router = useRouter();
  const { slug } = router.query;

  const cart_id = slug ? slug[0] : undefined;
  const order_id = slug ? slug[1] : undefined;
  const [orderSummary, setOrderSummary] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setOrderSummary(getOrderSummaryEcommerceJs(order_id));
    if (orderSummary !== {}) {
      setLoading(false);
    }
  }, [order_id]);

  const email = "thisIsMyEmail@gmail.com";
  console.log(cart_id);

  // if (orderSummary !== {}) {
  //   setLoading(false);
  // }
  // console.log("cartStuff", cartStuff);
  return (
    <div>
      <div className={classes.orderComplete}>
        <h1>We are on our way!</h1>
        <div className={classes.grid}>
          <ul>
            <li>
              <p>Your order confirmation will be emailed to {email}</p>
            </li>
            <li>
              <p>Your Map is being created as we speak!</p>
            </li>
            <li>
              <p>
                Your review request will be sent after you receive your product
              </p>
            </li>
            <li>
              <p>An order summary is available below</p>
            </li>
          </ul>
          {/* Size 3680 × 5520 = */}
          <Image src={img} width={460} height={690} />
        </div>
      </div>
      <div>
        <h1>Sample Review</h1>
      </div>
      <div>
        {loading} ? <p>Loading...</p> : <p>"orderSummary"</p>
      </div>
    </div>
  );
};

export default OrderCompleteId;
