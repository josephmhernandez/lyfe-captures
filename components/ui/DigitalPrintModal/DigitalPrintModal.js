import { Modal, Form, TextArea, Button } from "semantic-ui-react";
import { useState } from "react";
import { getSpecialReq } from "../../../utils/helper_methods";
const DigitalPrintModal = ({ open, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const clearAllFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleDigitalPrint = async () => {
    // Send email to user with digital print.
    let mapPayload = getSpecialReq();

    const url = "/api/write_digital_print";

    const payload = {
      email: email,
      mapInput: mapPayload,
      firstName: firstName,
      lastName: lastName,
    };

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });

    // Close modal.
    onClose(response);
    clearAllFields();
  };

  return (
    <Modal open={open} onClose={onClose} closeIcon size="small">
      <Modal.Header>We'll send you a digital copy free of charge</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First name"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Input
            fluid
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose} negative>
          Cancel
        </Button>
        <Button onClick={handleDigitalPrint} positive>
          Confirm
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
export default DigitalPrintModal;
