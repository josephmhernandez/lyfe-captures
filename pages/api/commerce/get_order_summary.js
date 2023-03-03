import Commerce from "@chec/commerce.js";

const commerce = new Commerce(process.env.CHEC_PK);

export default async function getOrderSummary(req, res) {
  const order_id = req.body.order_id;
  const url = new URL(`https://api.chec.io/v1/orders/${order_id}`);
  const headers = {
    "X-Authorization": `${process.env.CHEC_SK}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  let response = await fetch(url, {
    method: "GET",
    headers: headers,
  }).then((response) => response);
  if (response.status === 200) {
    let checkoutSummaryData = await response.json().then((res) => res);

    try {
      let items = JSON.parse(checkoutSummaryData.extra_fields[0].value); // array of map objects
      let pretty_items = items.map((item) => {
        return {
          name: item.name,
          description: item.description,
          quantity: item.quantity,
          unit_price: item.unitPrice,
          tile_layer: item.tileLayer,
          map_id: item.id,
          orientation: item.orientation,
        };
      });

      let orderSummary = {
        customer: {
          first_name: checkoutSummaryData.customer.firstname,
          last_name: checkoutSummaryData.customer.lastname,
          email: checkoutSummaryData.customer.email,
          cust_ord_ref: checkoutSummaryData.customer_reference,
        },
        price: {
          shipping:
            checkoutSummaryData.order.shipping.price.formatted_with_symbol,
          tax: checkoutSummaryData.tax.amount.formatted_with_symbol,
          total_price:
            checkoutSummaryData.order.total_paid.formatted_with_symbol,
          discount: checkoutSummaryData.order.discount,
        },
        pretty_items: pretty_items,
      };
      return res.status(200).json(orderSummary);
    } catch (err) {
      console.log("error parsing items for order summary");
      console.log(err);
      return res
        .status(500)
        .json({ error: "Error parsing items for order summary" });
    }
  }
  console.log("error getting order summary from ecommercejs");
  return res
    .status(500)
    .json({ error: "Error getting order summary from ecommercejs" });
}
