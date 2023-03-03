import React, { useEffect, useState } from "react";
import classes from "./CartModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { mapActions } from "../../store/map-slice";
import { useRouter } from "next/router";
import ItemCartModal from "./ItemCartModal";
import { ProductNames } from "./ProductConstants";
import {
  MapConstants,
  SIZE_OPTION,
  MATERIAL_OPTION,
} from "../createMap/MapFolder/MapConstants";
import {
  getCartEcommerceJs,
  getLiveObjectEcommerceJs,
  updateQuantityByIdEcommerceJs,
  getMapObjLocalStorage,
  removeMapObjFromLocalStorage,
  updateEntireMapObjLocalStorage,
  updateMapObjLocalStorage,
} from "./cartFunctionality";
import { QrCodeScannerOutlined } from "@mui/icons-material";

const CartModal = (props) => {
  // Display everything here and then onClose of Modal we will add the quantities that have changed.
  const dispatch = useDispatch();
  let cart = getMapObjLocalStorage();
  // Edit temproary Cart before we update the cart in the redux store.
  const [tempCart, setTempCart] = useState(cart);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const itemsInCart = cart.length > 0;

  const handleGoToCheckout = async () => {
    setLoading(true);
    // We want this to call redux cart. Only method to call dispatch
    // Update Cart in commerce & update redux cart
    let cartDict = {};
    // for product names
    // iterate through cart and add to cartDict
    const tCart = tempCart;

    for (const item of tCart) {
      if (item.quantity >= 0) {
        cartDict[item.name] = (cartDict[item.name] || 0) + item.quantity;
      }
      if (item.quantity == 0) {
        // Remove cart item
        removeMapObjFromLocalStorage(item.id);
      }
    }

    // Iterate through cart from api and get get the product name to line item map.
    // name_to_item[prod_name] = line_item_id
    let name_to_item = {};
    let ecom_cart = await getCartEcommerceJs();
    for (const item of ecom_cart.line_items) {
      name_to_item[item.name] = item.id;
    }
    // Iterate over prod names in Cart Dict and update the quantity of the product.

    // Update Cart in commercejs
    var promiseArray = [];
    for (const name in cartDict) {
      promiseArray.push(
        updateQuantityByIdEcommerceJs(name_to_item[name], cartDict[name])
      );
    }
    await Promise.all(promiseArray);

    // Update live Object
    // let liveObject = await getLiveObjectEcommerceJs(props.token);
    // props.handleSetLiveObject(liveObject);

    // Update Map Obj in Local Storage
    for (const item of tCart) {
      if (item.quantity > 0) {
        updateMapObjLocalStorage(item.id, item.quantity);
      }
    }

    // dispatch(mapActions.updateCart({ cart: tCart }));
    // Might not need this.
    // updateEntireMapObjLocalStorage(tCart);

    // Go to checkout
    props.handleCloseCart(false);
    setLoading(false);
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
    let liveObject = await getLiveObjectEcommerceJs(props.token);
    // props.handleSetLiveObject(liveObject);
  };

  const editQuantityCart = (id, addValue) => {
    // Add quantity to the cart. Cart Modal update quantity.
    let curr_cart = tempCart;
    const product_index = curr_cart.findIndex((x) => x.id == id);
    if (product_index > -1) {
      let new_quantitiy = curr_cart[product_index].quantity + addValue;
      setTempCart([
        ...curr_cart.slice(0, product_index),
        Object.assign({}, curr_cart[product_index], {
          quantity: new_quantitiy,
        }),
        ...curr_cart.slice(product_index + 1),
      ]);
    } else {
      console.log("Product not found in cart negative prod index: id: ", id);
    }
  };

  const handleAddQuantity = (item) => {
    if (item.quantity >= process.env.CART_ITEM_MAX_QUANTITY) {
      return;
    }
    editQuantityCart(item.id, 1);
  };

  const handleSubQuantity = (item) => {
    if (item.quantity < 1) {
      return;
    }
    editQuantityCart(item.id, -1);
  };

  const getTotalPrice = (cart_arr) => {
    let total_price = 0;
    try {
      cart_arr.forEach((item) => {
        total_price += item.unitPrice * item.quantity;
      });
    } catch (err) {
      console.log("Error in getTotalPrice: ", err);
    }

    return total_price;
  };

  useEffect(() => {
    total_price = getTotalPrice(tempCart);
  }, [tempCart]);

  let total_price = getTotalPrice(tempCart);

  if (loading) return <p> loading... </p>;
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

          {tempCart.map((item) => (
            <React.Fragment key={item.id}>
              <ItemCartModal
                key={item.id}
                item={item}
                handleAddQuantity={handleAddQuantity}
                handleSubQuantity={handleSubQuantity}
              />
            </React.Fragment>
          ))}
          <div className={classes.cartFooter}>
            <p>{"Subtotal: $ " + total_price.toFixed(2)}</p>
          </div>
          <div className={classes.cartFooterButtons}>
            <button onClick={handleGoToCheckout} className="ui green button">
              Update Cart
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
