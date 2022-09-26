import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Image from "next/image";

import { pinList } from "./PinList";
import classes from "./Pin.module.css";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import getConfig from "next/config";

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
  const [selectedPin, setSelectedPin] = React.useState("");
  const [sizePin, setSizePin] = React.useState(startPinSize);
  const handleChange = (event) => {
    setSelectedPin(event.target.value);
  };

  const handlePinSliderChange = (event, newValue) => {
    setSizePin(newValue);
  };

  return (
    <div>
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
            {pinList.map((pin) => {
              return (
                <MenuItem key={pin.value} value={pin.value}>
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
        <BootstrapButton variant="contained">Add Pin</BootstrapButton>
      </div>
      <ThemeProvider theme={theme}>
        <div className={classes.sliderContainer}>
          <Image src={circlePinPath} width={20} height={20} />
          <Slider
            defaultValue={startPinSize}
            min={30}
            max={300}
            step={10}
            aria-label="pin-size"
            value={sizePin}
            onChange={handlePinSliderChange}
            color="secondary"
          />
          <Image src={circlePinPath} width={60} height={60} />
        </div>
      </ThemeProvider>
    </div>
  );
};
export default Pin;
