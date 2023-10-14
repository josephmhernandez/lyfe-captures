import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";

import classes from "./Orientation.module.css";
import { Dropdown } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { mapActions } from "../../../store/map-slice";
import { SIZE_OPTION, SIZE_DROPDOWN_OPTIONS } from "../MapFolder/MapConstants";

const Orientation = () => {
  const orientation = useSelector((state) => state.map.orientation);
  const dispatch = useDispatch();

  const handleOrientationChange = (event) => {
    dispatch(mapActions.changeOrientation(event.target.value));
  };

  let options = SIZE_DROPDOWN_OPTIONS;

  return (
    <div className={classes.container}>
      <p>Select size</p>
      <Dropdown
        value={SIZE_OPTION}
        placeholder={"24x36 in. (Only size available)"}
        fluid
        selection
        options={options}
        label="Size"
      />
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="orientation-radio-buttons-group-custom-map"
          defaultValue={orientation}
          name="orientation-radio-buttons-group"
          onChange={handleOrientationChange}
          className={classes.radioGroup}
        >
          <FormControlLabel
            value="portrait"
            control={<Radio color="primary" />}
            label={<Typography variant="p">Portrait</Typography>}
            className={classes.radioGroup}
            // className={classes.container}
          />
          <FormControlLabel
            value="landscape"
            control={<Radio color="primary" />}
            label={<Typography variant="p">Landscape</Typography>}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default Orientation;
