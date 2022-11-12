import { Paper, Typography } from "@mui/material";
import classes from "./CreateMap.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { MapConstants } from "./MapFolder/MapConstants";
const SIZE_OPTION = "_24_36";

const CardOverlay = (props) => {
  const textPrimary = useSelector((state) => state.map.textPrimary);
  const textSecondary = useSelector((state) => state.map.textSecondary);
  const textCoordinates = useSelector((state) => state.map.textCoordinates);
  const orientation = useSelector((state) => state.map.orientation);
  const [showTextPrimary, setShowTextPrimary] = useState(true);
  const [showTextSecondary, setShowTextSecondary] = useState(true);
  const [showTextCoordinates, setShowTextCoordinates] = useState(true);
  const [paperStyle, setPaperStyle] = useState({
    height: "calc(var(--card-overlay-multiplier) * var(--poster-height))",
    width: "calc(var(--card-overlay-multiplier) * var(--poster-width))",
  });

  const padding =
    (100 * 0.5) / MapConstants.poster_size[SIZE_OPTION].full_width;
  const stylePadding = padding.toString() + "%";

  const [mapPaddingStyle, setMapPaddingStyle] = useState({
    paddingTop: stylePadding,
  });
  const styleTextPrimary = {
    position: "relative",
    fontFamily: "Semplicita",
    fontSize: "1.5rem",
    color: "black",
    padding: "-1.5rem",
  };
  const styleTextSecondary = {};
  const styleTextCoordinates = {};

  useEffect(() => {
    if (orientation === "portrait") {
      // Calculate the padding (1/2 inch) between poster edge and map.
      const padding =
        (100 * 0.5) / MapConstants.poster_size[SIZE_OPTION].full_width;
      const stylePadding = padding.toString() + "%";
      setMapPaddingStyle({ paddingTop: stylePadding });

      // Calculate Paper size. Portrait.
      const optionObj = MapConstants.poster_size[SIZE_OPTION];
      const height = optionObj.full_height * optionObj.poster_multiplier;
      const width = optionObj.full_width * optionObj.poster_multiplier;
      const style = {
        height: height.toString() + "px",
        width: width.toString() + "px",
      };
      setPaperStyle(style);
    } else {
      // Landscape Mode
      // Calculate the padding difference between map to paper.  (1/2 in real life)
      const padding =
        (100 * 0.5) / MapConstants.poster_size[SIZE_OPTION].full_height;
      const stylePadding = padding.toString() + "%";
      setMapPaddingStyle({ paddingTop: stylePadding });

      // Calculate the size of the landscape Paper.
      const optionObj = MapConstants.poster_size[SIZE_OPTION];
      const height = optionObj.full_height * optionObj.poster_multiplier;
      const width = optionObj.full_width * optionObj.poster_multiplier;
      // Flip the width and height for landscape.
      const style = {
        height: width.toString() + "px",
        width: height.toString() + "px",
      };
      setPaperStyle(style);
    }

    if (textPrimary) {
      setShowTextPrimary(true);
    } else {
      setShowTextPrimary(false);
    }

    if (textSecondary) {
      setShowTextSecondary(true);
    } else {
      setShowTextSecondary(false);
    }

    if (textCoordinates) {
      setShowTextCoordinates(true);
    } else {
      setShowTextCoordinates(false);
    }
  }, [textPrimary, textSecondary, textCoordinates, orientation]);

  return (
    <Paper style={paperStyle} className={classes.paper} elevation={24}>
      <div style={mapPaddingStyle}>{props.children}</div>
      <div className={classes.textMap}>
        {showTextPrimary && (
          <Typography className={classes.textPrimary}>{textPrimary}</Typography>
        )}
        {showTextSecondary && (
          <Typography className={classes.textSecondary}>
            {textSecondary}
          </Typography>
        )}
        {showTextCoordinates && (
          <Typography className={classes.textCoordinates}>
            {textCoordinates}
          </Typography>
        )}
      </div>
    </Paper>
  );
};
export default CardOverlay;
