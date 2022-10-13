import React, { useEffect, useState } from "react";
import Commerce from "@chec/commerce.js";
import "semantic-ui-css/semantic.min.css";
import EmptyCart from '../../components/cart/EmptyCart';
import Checkout from "../../components/cart/Checkout";
import CheckoutContainer from "../../components/cart/CheckoutContainer";

function CartPage() {
  const commerce = new Commerce(process.env.CHEC_PK);

  const [cart, setCart] = useState({});
  const [checkout, setCheckout] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [receipt, setReceipt] = useState();

  useEffect(() => {
    commerce.cart.retrieve().then((res) => {
      setCart(res);
    });
  }, [receipt]);

  const addToCart = (productId, quantity) => {
    console.log('add to cart clicked'); 
  }

  let cartHasItems = cart.total_items > 0;

  
  return (
    <div>
      {!cartHasItems && <EmptyCart />}
      {/* {cartHasItems && <Checkout cart={cart}/> } */}
      {cartHasItems && <CheckoutContainer addToCart={addToCart} setCheckout={setCheckout} cart={cart} /> }
    </div>
  );
}

export default CartPage;
