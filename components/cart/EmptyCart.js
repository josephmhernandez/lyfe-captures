import classes from "./EmptyCart.module.css";
import Link from "next/link";
import { Button } from "semantic-ui-react";
import { getPublicImage } from "../../utils/awsFunctions";
import { useEffect, useState } from "react";
import MediaRender from "../ui/mediaRender/MediaRender";

const EmptyCart = () => {
  const [videoHowTo, setVideoHowTo] = useState([]);

  useEffect(() => {
    getPublicImage("how-to-vid-white-bg.mp4").then((file) => {
      setVideoHowTo((prev) => [...prev, file]);
    });
  }, []);

  const mediaVid = {
    type: "video",
    src: videoHowTo,
  };

  console.log(videoHowTo);

  return (
    <div className={classes.emptyPage}>
      <h1>Uh Oh! It looks like your cart is empty :/</h1>
      <Link href="/maps" legacyBehavior>
        <a>
          <Button
            style={{
              "background-color": "#23d160",
              color: "white",
              "border-radius": "100px",
              "font-family": "var(--page-heading-font-family)",
              "font-size": "var(--page-paragraph-font-size)",
              "font-weight": "400",
            }}
          >
            Create a new map
          </Button>
        </a>
      </Link>
      <MediaRender media={mediaVid} />
      <h1>How about creating a new map?</h1>
      <Link href="/maps" legacyBehavior>
        <a>
          <Button
            style={{
              "background-color": "#23d160",
              color: "white",
              "border-radius": "100px",
              "font-family": "var(--page-heading-font-family)",
              "font-size": "var(--page-paragraph-font-size)",
              "font-weight": "400",
            }}
          >
            Get Started
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default EmptyCart;
