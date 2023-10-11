import { Button } from "semantic-ui-react";
import { BTN_STYLE } from "../../constants/UiConstants";
import classes from "./SpecialRequestInstructions.module.css";
import { useState } from "react";

const SpecialRequestInstructions = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleShowInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  let btnText = showInstructions ? "Hide" : "Show Instructions";

  return (
    <div className={classes.noteContainer}>
      <p>
        {/* <span style={{ fontWeight: "bold" }}>Please Note:</span> */}
        <span style={{ "font-weight": "bold" }}>
          Have a Tailored Request?
        </span>{" "}
        - Use this page to start your design
      </p>
      <div>
        <Button style={BTN_STYLE} onClick={handleShowInstructions}>
          {btnText}
        </Button>
      </div>

      {showInstructions && (
        <ol className={classes.listInstructions}>
          <li>
            <p>Start your design as best you can</p>
          </li>
          <li>
            <p>Click - "Send Tailored Request"</p>
          </li>
          <li>
            <p>
              Fill out the form with your custom map specifications and contact
              info
            </p>
          </li>
          <li>
            <p>We'll respond by tomorrow with a rendering of your map</p>
          </li>
        </ol>
      )}
    </div>
  );
};

export default SpecialRequestInstructions;
