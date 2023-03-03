// Make this the only place where we update the commerce cart.
// Also functions to manage the map object in local storage.
import Commerce from "@chec/commerce.js";

const commerce = new Commerce(process.env.CHEC_PK);

/**
 * Uses the CommerceJS Name like "Peresonalized Map" to look up the wholesale price.
 *
 * @param {string} prodName Name of the product
 * @return wholesale price of object
 */
export async function getPriceEcommerceJs(prodName) {
  let price = await commerce.products
    .list()
    .then((res) => {
      let prod = res.data.find((p) => p.name === prodName);
      return prod.price.raw;
    })
    .catch((err) => console.log(err));

  return price;
}

export function getMapObjLocalStorage() {
  // get mapObj from localStorage
  if (typeof localStorage !== "undefined") {
    let oldCartData = localStorage.getItem("cart_data");
    // Check empty string
    if (oldCartData) {
      oldCartData = JSON.parse(oldCartData);
    } else {
      oldCartData = [];
      // If empty string, set to empty array
      localStorage.setItem("cart_data", JSON.stringify(oldCartData));
    }
    // Returning the map obj data from local storage.
    return oldCartData;
  } else {
    const errorMsg = "Local storage not available";
    console.log(errorMsg);
    return errorMsg;
  }
}

export function addToMapObjLocalStorage(mapObj) {
  // add mapObj to localStorage
  if (typeof localStorage !== "undefined") {
    let oldCartData = localStorage.getItem("cart_data");
    // Check empty string
    if (oldCartData) {
      oldCartData = JSON.parse(oldCartData);
    } else {
      oldCartData = [];
    }
    // Add the new map to the old cart data.
    const newCartData = [...oldCartData, mapObj];
    localStorage.setItem("cart_data", JSON.stringify(newCartData));
  } else {
    const errorMsg = "Local storage not available";
    console.log(errorMsg);
    console.log("map object that was not added to local storage: ", mapObj);
    return errorMsg;
  }

  return "";
}

export function removeMapObjFromLocalStorage(id) {
  // remove mapObj from localStorage
  if (typeof localStorage !== "undefined") {
    let oldCartData = localStorage.getItem("cart_data");
    // Check empty string
    if (oldCartData) {
      oldCartData = JSON.parse(oldCartData);
    } else {
      // console.log("trying to remove id: ", id);
      // console.log("no cart data in localstorage");
      oldCartData = [];
    }
    // Remove the map from the old cart data.
    const newCartData = oldCartData.filter((item) => item.id !== id);

    localStorage.setItem("cart_data", JSON.stringify(newCartData));
    // console.log("Cart data: ", newCartData);
  }

  return "";
}

export function updateEntireMapObjLocalStorage(newMapObj) {
  // update entire mapObj in localStorage
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("cart_data", JSON.stringify(newMapObj));
    // console.log("Cart data: ", newMapObj);
  }
}

export function updateMapObjLocalStorage(id, quantity) {
  // if quantity is 0, remove from cart
  if (quantity === 0) {
    return removeMapObjFromLocalStorage(id);
  }

  // iterate through map objects in localStorage and update quantity
  if (typeof localStorage !== "undefined") {
    let oldCartData = localStorage.getItem("cart_data");
    // Check empty string
    if (oldCartData) {
      oldCartData = JSON.parse(oldCartData);
    } else {
      // console.log("oldCartData is empty string");
      return "map objects data in local storage is an empty string";
    }

    // Update the map from the old cart data.
    const newCartData = oldCartData.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });
    localStorage.setItem("cart_data", JSON.stringify(newCartData));
    // console.log("Cart data: ", newCartData);
  }
  return ""; // no error
}

export async function addToCartEcommerceJs(prodName, prodQty) {
  let status = "";
  let prodId = await getProductIdEcommerceJs(prodName);

  let lineItem = await commerce.cart.add(prodId, prodQty).catch((err) => {
    console.log(err);
    status = "error adding to ecommercejs cart";
  });
  // Return response from commercejs
  return lineItem;
}

export async function getProductIdEcommerceJs(prodName) {
  let prodId = await commerce.products.list().then((res) => {
    let prod = res.data.find((p) => p.name === prodName);
    return prod.id;
  });
  return prodId;
}

export async function updateQuantityByIdEcommerceJs(itemId, prodQty) {
  let status = "";
  await commerce.cart.update(itemId, { quantity: prodQty }).catch((err) => {
    console.log(err);
    status = "error updating quantity";
  });
  return status;
}

export async function getCartEcommerceJs() {
  let cart = commerce.cart.retrieve().catch((err) => {
    console.log("error getting cart");
    console.log(err);
    return undefined;
  });
  return cart;
}

export async function getLiveObjectEcommerceJs(checkout_id) {
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

export async function emptyCartEcommerceJs() {
  let status = "";
  status = await commerce.cart.empty().catch((err) => {
    console.log(err);
  });
  return status;
}

export function emptyMapObjLocalStorage() {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem("cart_data");
  }
}
