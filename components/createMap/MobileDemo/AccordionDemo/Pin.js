import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Image from "next/image";

import { PinListConstants } from "./PinListConstants";
import classes from "./Pin.module.css";
import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";

import { mapActions } from "../../../../store/map-slice";

const defaultSliderPinImgPath = PinListConstants[0].image;

const startPinSize = 40;

const Pin = () => {
  const dispatch = useDispatch();
  const [selectedPin, setSelectedPin] = React.useState("heart-black-white");
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
        <button className="ui positive button" onClick={handleAddPin}>
          Add Pin
        </button>
      </div>

      <div className={classes.sliderContainer}>
        <Image src={defaultSliderPinImgPath} width={30} height={30} />
        <Slider
          defaultValue={startPinSize}
          min={10}
          max={90}
          step={5}
          aria-label="pin-size"
          value={sizePin}
          onChange={handlePinSliderChange}
        />
        <Image src={defaultSliderPinImgPath} width={100} height={100} />
      </div>
      <div className={classes.removePins}>
        <button className="ui negative button" onClick={handleRemovePins}>
          Remove Pins
        </button>
      </div>
    </div>
  );
};
export default Pin;
