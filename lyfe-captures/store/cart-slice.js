import Commerce from "@chec/commerce.js";
import { createSlice } from "@reduxjs/toolkit";

const commerce = new Commerce(process.env.CHEC_PK);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    checkout: false,
    modalOpen: false,
    receipt: null,
  },
  reducers: {
    deleteItem: (state, action) => {
      const lineItemId = action.payload.lineItemId;
      commerce.cart.remove(lineItemId).then((res) => {
        state.cart = res.cart;
        localStorage.removeItem("cart-id");
      });
    },
    addQaunity: (state, action) => {
      const lineItemId = action.payload.lineItemId;
      const newQuanity = action.payload.newQuanity;
      commerce.cart.update(lineItemId, { quantity: newQuanity }).then((res) => {
        state.cart = res.cart;
      });
    },
    subtractQuanity: (state, action) => {
      const lineItemId = action.payload.lineItemId;
      const newQuanity = action.payload.newQuanity;
      if (newQuanity === 0) {
        commerce.cart.remove(lineItemId).then((res) => {
          state.cart = res.cart;
          localStorage.removeItem("cart-id");
        });
      } else {
        commerce.cart
          .update(lineItemId, { quantity: newQuanity })
          .then((res) => {
            state.cart = res.cart;
          });
      }
    },
    addToCart: (state, action) => {
      const productId = action.payload.productId;
      const variantInfo = action.payload.variantInfo;
      if (variantInfo) {
        commerce.cart.add(productId, 1, variantInfo).then((res) => {
          state.cart = res.cart;
        });
      } else {
        window.alert("Please Select a Map Size");
      }
    },
    emptyCart: (state) => {
      commerce.cart.empty().then((res) => {
        state.cart = null;
        localStorage.removeItem("cart-id");
      });
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
