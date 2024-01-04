import { set } from "nprogress";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Modal, Form, TextArea, Button } from "semantic-ui-react";
import "react-toastify/dist/ReactToastify.css";
import classes from "./SpecialRequestModal.module.css";
import { SPECIAL_REQUEST_MAP_STORAGE_KEY } from "../../constants/UiConstants";
import { getSpecialReq } from "../../utils/helper_methods";
const SpecialRequestModal = ({ open, onClose }) => {
  const [subject, setSubject] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mapDescription, setMapDescription] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");

  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorSubject, setErrorSubject] = useState(null);
  const [errorSpecifications, setErrorSpecifications] = useState(null);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(null);

  useEffect(() => {
    // Get map payload from store.
    let mapPayload = getSpecialReq();
    setMapDescription(mapPayload);
  }, [open]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setErrorName(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorEmail(false);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setErrorSubject(false);
  };

  const handleSpecificationsChange = (e) => {
    setSpecifications(e.target.value);
    setErrorSpecifications(false);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setErrorPhoneNumber(false);
  };

  const formHasErrors = () => {
    let hasError = false;
    if (name.trim() === "") {
      setErrorName("Name is required.");
      hasError = true;
    }

    if (phoneNumber.trim() === "") {
      setErrorPhoneNumber("Phone Number is required.");
      hasError = true;
    }

    // Check phone number is a valid phone number.
    let regex = /^\d{10}$/;
    if (!regex.test(phoneNumber)) {
      setErrorPhoneNumber("Please enter a valid phone number.");
      hasError = true;
    }

    if (email.trim() === "") {
      setErrorEmail("Email is required.");
      hasError = true;
    }
    // Check for valid email
    regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      setErrorEmail("Please enter a valid email.");
      hasError = true;
    }

    if (subject.trim() === "") {
      setErrorSubject("Subject is required.");
      hasError = true;
    }

    if (specifications.trim() === "") {
      setErrorSpecifications("Specifications are required.");
      hasError = true;
    }

    return hasError;
  };

  const clearAllFields = () => {
    setSubject("");
    setSpecifications("");
    setName("");
    setEmail("");
    setPhoneNumber("");

    setErrorName(null);
    setErrorEmail(null);
    setErrorSubject(null);
    setErrorSpecifications(null);
    setErrorPhoneNumber(null);
  };

  const handleSubmit = async () => {
    // Send the request to a representative here

    if (formHasErrors()) {
      return;
    }

    // Get map payload from local storage
    let mapPayload = getSpecialReq();

    // Send email to special requests email
    const payload = {
      name: name,
      email: email,
      subject: subject,
      specifications: specifications,
      map: mapPayload,
      phoneNumber: phoneNumber,
    };

    // Call the write_review API route
    const url = "/api/send_special_request";
    // Call the API to send the email to our dynamoDB Users table
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    clearAllFields();

    // Close the modal
    onClose(response);
  };

  // Check if any text is there.

  let mapDescriptionText = "";

  // If mapDescription exists
  try {
    if (mapDescription) {
      let textpayload = "";
      if (
        mapDescription.textPrimary ||
        mapDescription.textSecondary ||
        mapDescription.textCoordinates
      ) {
        textpayload = `The map contains text: ${mapDescription.textPrimary} ${mapDescription.textSecondary} ${mapDescription.textCoordinates}.`;
      }

      let numPinsText = "";
      if (mapDescription.pinList && mapDescription.pinList.length != 0) {
        numPinsText = `For now we're starting with a ${mapDescription.orientation} map with ${mapDescription.pinList.length} pin(s).`;
      }

      mapDescriptionText =
        `Current Map Information:` +
        `Sending ${
          mapDescription.description ? mapDescription.description : ""
        }. We'll send an email of the map with specifications you've requested. ${numPinsText} ${textpayload} The map is in the style of ${
          mapDescription.tileLayer
        }.`;
    }
  } catch (e) {
    mapDescriptionText = "";
  }

  const requestSpecificationsPlaceHolder =
    "Please describe your request. It's common to ask for a different color scheme for the map, our pins, or the text. We also get requests to map hiking trips and sailing adventures. We're happy to help with anything you'd like!";

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Send Your Request</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required={true}
            error={errorName}
          />
          <Form.Input
            label="Phone Number"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required={true}
            error={errorPhoneNumber}
          />
          <Form.Input
            label="Email Address"
            placeholder="Enter your email for reply"
            value={email}
            onChange={handleEmailChange}
            required={true}
            error={errorEmail}
          />
          <Form.Input
            label="Subject"
            placeholder="Enter subject"
            value={subject}
            onChange={handleSubjectChange}
            required={true}
            error={errorSubject}
            className={classes.semanticUiAutoCompleteStyle}
            style={{ color: "black" }}
          />
          <Form.Field
            control={TextArea}
            label="Request Specifications"
            placeholder={requestSpecificationsPlaceHolder}
            value={specifications}
            onChange={handleSpecificationsChange}
            required={true}
            error={errorSpecifications}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleSubmit} positive>
          Send Request
        </Button>
        <Button onClick={onClose} negative>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
export default SpecialRequestModal;
