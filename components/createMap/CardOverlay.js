import { Paper, Typography } from "@mui/material";
import classes from "./CreateMap.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { MapConstants, MapStyleDict } from "./MapFolder/MapConstants";
const SIZE_OPTION = "_24_36";
const STYLING_OPTION = "basic";

const CardOverlay = (props) => {
  const textPrimary = useSelector((state) => state.map.textPrimary);
  const textSecondary = useSelector((state) => state.map.textSecondary);
  const textCoordinates = useSelector((state) => state.map.textCoordinates);
  const orientation = useSelector((state) => state.map.orientation);
  const tileLayer = useSelector((state) => state.map.tileLayer);
  const transparentFlag = useSelector(
    (state) => state.map.transparentTextBlock
  );
  const [showTextPrimary, setShowTextPrimary] = useState(true);
  const [showTextSecondary, setShowTextSecondary] = useState(true);
  const [showTextCoordinates, setShowTextCoordinates] = useState(true);
  const [paperStyle, setPaperStyle] = useState({
    height: "calc(var(--card-overlay-multiplier) * var(--poster-height))",
    width: "calc(var(--card-overlay-multiplier) * var(--poster-width))",
  });
  const [textBlockStyle, setTextBlockStyle] = useState({});
  const [styling, setStyling] = useState(STYLING_OPTION);
  const [mapSizeOption, setMapSizeOption] = useState(SIZE_OPTION);

  const color_text_for_dict = transparentFlag ? "color_transparent" : "color";

  const styleTextPrimary = {
    fontFamily: MapStyleDict[tileLayer]["text"]["fontFamily"]["primary"],
    fontSize: MapStyleDict[tileLayer]["text"]["size"]["primary"] + "px",
    color: MapStyleDict[tileLayer]["text"][color_text_for_dict]["primary"],
  };
  const styleTextSecondary = {
    fontFamily: MapStyleDict[tileLayer]["text"]["fontFamily"]["secondary"],
    fontSize: MapStyleDict[tileLayer]["text"]["size"]["secondary"] + "px",
    color: MapStyleDict[tileLayer]["text"][color_text_for_dict]["secondary"],
  };

  const styleTextCoordinates = {
    fontFamily: MapStyleDict[tileLayer]["text"]["fontFamily"]["coordinate"],
    fontSize: MapStyleDict[tileLayer]["text"]["size"]["coordinate"] + "px",
    color: MapStyleDict[tileLayer]["text"][color_text_for_dict]["coordinate"],
  };

  useEffect(() => {
    if (orientation === "portrait") {
      // Calculate Paper size. Portrait.
      const optionObj = MapConstants.poster_size[mapSizeOption];
      const height = optionObj.full_height * optionObj.poster_multiplier;
      const width = optionObj.full_width * optionObj.poster_multiplier;
      const style = {
        height: height.toString() + "px",
        width: width.toString() + "px",
      };
      setPaperStyle(style);
    } else {
      // Calculate the size of the landscape Paper.
      const optionObj = MapConstants.poster_size[mapSizeOption];
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
    if (textCoordinates || textPrimary || textSecondary) {
      let marginTop = 0;
      if (textPrimary) {
        marginTop +=
          parseInt(MapStyleDict[tileLayer]["text"]["size"]["primary"]) * 1.5;
      }
      if (textSecondary) {
        marginTop +=
          parseInt(MapStyleDict[tileLayer]["text"]["size"]["secondary"]) * 1.5;
      }
      if (textCoordinates) {
        marginTop +=
          parseInt(MapStyleDict[tileLayer]["text"]["size"]["coordinate"]) * 1.5;
      }
      marginTop +=
        parseInt(MapStyleDict[tileLayer]["text"]["textBlock"]["padding"]) * 2;

      marginTop +=
        parseFloat(MapStyleDict[tileLayer]["text"]["textBlock"]["spacing"]) *
        parseInt(MapConstants.poster_size[mapSizeOption]["poster_multiplier"]);

      marginTop = marginTop * -1;

      setTextBlockStyle({
        "margin-top": marginTop,
        overflow: "hidden",
        backgroundColor:
          MapStyleDict[tileLayer]["text"][color_text_for_dict]["background"],
        zIndex: "10",
        borderRadius: MapStyleDict[tileLayer]["text"]["textBlock"]["rounded"],
        padding: MapStyleDict[tileLayer]["text"]["textBlock"]["padding"],
      });
    } else {
      setTextBlockStyle({
        // "margin-top": "-100px",
        overflow: "hidden",
        backgroundColor:
          MapStyleDict[tileLayer]["text"][color_text_for_dict]["background"],
        zIndex: "10",
        borderRadius: MapStyleDict[tileLayer]["text"]["textBlock"]["rounded"],
      });
    }
  }, [
    textPrimary,
    textSecondary,
    textCoordinates,
    orientation,
    tileLayer,
    transparentFlag,
  ]);

  return (
    <Paper style={paperStyle} className={classes.paper} elevation={24}>
      <div style={{ zIndex: 1 }}>{props.children}</div>
      <div style={textBlockStyle} className={classes.textMap}>
        {showTextPrimary && (
          <Typography style={styleTextPrimary}>{textPrimary}</Typography>
        )}
        {showTextSecondary && (
          <Typography style={styleTextSecondary}>{textSecondary}</Typography>
        )}
        {showTextCoordinates && (
          <Typography style={styleTextCoordinates}>
            {textCoordinates}
          </Typography>
        )}
      </div>
    </Paper>
  );
};
export default CardOverlay;
