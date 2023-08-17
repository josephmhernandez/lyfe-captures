import { useEffect, useState } from "react";
import { Modal, Form, TextArea, Button } from "semantic-ui-react";

const SpecialRequestModal = ({ open, onClose }) => {
  const [subject, setSubject] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mapDescription, setMapDescription] = useState({});

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSubject, setErrorSubject] = useState(false);
  const [errorSpecifications, setErrorSpecifications] = useState(false);

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

  const getSpecialReq = () => {
    // Get the last item in the local storage cart_data array.
    let cartData = JSON.parse(localStorage.getItem("cart_data"));
    if (cartData) {
      let lastItem = cartData[cartData.length - 1];
      return lastItem;
    }
    console.error("cart data:", cartData);
    return {};
  };

  useEffect(() => {
    // Get map payload from store.
    let mapPayload = getSpecialReq();
    setMapDescription(mapPayload);
  }, [open]);

  const handleSubmit = async () => {
    // You can implement the logic to send the request to a representative here

    setErrorName(name.trim() === "");
    setErrorEmail(email.trim() === "");
    setErrorSubject(subject.trim() === "");
    setErrorSpecifications(specifications.trim() === "");

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      subject.trim() === "" ||
      specifications.trim() === ""
    ) {
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

    // Close the modal
    onClose();
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

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <h1>Send Your Request</h1>
        <h2>
          An email will be sent to {`${process.env.EMAIL_SPECIAL_REQUESTS}`}.
          We'll get back to you within 24 hours!
        </h2>
        <p>{mapDescriptionText}</p>
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required={true}
          />
          {errorName && <div style={{ color: "red" }}>Name is required.</div>}
          <Form.Input
            label="Email for reply"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required={true}
          />
          {errorEmail && <div style={{ color: "red" }}>Email is required.</div>}
          <Form.Input
            label="Subject"
            placeholder="Enter subject"
            value={subject}
            onChange={handleSubjectChange}
            required={true}
          />
          {errorSubject && (
            <div style={{ color: "red" }}>Subject is required.</div>
          )}
          <Form.Field
            control={TextArea}
            label="Request Specifications"
            placeholder="Enter specifications"
            value={specifications}
            onChange={handleSpecificationsChange}
            required={true}
          />
          {errorSpecifications && (
            <div style={{ color: "red" }}>Specifications are required.</div>
          )}
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
