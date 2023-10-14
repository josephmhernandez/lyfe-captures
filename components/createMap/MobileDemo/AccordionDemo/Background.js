import { Dropdown, Button, Icon } from "semantic-ui-react";
import _ from "lodash";
import { BG_IMG_MAP } from "../../../../constants/BgImgConstants";
import { useDispatch, useSelector } from "react-redux";
import {
  BACKGROUND_RECENT_BGS_SIZE,
  IMG_URL_BLUR_DISPLAY_MAP_BG_IMG,
  getAccordionButtonStyle,
} from "../../../../constants/UiConstants";
import { useEffect, useState } from "react";
import { mapActions } from "../../../../store/map-slice";
import classes from "./Background.module.css";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { getPublicImage } from "../../../../utils/awsFunctions";
import { Modal } from "semantic-ui-react";
import { toast } from "react-toastify";
import Image from "next/image";

const Background = () => {
  const [recentBgs, setRecentBgs] = useState([]);
  const [jumpText, setJumpText] = useState("");
  const [jumpValue, setJumpValue] = useState("");
  const [loadingDisplayImage, setLoadingDisplayImage] = useState(false);
  const [displayImage, setDisplayImage] = useState(undefined);
  const [openDisplayImageModal, setOpenDisplayImageModal] = useState(false);
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
    const updatedRecentBgs = [value, ...recentBgs];
    if (recentBgs.length > BACKGROUND_RECENT_BGS_SIZE) {
      updatedRecentBgs.pop();
    }
    setRecentBgs(updatedRecentBgs);
  };

  const handleDisplayRendering = (e) => {
    e.preventDefault();
    setLoadingDisplayImage(true);

    // Check empty background image code
    if (bgImgCode === "") {
      setLoadingDisplayImage(false);
      toast.info("Select a background image first");
      return;
    }

    let url = "looksLikePhotos/img-bg-black/";
    const bgImgCodeNoFlag = bgImgCode.replace("-flag", "");
    url += bgImgCodeNoFlag + ".png";

    getPublicImage(url)
      .then((file) => {
        setDisplayImage(file);
        setLoadingDisplayImage(false);
        setOpenDisplayImageModal(true);
      })
      .catch((err) => {
        console.error(err);
        setLoadingDisplayImage(false);
      });

    setLoadingDisplayImage(false);
  };

  const onCloseDisplayImageModal = () => {
    setOpenDisplayImageModal(false);
  };

  let modalDisplayName = _.get(BG_IMG_MAP, `${bgImgCode}.display_name`, "");
  if (modalDisplayName === "") {
    modalDisplayName = "Background Image Example";
  } else {
    modalDisplayName += " - example";
  }

  return (
    <div className={classes.container}>
      <a onClick={handleDisplayRendering}>
        {" "}
        <Icon name="question circle outline" />
        What will it look like?
      </a>
      {loadingDisplayImage && <p>Loading...</p>}
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
          <Button
            style={getAccordionButtonStyle(isMobile)}
            onClick={handleJumpTo}
          >
            {jumpText}
          </Button>
        )}
      </div>

      <div>
        <Modal
          open={openDisplayImageModal}
          onClose={onCloseDisplayImageModal}
          closeIcon={true}
          style={{ textAlign: "center" }}
          size="small"
        >
          <Modal.Header
            style={{ textAlign: "center", color: "var(--color-primary)" }}
          >
            {modalDisplayName}
          </Modal.Header>
          <Modal.Content>
            <Image
              src={displayImage}
              height={1000}
              width={1000}
              alt="example flag rendering"
              style={{
                width: "100%",
                height: "auto",
              }}
              placeholder="blur"
              blurDataURL={IMG_URL_BLUR_DISPLAY_MAP_BG_IMG}
            />
            <Button onClick={onCloseDisplayImageModal}>Close</Button>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
};

export default Background;
