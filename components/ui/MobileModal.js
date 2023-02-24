import { Modal, Button, Input } from "semantic-ui-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import React from "react";
import classes from "./MobileModal.module.css";
const MobileModal = (props) => {
  const [open, setOpen] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  const handleEmailSend = () => {
    console.log("handleEmailSend:" + userEmail);

    // Call the API to send the email to our dynamoDB Users table
  };

  return (
    <Modal
      onClose={() => {
        props.handleClose();
        setOpen(false);
      }}
      onOpen={() => props.handleOpen()}
      open={open}
      className={classes.content}
    >
      <Modal.Header>We've Detect a Mobile Device</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>
            Unfortunately, you can't see the detail of the map from a mobile
            device. Please visit on a desktop or laptop to get the full
            experience! Thank you!
          </p>
          <p>
            Feel free to drop your email and we'll send you a link to where you
            left off! Don't hesitate to reach out if you have any questions{" "}
            <a>{process.env.EMAIL_SUPPORT}</a>
          </p>
          <div className={classes.inputEmail}>
            <Input
              placeholder="Email"
              onChange={(e) => setUserEmail(e.target.value)}
              size="big"
            />
          </div>
          <div>
            <Router>
              <Link
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:" + process.env.EMAIL_SUPPORT;
                  e.preventDefault();
                  setOpen(false);
                  props.handleClose();
                  handleEmailSend();
                }}
              >
                Contact Us
              </Link>
            </Router>
          </div>
        </Modal.Description>
      </Modal.Content>

      <Modal.Actions>
        <Button
          onClick={() => {
            props.handleClose();
            setOpen(false);
            handleEmailSend();
          }}
          content="Send Email"
          labelPosition="right"
          icon="checkmark"
          positive
        />
        <Button
          onClick={() => {
            props.handleClose();
            setOpen(false);
            handleEmailSend();
          }}
          content="Close"
          labelPosition="right"
          icon="close"
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default MobileModal;
