import React, { useEffect } from "react";
import classes from "./CartModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { mapActions } from "../../store/map-slice";
import { useRouter } from "next/router";
import Commerce from "@chec/commerce.js";
import ItemCartModal from "./ItemCartModal";
import { ProductNames } from "./productConstants";
import {
  MapConstants,
  SIZE_OPTION,
  MATERIAL_OPTION,
} from "../createMap/MapFolder/MapConstants";
import {
  emptyCart,
  getCart,
  getLiveObject,
  getProductId,
  updateQuantityById,
} from "./cartFunctionality";

// async function getCartCommerce() {
//   const commerce = new Commerce(process.env.CHEC_PK);
//   const cart = await commerce.cart.retrieve();
//   return cart;
// }

const CartModal = (props) => {
  // Display everything here and then onClose of Modal we will add the quantities that have changed.
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.map.cart);
  const router = useRouter();

  const itemsInCart = cart.length > 0;

  const handleGoToCheckout = async () => {
    // Update Cart in commerce
    // cartDict[prod_name] = quantity
    let cartDict = {};
    // for product names
    // iterate through cart and add to cartDict

    for (const item of cart) {
      console.log("item", item);
      if (item.quantity >= 0) {
        cartDict[item.name] = (cartDict[item.name] || 0) + item.quantity;
      }
      if (item.quantity == 0) {
        // Remove cart item
        dispatch(mapActions.removeFromCart({ id: item.id }));
      }
    }

    // Iterate through cart from api and get get the product name to line item map.
    // name_to_item[prod_name] = line_item_id
    let name_to_item = {};
    let ecom_cart = await getCart();
    console.log("ecom_cart", ecom_cart.line_items);
    for (const item of ecom_cart.line_items) {
      name_to_item[item.name] = item.id;
    }
    // Iterate over prod names in Cart Dict and update the quantity of the product.

    // Update Cart in commerce
    for (const name in cartDict) {
      updateQuantityById(name_to_item[name], cartDict[name]);
    }
    // Update live Object
    let liveObject = await getLiveObject(props.token);
    props.handleSetLiveObject(liveObject);
    // Go to checkout
    props.handleCloseCart(false);
  };
  
  // const handleEmptyCart = async () => {
  //   // To Do: Empty cart in commerce
  //   // Go to checkout
    
  //   // Empty Cart in commerce
  //   let end = await emptyCart();
  //   console.log(end); 


  //   // Empty Cart in redux store
  //   // dispatch(mapActions.emptyCart());
  //   console.log('before get cart');
  //   let liveObject = await getLiveObject(props.token);
  //   props.handleSetLiveObject(liveObject);
  //   props.handleCloseCart(false);
  // };

  const handleCancelChanges = async () => {
    // Cancel quantity changes...
    props.handleCloseCart(false);
    let liveObject = await getLiveObject(props.token);
    props.handleSetLiveObject(liveObject);
  };

  const handleAddQuantity = (item) => {
    console.log(item);
    if (item.quantity >= process.env.CART_ITEM_MAX_QUANTITY) {
      return;
    }
    dispatch(mapActions.editQuantityCart({ id: item.id, addValue: 1 }));
  };

  const handleSubQuantity = (item) => {
    if (item.quantity < 1) {
      return;
    }
    dispatch(mapActions.editQuantityCart({ id: item.id, addValue: -1 }));
  };

  const getTotalPrice = (cart) => {
    let total_price = 0;
    cart.forEach((item) => {
      total_price += item.unitPrice * item.quantity;
    });
    return total_price;
  };

  useEffect(() => {
    // console.log("cart", cart);
    total_price = getTotalPrice(cart);
  }, [cart]);

  let total_price = getTotalPrice(cart);
  return (
    <React.Fragment>
      {!itemsInCart && <p>no items :(</p>}
      {itemsInCart && (
        <React.Fragment>
          {/* Description        Quantity   Price  */}
          <div className={classes.cartTitle}>
            <p>Description</p>
            <p>Quantity</p>
            <p>Price</p>
          </div>
          {/* /* For each cart items and for unique, renderModalItem after ModalItem Quantity of item. New Map State ,Image */}
          <p> Personalized Map</p>
          {/* Then for each unique map Render the Item Block  */}

          {cart.map((item) => (
            <React.Fragment>
              <ItemCartModal
                item={item}
                handleAddQuantity={handleAddQuantity}
                handleSubQuantity={handleSubQuantity}
              />
            </React.Fragment>
          ))}
          <div className={classes.cartFooter}>
            <p>{"$ " + total_price.toFixed(2)}</p>
          </div>
          <div className={classes.cartFooterButtons}>
            <button onClick={handleGoToCheckout} className="ui green button">
              Update Cart & Checkout
            </button>
            {/* <button onClick={handleEmptyCart} className="ui red button">
              Empty Cart
            </button> */}
            <button onClick={handleCancelChanges} className="ui button">
              Cancel
            </button>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default CartModal;
