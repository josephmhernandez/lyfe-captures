import Commerce from "@chec/commerce.js";

const commerce = new Commerce(process.env.CHEC_PK);

export default async function updateTax(req, res) {
  try {
    const checkout_id = req.body.checkout_id;

    const country = req.body.country;
    const region = req.body.region;
    const postal_code = req.body.postal_code ? req.body.postal_code : undefined;

    const params = {
      country: country,
      region: region,
    };

    if (postal_code) {
      params.postal_zip_code = postal_code;
    }
    const response = await commerce.checkout.setTaxZone(checkout_id, params);
    return res.status(200).json({ tax: response.tax.amount.raw });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Error updating tax" });
  }
}
