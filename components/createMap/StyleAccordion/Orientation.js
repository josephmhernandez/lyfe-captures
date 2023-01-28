import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";

import classes from "./Orientation.module.css";
import getConfig from "next/config";
import { useDispatch } from "react-redux";
import { mapActions } from "../../../store/map-slice";

const Orientation = () => {
  const dispatch = useDispatch();

  const handleOrientationChange = (event) => {
    dispatch(mapActions.changeOrientation(event.target.value));
  };

  return (
    <div className={classes.container}>
      <FormControl className={classes.container}>
        <RadioGroup
          row
          aria-labelledby="orientation-radio-buttons-group-custom-map"
          defaultValue="portrait"
          name="orientation-radio-buttons-group"
          onChange={handleOrientationChange}
        >
          <FormControlLabel
            value="portrait"
            control={<Radio color="primary" />}
            label="Portrait"
            className={classes.container}
          />
          <FormControlLabel
            value="landscape"
            control={<Radio color="primary" />}
            label="Landscape"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default Orientation;
