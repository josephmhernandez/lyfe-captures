// Make this the only place where we update the commerce cart. 

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
  await commerce.cart.update(itemId, { quantity: prodQty }).catch((err) => {
    console.log(err);
    status = "error updating quantity";
  });
  return status;
}

export async function getCart() {
  let cart = commerce.cart.retrieve().catch((err) => {
    console.log('error getting cart'); 
    console.log(err);
    return undefined;
  });
  return cart;
}

export async function getLiveObject(checkout_id) {
  console.log('here'); 
  let liveObject = await commerce.checkout
    .getLive(checkout_id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

  return liveObject;
}

export async function emptyCart() {
  let status = "";
  status = await commerce.cart.empty().catch((err) => {
    console.log(err);
  });
  return status;
}
