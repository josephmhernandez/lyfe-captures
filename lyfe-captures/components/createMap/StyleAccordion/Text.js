import { BootstrapButton } from "../../ui/CustomButtons";
import TextField from "@mui/material/TextField";
import classes from "./Text.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import getConfig from "next/config";
import { useState } from "react";
const { publicRuntimeConfig } = getConfig();
const theme = createTheme({
  palette: {
    primary: {
      main: publicRuntimeConfig.primaryColor,
    },
  },
});

const Text = () => {
  const [showAddBtn, setShowAddBtn] = useState(true);
  const [showRemoveBtn, setShowRemoveBtn] = useState(false);
  const handlePrimaryTextChange = (event) => {};

  const handleSecondaryTextChange = (event) => {};

  const handleAddLngLat = (event) => {
    setShowAddBtn(false);
    setShowRemoveBtn(true);
  };

  const handleRemoveLngLat = (event) => {
    setShowAddBtn(true);
    setShowRemoveBtn(false);
  };
  return (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <TextField label="Primary Text" color="primary" />
        <TextField label="Secondary Text" color="primary" />
        {showAddBtn && <BootstrapButton
          onClick={handleAddLngLat}
        >{`Add Lng-Lat`}</BootstrapButton>}
        {showRemoveBtn && <BootstrapButton
          onClick={handleRemoveLngLat}
        >{`Remove Lng - Lat`}</BootstrapButton>}
      </ThemeProvider>
    </div>
  );
};

export default Text;
