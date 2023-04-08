import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MapStyleDict } from "../MapFolder/MapConstants";
import { Typography } from "@mui/material";
import classes from "./DemoEnlargedTextDisplay.module.css";
const DemoEnlargedTextDisplay = () => {
  const textPrimary = useSelector((state) => state.map.textPrimary);
  const textSecondary = useSelector((state) => state.map.textSecondary);
  const textCoordinates = useSelector((state) => state.map.textCoordinates);
  const tileLayer = useSelector((state) => state.map.tileLayer);
  const transparentFlag = useSelector(
    (state) => state.map.transparentTextBlock
  );
  const [textBlockStyle, setTextBlockStyle] = useState({});
  const [bgTextDisplayStyle, setBgTextDisplayStyle] = useState({});
  const color_text_for_dict = transparentFlag ? "color_transparent" : "color";

  const size_path = "size";
  const text_block_path = "textBlock";

  useEffect(() => {
    if (textCoordinates || textPrimary || textSecondary) {
      setTextBlockStyle({
        backgroundColor:
          MapStyleDict[tileLayer]["text"][color_text_for_dict]["background"],
        borderRadius:
          MapStyleDict[tileLayer]["text"][text_block_path]["rounded"],
        padding: MapStyleDict[tileLayer]["text"][text_block_path]["padding"],
      });

      // If trnasparent and white text, div background to black.
      // If not transparent and white background, div background to black.
      // Future switch this to is a 'light' color.
      if (
        (transparentFlag &&
          MapStyleDict[tileLayer]["text"][color_text_for_dict]["primary"] ===
            "#FFFFFF") ||
        (!transparentFlag &&
          MapStyleDict[tileLayer]["text"][color_text_for_dict]["background"] ===
            "#FFFFFF")
      ) {
        setBgTextDisplayStyle({
          backgroundColor: "black",
        });
      } else {
        setBgTextDisplayStyle({
          backgroundColor: "transparent",
        });
      }
    }
  }, [textPrimary, textSecondary, textCoordinates, tileLayer, transparentFlag]);

  const styleTextPrimary = {
    fontFamily: MapStyleDict[tileLayer]["text"]["fontFamily"]["primary"],
    fontSize: MapStyleDict[tileLayer]["text"][size_path]["primary"] + "px",
    color: MapStyleDict[tileLayer]["text"][color_text_for_dict]["primary"],
  };
  const styleTextSecondary = {
    fontFamily: MapStyleDict[tileLayer]["text"]["fontFamily"]["secondary"],
    fontSize: MapStyleDict[tileLayer]["text"][size_path]["secondary"] + "px",
    color: MapStyleDict[tileLayer]["text"][color_text_for_dict]["secondary"],
  };

  const styleTextCoordinates = {
    fontFamily: MapStyleDict[tileLayer]["text"]["fontFamily"]["coordinate"],
    fontSize: MapStyleDict[tileLayer]["text"][size_path]["coordinate"] + "px",
    color: MapStyleDict[tileLayer]["text"][color_text_for_dict]["coordinate"],
  };

  return (
    <div className={classes.largeBg} style={bgTextDisplayStyle}>
      <div style={textBlockStyle} className={classes.textMap}>
        {textPrimary && (
          <Typography style={styleTextPrimary}>{textPrimary}</Typography>
        )}
        {textSecondary && (
          <Typography style={styleTextSecondary}>{textSecondary}</Typography>
        )}
        {textCoordinates && (
          <Typography style={styleTextCoordinates}>
            {textCoordinates}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default DemoEnlargedTextDisplay;
