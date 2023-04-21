import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Checkbox } from "semantic-ui-react";
import { TextField } from "@mui/material";
import { Button } from "semantic-ui-react";
import classes from "./RyanPrintOptions.module.css";
import { mapActions } from "../../../../store/map-slice";
const RyanPrintOptions = () => {
  const [userMsg, setUserMsg] = useState("");
  const [isSquare, setIsSquare] = useState(false);
  const [email, setEmail] = useState("");
  const [whiteToXHexCode, setWhiteToXHexCode] = useState("");
  const [blackToxHexCode, setBlackToXHexCode] = useState("");
  const [nameMap, setNameMap] = useState("");
  const tileLayer = useSelector((state) => state.map.tileLayer);

  const dispatch = useDispatch();
  const handleSetSquareMap = (e, { checked }) => {
    if (checked) {
      setIsSquare(true);
      dispatch(mapActions.setSizeOption("_square_demo"));
      dispatch(mapActions.changeOrientation("landscape"));
      // Set Map to Square
    } else {
      dispatch(mapActions.setSizeOption("_24_36_demo"));
      // Set Map back to demo settings.
      setIsSquare(false);
    }
  };

  const handlePrintMap = () => {
    // Send email, isSquare, whiteToXHexCode, blackToXHexCode to backend
    setUserMsg("Sending map to email...");
    /*Check if email is valid */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setUserMsg("Invalid email. Not sending.");
      return;
    }

    /* Check if hex codes are valid */
    // Check if text in a hex code field
    if (whiteToXHexCode.length != 0 || blackToxHexCode.length != 0) {
      // Check tileLayer
      if (tileLayer != "modern-light") {
        setUserMsg(
          "Not using modern light tile layer. Not sending. Clear hex codes to send map."
        );
        return;
      }
      /* Check if hex codes are valid */
      const hexCodeRegex = /^#?([a-f0-9]{3}|[a-f0-9]{6})$/i;
      if (!hexCodeRegex.test(whiteToXHexCode)) {
        setUserMsg("Invalid whiteToXHexCode. Not sending.");
        return;
      }
      if (!hexCodeRegex.test(blackToxHexCode)) {
        setUserMsg("Invalid blackToxHexCode. Not sending.");
        return;
      }
    }

    dispatch(
      mapActions.addMapToCart({
        name_the_map: nameMap,
        is_square: isSquare,
        email_to_send: email,
        white_to_x_hex_code: whiteToXHexCode,
        black_to_x_hex_code: blackToxHexCode,
      })
    );

    let cart_data = localStorage.getItem("cart_data");

    console.log("cart_data", cart_data);
    // Call api to create map and send email.
    const url = "/api/demo-maps/email_map";
    // Call the API to send the map to our email.
    const response = fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        InvocationType: "Event",
      },
      body: cart_data,
    });

    console.log("response", response);
    localStorage.removeItem("cart_data");

    setUserMsg("Map sent to email!");

    // Wait 5 seconds and clear userMsg
    setTimeout(() => {
      setUserMsg("");
    }, 5000);
    setIsSquare(false);
  };

  return (
    /* Checkbox for Ryan's print options */
    <div className={classes.container}>
      <Checkbox
        onChange={handleSetSquareMap}
        label="Make Square Map"
        checked={isSquare}
      />
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        label="Email"
      />
      {/* <p>
        Only use on modern white background map :) Only use this if you want to
        change colors. Can't render new colors live but send the hex codes and
        I'll convert colors on the backend Format: #23d160
      </p>
      <TextField
        onChange={(e) => setWhiteToXHexCode(e.target.value)}
        value={whiteToXHexCode}
        label="White to X Hex Code"
      />
      <TextField
        onChange={(e) => setBlackToXHexCode(e.target.value)}
        value={blackToxHexCode}
        label="Black to X Hex Code"
      /> */}
      <p>Don't get maps confused. Name your map output file</p>
      <TextField
        onChange={(e) => setNameMap(e.target.value)}
        value={nameMap}
        label="Name Map"
      />
      {userMsg && <p style={{ color: "red" }}>{userMsg}</p>}
      <Button
        style={{
          "background-color": "#23d160",
          color: "white",
          "border-radius": "100px",
          "font-family": "var(--page-heading-font-family)",
          "font-size": "var(--page-paragraph-font-size)",
          "font-weight": "400",
        }}
        onClick={handlePrintMap}
      >
        Send map to email
      </Button>
    </div>
  );
};

export default RyanPrintOptions;
