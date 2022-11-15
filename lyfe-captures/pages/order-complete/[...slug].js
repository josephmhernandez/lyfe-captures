import { useRouter } from "next/router";

// TO DO: Thank you Page... Thank you banner (order has been processed), Order Summary, View Some other products.


const OrderCompleteId = () => {
  const router = useRouter();
  const { slug } = router.query;

  const chart_id = slug[0];
  const order_id = slug[1];

  return (
    <div>
      <h1>Checkout Page</h1>
      <p>Checkout ID: {chart_id}</p>
      <p>Order id: {order_id}</p>
    </div>
  );
};

export default OrderCompleteId;

//ord_eN1ql9krnBoz3y
//Checkout ID: chkt_BkyN5YrbgAl0b6
