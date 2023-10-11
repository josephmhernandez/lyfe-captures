import { Dropdown, Button, Icon } from "semantic-ui-react";
import _ from "lodash";
import { BG_IMG_MAP } from "../../../../constants/BgImgConstants";
import { useDispatch, useSelector } from "react-redux";
import {
  BACKGROUND_RECENT_BGS_SIZE,
  getButtonStyle,
} from "../../../../constants/UiConstants";
import { useEffect, useState } from "react";
import { mapActions } from "../../../../store/map-slice";
import classes from "./Background.module.css";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

const Background = () => {
  const [recentBgs, setRecentBgs] = useState([]);
  const [jumpText, setJumpText] = useState("");
  const [jumpValue, setJumpValue] = useState("");
  const bgImgCode = useSelector((state) => state.map.bgImgCode);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    const newJumpText = _.get(BG_IMG_MAP, `${bgImgCode}.jump_text`, "");
    const newJumpValue = _.get(BG_IMG_MAP, `${bgImgCode}.jump_code`, "");
    setJumpText(newJumpText);
    setJumpValue(newJumpValue);
  }, [bgImgCode]);

  const handleDropdownChange = (e, { value }) => {
    e.preventDefault();
    dispatch(mapActions.setBgImgCode(value));
    // Check to see if value is in recentBgs
    const updatedRecentBgs = [value, ...recentBgs];
    if (recentBgs.length > BACKGROUND_RECENT_BGS_SIZE) {
      updatedRecentBgs.pop();
    }
    setRecentBgs(updatedRecentBgs);
  };

  const options = Object.keys(BG_IMG_MAP)
    .map((bgImg) => {
      const display_text = BG_IMG_MAP[bgImg].display_name;
      return {
        key: bgImg,
        text: display_text,
        value: bgImg,
      };
    })
    .sort((a, b) => {
      // Alphabetical Sort
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      return a < b ? -1 : a > b ? 1 : 0;
    });

  const handleJumpTo = (e, { value }) => {
    e.preventDefault();
    dispatch(mapActions.setBgImgCode(jumpValue));
  };

  const handleDisplayRendering = (e) => {
    e.preventDefault();
    // Start here.
    console.log("handle display rendering");
  };

  return (
    <div className={classes.container}>
      <a onClick={handleDisplayRendering}>
        {" "}
        <Icon name="question circle outline" />
        What will it look like?
      </a>
      {/* Render Search Bar */}
      <Dropdown
        placeholder="Search for a background image"
        fluid
        search
        selection
        options={options}
        onChange={handleDropdownChange}
        value={bgImgCode}
      />
      {/* Quick Jump Checkbox */}
      <div className={classes.spacing}>
        {bgImgCode && (
          <Button style={getButtonStyle(isMobile)} onClick={handleJumpTo}>
            {jumpText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Background;
