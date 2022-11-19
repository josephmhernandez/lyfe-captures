import { useRouter } from "next/router";

// TO DO: Thank you Page... Thank you banner (order has been processed), Order Summary, View Some other products.

const OrderCompleteId = () => {
  const router = useRouter();
  const { slug } = router.query;

  const chart_id = slug ? slug[0] : undefined;
  const order_id = slug ? slug[1] : undefined;

  console.log(chart_id);
  return (
    chart_id &&
    order_id && (
      <div>
        <h1>Checkout Page</h1>
        <p>Checkout ID: {chart_id}</p>
        <p>Order id: {order_id}</p>
      </div>
    )
  );
};

export default OrderCompleteId;
