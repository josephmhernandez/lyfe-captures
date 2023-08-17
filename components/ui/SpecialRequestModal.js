import { useState } from "react";
import { Modal, Form, TextArea, Button } from "semantic-ui-react";

const SpecialRequestModal = ({ open, onClose }) => {
  const [subject, setSubject] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleSpecificationsChange = (e) => {
    setSpecifications(e.target.value);
  };

  const handleSubmit = () => {
    // You can implement the logic to send the request to a representative here
    // For now, let's just console log the values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Specifications:", specifications);

    // Close the modal
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <h1>Send Your Request</h1>
        <h2>
          An email will be sent to {`${process.env.EMAIL_SPECIAL_REQUESTS}`}.
          We'll get back to you within 24 hours!
        </h2>
      </Modal.Header>
      {/* <Modal.Header>We'll get </Modal.Header> */}
      <Modal.Content>
        <Form>
          <Form.Input
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          <Form.Input
            label="Email for reply"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <Form.Input
            label="Subject"
            placeholder="Enter subject"
            value={subject}
            onChange={handleSubjectChange}
          />
          <Form.Field
            control={TextArea}
            label="Specifications"
            placeholder="Enter specifications"
            value={specifications}
            onChange={handleSpecificationsChange}
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
