import React, { useEffect } from "react";
import classes from "./CartModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { mapActions } from "../../store/map-slice";
import { useRouter } from "next/router";
import ItemCartModal from "./ItemCartModal";

const CartModal = (props) => {
  // Display everything here and then onClose of Modal we will add the quantities that have changed.
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.map.cart);
  const router = useRouter();

  //Actions to do on close of modal
  const itemsInCart = cart.length > 0;

  const handleGoToCheckout = () => {
    router.push("/cart");
    console.log("to do handle go to checkout");
  };
  const handleEmptyCart = () => {
    console.log("to do handle empty cart");
  };

  const handleAddQuantity = (item) => {
    console.log(item); 
    if(item.quantity >= process.env.CART_ITEM_MAX_QUANTITY) {
      return; 
    }
    dispatch(mapActions.editQuantityCart({ id: item.id, addValue: 1 }));
  };

  const handleSubQuantity = (item) => {
    if(item.quantity < 1) {
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
            <button
              onClick={handleGoToCheckout}
              // onClick={props.handleOpenCartModal(false)}
              className="ui green button"
            >
              Update Cart & Checkout
            </button>
            <button onClick={handleEmptyCart} className="ui red button">
              Empty Cart
            </button>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default CartModal;
