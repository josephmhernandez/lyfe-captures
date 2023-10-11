/* 
Modal designed to display a discount offer to first time visitors.
*/

import { useState } from "react";
import { Modal, Form, Grid, Button } from "semantic-ui-react";
import classes from "./OfferModal.module.css";
import { isValidPhoneNumber, validateEmail } from "../../utils/helper_methods";
import { v4 as uuid } from "uuid";
import {
  PINTEREST_URL,
  PINTEREST_PAGE_NAME,
} from "../../constants/UiConstants";
import * as gtag from "../../lib/gtag";
import * as pintag from "../../lib/pintag";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OfferModal = ({ open, onClose }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(null);

  const clearOnSubmit = () => {
    setUserName("");
    setUserEmail("");
    setPhoneNumber("");
    setErrorName(null);
    setErrorEmail(null);
    setErrorPhoneNumber(null);
  };

  const formHasErrors = () => {
    let hasError = false;
    if (userName.trim() === "") {
      setErrorName("Name is required.");
      hasError = true;
    }

    if (userEmail.trim() === "") {
      setErrorEmail("Email is required.");
      hasError = true;
    } else {
      if (!isValidPhoneNumber(phoneNumber)) {
        setErrorPhoneNumber("Invalid phone number.");
        hasError = true;
      }
    }

    if (userEmail.trim() === "") {
      setErrorEmail("Email is required.");
      hasError = true;
    } else {
      if (!validateEmail(userEmail)) {
        setErrorEmail("Invalid email.");
        hasError = true;
      }
    }
    return hasError;
  };

  const handleEmailSend = async () => {
    // Check for errors
    if (formHasErrors()) {
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
      phone_number: phoneNumber,
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

    clearOnSubmit();

    if (response.status === 200) {
      toast.success("You have been entered into our giveaway!");
    }
    if (response.status === 500) {
      toast.error(
        "Please Contact Us for help. We are sorry for the inconvenience."
      );
    }

    // Close the modal
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <h1>🎉 Enter our October Giveaway! 🎁</h1>
      <h2>We are giving away a free map in October 2023!</h2>
      <p>Simply, enter your email for a chance to win!</p>
      <p>Even if you don’t win you’ll get a 10% discount code for entering!</p>
      <p>
        Must be in the continental United States to win! Winners get a free map
        shipped to them at no cost! Good luck!
      </p>
      <Form>
        <Form.Field>
          <Form.Input
            label="Full Name"
            placeholder="Full Name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setErrorName(null);
            }}
            required={true}
            error={errorName}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            label="Phone Number"
            placeholder="Phone Number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setErrorPhoneNumber(null);
            }}
            required={true}
            error={errorPhoneNumber}
            value={phoneNumber}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            label="Email"
            placeholder="Email"
            onChange={(e) => {
              setUserEmail(e.target.value);
              setErrorEmail(null);
            }}
            required={true}
            error={errorEmail}
            value={userEmail}
          />
        </Form.Field>
        <Modal.Actions>
          <Button onClick={handleEmailSend} positive>
            Enter Giveaway
          </Button>
          <Button onClick={onClose} negative>
            Close
          </Button>
        </Modal.Actions>
      </Form>
    </Modal>
  );
};

export default OfferModal;
