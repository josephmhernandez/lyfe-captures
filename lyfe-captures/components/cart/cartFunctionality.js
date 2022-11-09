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
      console.log("prod", prod);
      console.log("prod.price", prod.price.raw);
      return prod.price.raw;
    })
    .catch((err) => console.log(err));

  return price;
}

export async function addToCart(prodName, prodQty) {
  let status = "";
  let prodId = await getProductId(prodName);

  let lineItem = await commerce.cart.add(prodId, prodQty).catch((err) => {
    console.log(err);
    status = "error adding to ecommercejs cart";
  });

  return lineItem; 
}

export async function getProductId(prodName) {
  let prodId = await commerce.products.list().then((res) => {
    let prod = res.data.find((p) => p.name === prodName);
    return prod.id;
  });
  return prodId;
}

export async function updateQuantityById(itemId, prodQty) {
  let status = "";
  console.log("updateQuantityById", itemId, prodQty);
  await commerce.cart.update(itemId, { quantity: prodQty }).catch((err) => {
    console.log(err);
    status = "error updating quantity";
  });
  return status;
}

// Not sure if I use this function.     
export async function updateQuantityByName(prodName, prodQty) {
  let status = "";
  let prodId = await getProductId(prodName);

  await commerce.cart.update(prodId, { quantity: prodQty }).catch((err) => {
    console.log(err);
    status = "error updating quantity";
  });
  return status;
}

export async function getCart() {
  let cart = commerce.cart.retrieve().catch((err) => {
    console.log(err);
    return undefined; 
  });
  return cart;
}