import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Image from "next/image";

import { PinListConstants } from "./PinListConstants";
import classes from "./Pin.module.css";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import getConfig from "next/config";
import { mapActions } from "../../../store/map-slice";

const { publicRuntimeConfig } = getConfig();

const theme = createTheme({
  palette: {
    primary: {
      main: publicRuntimeConfig.primaryColor,
    },
    secondary: {
      main: publicRuntimeConfig.primaryColor,
    },
  },
});

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "var(--purple-dark-color)",
  borderColor: "white",
  fontFamily: "var(--font-family-primary)",
  color: "white",
  "&:hover": {
    backgroundColor: "var(--purple-light-color)",
    borderColor: "var(--purple-dark-color)",
    boxShadow: "none",
  },
});

const circlePinPath = "/pins/circle-pin-square-black-white.png";

const startPinSize = 40;

const Pin = () => {
  const dispatch = useDispatch();
  const [selectedPin, setSelectedPin] = React.useState("heart-white-black");
  const [sizePin, setSizePin] = React.useState(startPinSize);
  const handleChange = (event) => {
    setSelectedPin(event.target.value);
  };

  const handlePinSliderChange = (event, newValue) => {
    setSizePin(newValue);
  };

  const handleAddPin = (event) => {
    const pinSpecs = {
      style: selectedPin,
      size: sizePin,
    };
    dispatch(mapActions.addPinToMap(pinSpecs));
  };

  const handleRemovePins = (event) => {
    event.preventDefault();
    dispatch(mapActions.removePinsFromMap());
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className={classes.container}>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Select Pin
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={selectedPin}
              onChange={handleChange}
              autoWidth
              label="Select-Pin"
              variant="standard"
            >
              {PinListConstants.map((pin) => {
                return (
                  <MenuItem
                    className={classes.item}
                    key={pin.value}
                    value={pin.value}
                    selected
                  >
                    <Image
                      src={pin.image}
                      alt={pin.value}
                      width={40}
                      height={40}
                    />
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <BootstrapButton variant="contained" onClick={handleAddPin}>
            Add Pin
          </BootstrapButton>
        </div>

        <div className={classes.sliderContainer}>
          <Image src={circlePinPath} width={30} height={30} />
          <Slider
            defaultValue={startPinSize}
            min={20}
            max={90}
            step={5}
            aria-label="pin-size"
            value={sizePin}
            onChange={handlePinSliderChange}
            color="secondary"
          />
          <Image src={circlePinPath} width={100} height={100} />
        </div>
        <div className={classes.removePins}>
          <BootstrapButton variant="contained" onClick={handleRemovePins}>
            Remove Pins
          </BootstrapButton>
        </div>
      </ThemeProvider>
    </div>
  );
};
export default Pin;
