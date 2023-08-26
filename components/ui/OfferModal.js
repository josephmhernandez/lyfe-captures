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
import * as gtag from "../../lib/gtag";
import * as pintag from "../../lib/pintag";

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
    const giveawayEmailUrl = "/api/email/send_giveaway";
    const giveawayParams = {
      email: userEmail,
    };
    const giveawayEmailResponse = await fetch(giveawayEmailUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(giveawayParams),
    });
    console.log("giveawayEmailResponse:", giveawayEmailResponse);

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

    // Close the modal
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <h1>🎉 Enter our Giveaway! 🎁✨</h1>
      <h2>We are giving away 4 maps in August 2023!</h2>

      <p>
        MapYourMemory is a new business, so we’re only expecting 25 or so
        entrants!
      </p>
      <p>Simply, enter your email for a chance to win!</p>
      <p>Even if you don’t win you’ll get a 20% discount code for entering!</p>
      <p>
        Must be in the continental United States to win! Winners get a free map
        shipped to them at no cost! Good luck!
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
              Enter Giveaway
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
