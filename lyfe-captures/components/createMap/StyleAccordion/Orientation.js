import {
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Orientation = () => {
  return (
    <FormControl>
      <FormLabel id="orientation-radio-buttons-group-custom-map">
        Orientation
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="orietntation-radio-buttons-group-custom-map"
        defaultValue="portrait"
        name="orientation-radio-buttons-group"
      >
        <FormControlLabel
          value="portrait"
          control={<Radio />}
          label="Portrait"
        />
        <FormControlLabel
          value="landscape"
          control={<Radio />}
          label="Landscape"
        />
      </RadioGroup>
    </FormControl>
  );
};
export default Orientation;
