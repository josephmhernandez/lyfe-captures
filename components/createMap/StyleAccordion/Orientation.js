import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";

import classes from "./Orientation.module.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import getConfig from "next/config";
import { useDispatch } from "react-redux";
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
  typography: {
    allVariants: {
      fontFamily: "var(--primary-font)",
      fontWeight: "var(--accordion-font-weight)",
      fontSize: "var(--accordion-sub-font-size)",
    },
  },
});

const Orientation = () => {
  const dispatch = useDispatch();

  const handleOrientationChange = (event) => {
    dispatch(mapActions.changeOrientation(event.target.value));
  };

  return (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <FormControl>
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
            />
            <FormControlLabel
              value="landscape"
              control={<Radio color="primary" />}
              label="Landscape"
            />
          </RadioGroup>
        </FormControl>
      </ThemeProvider>
    </div>
  );
};
export default Orientation;
