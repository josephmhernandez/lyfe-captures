import React, { useEffect } from "react";
import classes from "./CartModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { mapActions } from "../../store/map-slice";
import { useRouter } from "next/router";
import Commerce from "@chec/commerce.js";
import ItemCartModal from "./ItemCartModal";
import { ProductNames } from "./productConstants";
import { MapConstants, SIZE_OPTION, MATERIAL_OPTION } from "../createMap/MapFolder/MapConstants";
const CartModal = (props) => {
  // Display everything here and then onClose of Modal we will add the quantities that have changed.
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.map.cart);
  const router = useRouter();

  //Actions to do on close of modal
  const itemsInCart = cart.length > 0;
  const commerce = new Commerce(process.env.CHEC_PK);

  const handleGoToCheckout = () => {
    // Update Cart in commerce
    let cartDict = {};
    // for product names
    // iterate through cart and add to cartDict

    for (const item of cart) {
      console.log('item', item); 
      if (item.quantity >= 0) {
        cartDict[item.name] = (cartDict[item.name] || 0) + item.quantity;
      }
      if (item.quantity == 0) {
        // Remove cart item
        dispatch(mapActions.removeFromCart({ id: item.id }));
      }
    }

    // Update Cart in commerce
    for (const key in cartDict) {
      commerce.products
        .list()
        .then((res) => {
          let prod = res.data.find((p) => p.name === key);
          // get prod id
          let prodId = prod.id;
          let variantInfo = {
            Size: MapConstants.poster_size[SIZE_OPTION].variant_size,
            Material: MATERIAL_OPTION,
          };

          console.log('cartDict', cartDict);
          console.log('key', key);
          console.log('val', cartDict[key]); 

          commerce.cart
            .update(prodId, cartDict[key])
            .then((res) => {
              console.log("res", res);
            })
            .catch((err) => {
              console.log("err", err);
            });
        })
        .catch((err) => {
          console.log("err", err);
        });
    }

    // Go to checkout
    console.log("go to checkout checking ....");
    props.handleCloseCart(false); 
  };
  const handleEmptyCart = () => {
    // To Do: Empty cart in commerce

    // Go to checkout
    props.handleCloseCart(false); 
    console.log("to do handle empty cart");
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
            <button onClick={handleEmptyCart} className="ui red button">
              Empty Cart
            </button>
            <button onClick={props.handleCloseCart} className="ui button">
              Cancel
            </button>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default CartModal;
