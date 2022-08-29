import {
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";

import classes from "./Orientation.module.css";

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
  typography: {
    allVariants: {
      fontFamily: "var(--primary-font)",
      fontWeight: "var(--accordion-font-weight)",
      fontSize: "var(--accordion-sub-font-size)",
    },
  },
});

const Orientation = () => {
  return (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="orietntation-radio-buttons-group-custom-map"
            defaultValue="portrait"
            name="orientation-radio-buttons-group"
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
