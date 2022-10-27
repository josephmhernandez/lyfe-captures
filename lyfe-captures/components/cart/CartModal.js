import { Modal, Header, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";
import classes from "./CartModal.module.css";
import { useSelector } from "react-redux";

import { ColorIconPathMap } from "../createMap/MapFolder/MapConstants";

const CartModal = (props) => {
  // Map Slice functions
  // Commerce cart

  // Display everything here and then onClose of Modal we will add the quantities that have changed.
  const commerce = new Commerce(process.env.CHEC_PK);

  //Actions to do on close of modal
  const [cartActions, setCartActions] = useState([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState({});
  const itemsInCart = true;

  return (
    <React.Fragment>
      {!itemsInCart && <p>no items :(</p>}
      {itemsInCart && (
        <React.Fragment>
          <Header>Current Cart</Header>
          <Modal.Content>
            {/* Description        Quantity   Price  */}
            <div className={classes.cartTitle}>
              <p>Description</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            {/* /* For each cart items and for unique, renderModalItem after ModalItem Quantity of item. New Map State ,Image */}
            <p> Personalized Map</p>
            {/* Then for each unique map Render the Item Block  */}
            <div className={classes.itemBlock}>
              {/* picture, description, qunatity Price*/}
              <div className={classes.itemBlockDescription}>
                <img src={ColorIconPathMap["white-black"]} />
                <p> Map near seattle washington</p>
              </div>
              <div className={classes.itemBlockQuantity}>
                <button class="positive ui button">+</button>
                <p>3</p>
                <button class="negative ui button">-</button>
              </div>
              <p>$ 20.00</p>
            </div>
            <div className={classes.cartFooter}>
              <p>Total: $20.00</p>
            </div>
          </Modal.Content>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default CartModal;
