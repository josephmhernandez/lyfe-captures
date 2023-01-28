import TextField from "@mui/material/TextField";
import classes from "./Text.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { mapActions } from "../../../store/map-slice";

const Text = (props) => {
  const dispatch = useDispatch();

  const [showAddBtn, setShowAddBtn] = useState(true);
  const [showRemoveBtn, setShowRemoveBtn] = useState(false);
  const textPrimary = useSelector((state) => state.map.textPrimary);
  const textSecondary = useSelector((state) => state.map.textSecondary);

  const handlePrimaryTextChange = (event) => {
    dispatch(mapActions.setTextPrimary(event.target.value));
  };

  const handleSecondaryTextChange = (event) => {
    dispatch(mapActions.setTextSecondary(event.target.value));
  };

  const handleAddLngLat = (event) => {
    setShowAddBtn(false);
    setShowRemoveBtn(true);
    dispatch(mapActions.setAddLngLatFlag(true));
    dispatch(mapActions.addTextCoordinate());
  };

  const handleRemoveLngLat = (event) => {
    setShowAddBtn(true);
    setShowRemoveBtn(false);
    dispatch(mapActions.setAddLngLatFlag(false));
    dispatch(mapActions.removeTextCoordinate());
  };

  const handleRemoveAllText = (event) => {
    setShowAddBtn(true);
    setShowRemoveBtn(false);
    dispatch(mapActions.removeAllText());
  };

  return (
    <div className={classes.container}>
      <TextField
        onChange={handlePrimaryTextChange}
        label="Primary Text"
        color="primary"
        value={textPrimary}
        inputProps={{ maxLength: process.env.MAX_CHARS_PRIMARY }}
      />
      <TextField
        onChange={handleSecondaryTextChange}
        label="Secondary Text"
        color="primary"
        value={textSecondary}
        inputProps={{ maxLength: process.env.MAX_CHARS_SECONDARY }}
      />
      {showAddBtn && (
        <button className="ui positive button" onClick={handleAddLngLat}>
          Add Coordinates
        </button>
      )}
      {showRemoveBtn && (
        <button className="ui negative button" onClick={handleRemoveLngLat}>
          Remove Coordinates
        </button>
      )}
      <button className="ui negative button" onClick={handleRemoveAllText}>
        Remove All Text
      </button>
    </div>
  );
};

export default Text;
