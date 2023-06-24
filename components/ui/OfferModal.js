/* 
Modal designed to display a discount offer to first time visitors.
*/

import { useState } from "react";
import { Modal, Form, Grid } from "semantic-ui-react";
import classes from "./OfferModal.module.css";
import { validateEmail } from "../../utils/helper_methods";
import { v4 as uuid } from "uuid";
import {
  PINTEREST_URL,
  PINTEREST_PAGE_NAME,
} from "../../constants/siteConstants";

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

    // Send stats to Pinterest and google analytics
    pintag.pinTagEvent("lead", {
      from: "website",
      lead_type: "email",
      details: "giveaway promotion",
    });
    gtag.event({
      action: "lead-email",
      category: "lead",
      label: "giveaway promotion",
      value: 1,
    });

    // TO DO: Send the user a discount code for their email

    // Close the modal
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <h1>🎉 Enter our Giveaway! 🎁✨</h1>
      <h2>We are giving away 3 maps at the end of July!</h2>

      <p>
        1️⃣ {`Follow us on Pinterest at `}
        <a href={PINTEREST_URL} target="_blank" rel="noopener noreferrer">
          {PINTEREST_PAGE_NAME}
        </a>
        {` for one entry`}
      </p>
      <p>
        2️⃣ Enter your email below for an additional entry to the giveaway AND to
        get an exclusive 20% off coupon code for your next order!
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
            <Form.Button color="grey" size="big" onClick={onClose}>
              Close
            </Form.Button>
          </Form.Group>
        </Form>
      </Grid.Column>
    </Modal>
  );
};

export default OfferModal;
