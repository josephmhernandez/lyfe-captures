// Make this the only place where we update the commerce cart.
// Also functions to manage the map object in local storage.
import * as React from "react";
import Commerce from "@chec/commerce.js";
import throttle from "lodash/throttle";

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
      console.log("oldCartData is empty string");
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
      console.log("oldCartData is empty string");
      oldCartData = [];
    }
    // Add the new map to the old cart data.
    const newCartData = [...oldCartData, mapObj];
    localStorage.setItem("cart_data", JSON.stringify(newCartData));
    console.log("Cart updated");
    console.log("Cart data: ", newCartData);
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
      console.log("oldCartData is empty string");
      console.log("trying to remove id: ", id);
      console.log("no cart data in localstorage");
      oldCartData = [];
    }
    // Remove the map from the old cart data.
    const newCartData = oldCartData.filter((item) => item.id !== id);

    localStorage.setItem("cart_data", JSON.stringify(newCartData));
    console.log("Cart updated");
    console.log("Cart data: ", newCartData);
  }

  return "";
}

export function updateEntireMapObjLocalStorage(newMapObj) {
  // update entire mapObj in localStorage
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("cart_data", JSON.stringify(newMapObj));
    console.log("Cart updated");
    console.log("Cart data: ", newMapObj);
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
      console.log("oldCartData is empty string");
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
    console.log("Cart updated");
    console.log("Cart data: ", newCartData);
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

export async function getOrderSummaryEcommerceJs(order_id) {
  const url = new URL(`https://api.chec.io/v1/orders/${order_id}`);
  console.log("url: ", url);
  const headers = {
    "X-Authorization": `${process.env.CHEC_SK_SANDBOX}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  let response = await fetch(url, {
    method: "GET",
    headers: headers,
  }).then((response) => response);
  if (response.status === 200) {
    let checkoutSummaryData = await response.json().then((res) => res);
    console.log("checkoutSummaryData", checkoutSummaryData);
    try {
      let items = JSON.parse(checkoutSummaryData.extra_fields[0].value); // array of map objects
      console.log("items", items);
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
      return orderSummary;
    } catch (err) {
      console.log("error parsing items for order summary");
      console.log(err);
      return undefined; // error
    }
  }
  console.log("error getting order summary from ecommercejs", response);
  console.log("checkoutSummary.status_code", response.status_code);
  return undefined; // error
}
