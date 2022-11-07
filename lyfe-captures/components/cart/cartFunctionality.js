// Only place in the application where we update commercejs cart. Experiencing bugs. 

import Commerce from "@chec/commerce.js";

const commerce = new Commerce(process.env.CHEC_PK);

/**
 * Uses the CommerceJS Name like "Peresonalized Map" to look up the wholesale price.
 *
 * @param {string} prodName Name of the product
 * @return wholesale price of object
 */
export async function getPrice(prodName) {
  let price = await commerce.products
    .list()
    .then((res) => {
      let prod = res.data.find((p) => p.name === prodName);
      console.log('prod', prod);
      console.log('prod.price', prod.price.raw);
      return prod.price.raw; 
    })
    .catch((err) => console.log(err));

  return price;
}
