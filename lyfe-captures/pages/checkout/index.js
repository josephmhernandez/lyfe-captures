import React, { useEffect, useState } from "react";
import Commerce from "@chec/commerce.js";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import LeftPanel from "../../components/cart/LeftPanel";
import Footer from "../../components/cart/Footer";
import ProductContainer from "../../components/cart/ProductContainer";
import Link from "next/link";
import { useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

function CheckoutPage() {
  const commerce = new Commerce(process.env.CHEC_PK);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [checkout, setCheckout] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [receipt, setReceipt] = useState();

  useEffect(() => {
    commerce.cart.retrieve().then((res) => {
      // console.log(res, 'response from app useEffect')
      dispatch(cartActions.setCart(res));
    });
  }, [receipt]);

  return (
    <div>
      <Grid centered stackable padded relaxed>
        {/* <LeftPanel /> */}
        <Grid.Column className="left-column" width={5}>
          <LeftPanel />
        </Grid.Column>

        {/* <Right Panel /> */}
        <Grid.Column width={9}>
          <ProductContainer
            setCheckout={setCheckout}
            // addToCart={addToCart}
          />


          {/* <Route
              exact
              path="/"
              render={(props) => {
                return (
                  <ProductContainer
                    {...props}
                    addToCart={addToCart}
                    setCheckout={setCheckout}
                  />
                );
              }} */}
          {/* /> */}
        </Grid.Column>
      </Grid>

      {/* Route to Checkout */}
      {/* <PrivateRoute
          component={CheckoutContainer}
          path={`/checkout/:id`}
          setCheckout={setCheckout}
          setModalOpen={setModalOpen}
          setReceipt={setReceipt}
        /> */}

      {/* <Route
          path="/order-complete/:checkoutToken/:orderId"
          render={(props) => {
            return <CheckoutComplete {...props} setCheckout={setCheckout} />;
          }}
        /> */}
      <Footer />
    </div>
  );
}

export default CheckoutPage;
