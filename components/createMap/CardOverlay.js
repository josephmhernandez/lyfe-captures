import { Paper, Typography } from "@mui/material";
import classes from "./CreateMap.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  DEFAULT_FLAG_BG_IMG_CODE,
  MapConstants,
  MapStyleDict,
} from "./MapFolder/MapConstants";
import { getPublicImage } from "../../utils/awsFunctions";
import { getImgUrl } from "../../utils/helper_methods";
import { map } from "leaflet";

const CardOverlay = (props) => {
  const textPrimary = useSelector((state) => state.map.textPrimary);
  const textSecondary = useSelector((state) => state.map.textSecondary);
  const textCoordinates = useSelector((state) => state.map.textCoordinates);
  const orientation = useSelector((state) => state.map.orientation);
  const tileLayer = useSelector((state) => state.map.tileLayer);
  const bgImgCode = useSelector((state) => state.map.bgImgCode);

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
  const [mapSizeOption, setMapSizeOption] = useState(props.SIZE_OPTION);
  const [prevBgImgCode, setPrevBgImgCode] = useState(bgImgCode);
  const [urlImgBg, setUrlImgBg] = useState(null);
  const [loadingBgImg, setLoadingBgImg] = useState(false);
  const [bgImgStyle, setBgImgStyle] = useState({});

  const color_text_for_dict = transparentFlag ? "color_transparent" : "color";

  const is_mobile = props.SIZE_OPTION.includes("demo");
  const size_path = is_mobile ? "size_demo" : "size";
  const text_block_path = is_mobile ? "text_block_demo" : "textBlock";

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

  const loadBgImg = async () => {
    console.log("compare: ", bgImgCode, prevBgImgCode);

    if (bgImgCode != prevBgImgCode && loadingBgImg == false) {
      setLoadingBgImg(true);
      setPrevBgImgCode(bgImgCode);
      const imgUrl = await getPublicImage(getImgUrl(bgImgCode));
      setUrlImgBg(imgUrl);
      setLoadingBgImg(false);
    }
  };

  useEffect(() => {
    let paperStyle = {};
    let bgImgStyle = {
      position: "absolute",
      opacity: 1,
      zIndex: "0",
      overflow: "hidden",
    };

    if (orientation === "portrait") {
      // Calculate Paper size. Portrait.
      const optionObj = MapConstants.poster_size[mapSizeOption];
      const height = optionObj.full_height * optionObj.poster_multiplier;
      const width = optionObj.full_width * optionObj.poster_multiplier;
      paperStyle = {
        ...paperStyle,
        height: height.toString() + "px",
        width: width.toString() + "px",
      };
    } else {
      // Calculate the size of the landscape Paper.
      const optionObj = MapConstants.poster_size[mapSizeOption];
      const height = optionObj.full_height * optionObj.poster_multiplier;
      const width = optionObj.full_width * optionObj.poster_multiplier;
      // Flip the width and height for landscape.
      paperStyle = {
        ...paperStyle,
        height: width.toString() + "px",
        width: height.toString() + "px",
      };
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
          parseInt(MapStyleDict[tileLayer]["text"][size_path]["primary"]) * 1.5;
      }
      if (textSecondary) {
        marginTop +=
          parseInt(MapStyleDict[tileLayer]["text"][size_path]["secondary"]) *
          1.5;
      }
      if (textCoordinates) {
        marginTop +=
          parseInt(MapStyleDict[tileLayer]["text"][size_path]["coordinate"]) *
          1.5;
      }
      marginTop +=
        parseInt(MapStyleDict[tileLayer]["text"][text_block_path]["padding"]) *
        2;

      marginTop +=
        parseFloat(
          MapStyleDict[tileLayer]["text"][text_block_path]["spacing"]
        ) *
        parseInt(MapConstants.poster_size[mapSizeOption]["poster_multiplier"]);

      marginTop = marginTop * -1;

      setTextBlockStyle({
        "margin-top": marginTop,
        overflow: "hidden",
        backgroundColor:
          MapStyleDict[tileLayer]["text"][color_text_for_dict]["background"],
        zIndex: "10",
        borderRadius:
          MapStyleDict[tileLayer]["text"][text_block_path]["rounded"],
        padding: MapStyleDict[tileLayer]["text"][text_block_path]["padding"],
      });
    } else {
      setTextBlockStyle({
        overflow: "hidden",
        backgroundColor:
          MapStyleDict[tileLayer]["text"][color_text_for_dict]["background"],
        zIndex: "10",
        borderRadius:
          MapStyleDict[tileLayer]["text"][text_block_path]["rounded"],
      });
    }

    // Set the background the flag code if we have one.
    if (bgImgCode) {
      loadBgImg();

      // Set Image Background Style as the URL
      bgImgStyle = {
        ...bgImgStyle,
        backgroundImage: `url(${urlImgBg})`,
        backgroundSize: "cover",
        width: paperStyle.width,
        height: paperStyle.height,
      };

      // If portrait we want to rotate the background image.
      if (orientation === "portrait") {
        const optionObj = MapConstants.poster_size[mapSizeOption];
        const height = optionObj.full_height * optionObj.poster_multiplier;
        const width = optionObj.full_width * optionObj.poster_multiplier;
        const topSlide = (height - width) / 2;
        const rightSlide = (height - width) / -2 + "px";

        bgImgStyle = {
          ...bgImgStyle,

          width: paperStyle.height,
          height: paperStyle.width,
          top: topSlide,
          right: rightSlide,
          transform: "rotate(90deg)",
        };
      }
    } else {
      console.log("NO BG IMG CODE");
      bgImgStyle = {
        ...bgImgStyle,
        backgroundColor: null,
        backgroundImage: null,
        background: null,
      };
      setPrevBgImgCode("");
    }

    setPaperStyle(paperStyle);
    setBgImgStyle(bgImgStyle);
  }, [
    textPrimary,
    textSecondary,
    textCoordinates,
    orientation,
    tileLayer,
    transparentFlag,
    bgImgCode,
    urlImgBg,
  ]);

  return (
    <Paper
      style={{ ...paperStyle, zIndex: 1 }}
      className={classes.paper}
      elevation={24}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        <div id="bgImg" style={bgImgStyle}></div>
        <div style={{ zIndex: 1 }}>{props.children}</div>
      </div>

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
      {/* </div> */}
    </Paper>
  );
};
export default CardOverlay;
