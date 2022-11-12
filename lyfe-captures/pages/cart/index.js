import React, { useEffect, useState } from "react";
import Commerce from "@chec/commerce.js";
import "semantic-ui-css/semantic.min.css";
import EmptyCart from "../../components/cart/EmptyCart";
import CheckoutContainer from "../../components/cart/CheckoutContainer";

function CartPage() {
  const commerce = new Commerce(process.env.CHEC_PK);

  const [cart, setCart] = useState({});
  const [checkout, setCheckout] = useState(false);
  const [receipt, setReceipt] = useState();
  const [checkNoItems, setCheckNoItems] = useState(false);
  useEffect(() => {
    setCheckNoItems(false);
    console.log("retireving cart");
    commerce.cart.retrieve().then((res) => {
      setCart(res);
    });
  }, [receipt, checkNoItems]);

  const addToCart = (productId, quantity) => {
    console.log("add to cart clicked");
  };

  let cartHasItems = cart.total_items > 0;

  return (
    <div>
      {cartHasItems ? (
        <CheckoutContainer
          addToCart={addToCart}
          setCheckout={setCheckout}
          cart={cart}
          checkEmpty={setCheckNoItems}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default CartPage;
