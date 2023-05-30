/* 
Modal designed to display a discount offer to first time visitors.
*/

import { useState } from "react";
import { Modal, Input, Form, Grid } from "semantic-ui-react";
import classes from "./OfferModal.module.css";
import { validateEmail } from "../../utils/helper_methods";
import { v4 as uuid } from "uuid";

const OfferModal = ({ open, onClose }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleEmailSend = async () => {
    console.log("handleEmailSend:" + userEmail);
    if (!userEmail) {
      return;
    }

    // Verify that it is a valid email
    if (!validateEmail(userEmail)) {
      return;
    }

    // If space in userName split to first and last name
    // Remove userName pre and trailing whitespace
    userName.trim();
    let firstName = userName;
    let lastName = "";
    if (userName.includes(" ")) {
      const nameArray = userName.split(" ");
      firstName = nameArray[0];
      lastName = nameArray[1];
    }

    const params = {
      user_id: uuid(),
      email: userEmail,
      first_name: firstName,
      last_name: lastName,
      acquired_from: "website",
    };
    const url = "/api/write_user";
    // Call the API to send the email to our dynamoDB Users table
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    // TO DO: Send the user a discount code for their email

    // Close the modal
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <h1> Lock in 20% Discount!</h1>
      <h2> Only chance to get this price</h2>

      <p>
        On top of the sale, first time website visitors can lock in a 20%
        discount. Right now, all maps are $499. With the 20% discount, you can
        get a map for $399.20. This is the lowest price we'll ever offer. Don't
        miss out! This is your only chance to lock in this price.
      </p>
      <p>
        Enter your email and your price will be locked in for the rest of the
        year!
      </p>
      <Grid.Column className="center aligned" textAlign="center">
        <Form>
          <Form.Field>
            <Form.Input
              placeholder="Name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              placeholder="Email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Group>
            <Form.Button positive size="big" onClick={handleEmailSend}>
              Get Discount
            </Form.Button>
          </Form.Group>
        </Form>
      </Grid.Column>
    </Modal>
  );
};

export default OfferModal;
