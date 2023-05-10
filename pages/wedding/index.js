import { Storage } from "aws-amplify";
import Image from "next/image";
import { useState, useEffect } from "react";
import LandingSection from "../../components/ui/LandingSection.js/LandingSection";
import classes from "./wedding.module.css";
const getHowToVideo = async () => {
  const file = await Storage.get("how-to-mobile.mp4", {
    level: "public",
  });
  return file;
};

const getShopNowImage = async () => {
  const file = await Storage.get("banner-large-sale.png", {
    level: "public",
  });
  return file;
};

const getPublicImage = async (filename) => {
  const file = await Storage.get(filename, {
    level: "public",
  });
  return file;
};

const getUploadedImage = async () => {
  const file = await Storage.get("Cali-Living-room-vertical.jpg", {
    level: "public",
  });
  return file;
};

const getWedImgSet1 = async () => {
  const file = await Storage.get("long-beach-w-stock-img.png", {
    level: "public",
  });
  return file;
};

const getWedImgSet2 = async () => {
  const file = await Storage.get("long-beach-angle-wall.png", {
    level: "public",
  });
  return file;
};

const getWedImgSet3 = async () => {
  const file = await Storage.get("long-beach-living-room.png", {
    level: "public",
  });
  return file;
};

const weddingSection = {
  heading: '"The Most Customizable Wedding Gift Solution"',
  text: [
    {
      subheading: "Any Place",
      body: "Choose any place in the world and we'll create a custom map of it for you.",
    },
    {
      subheading: "Any Moment",
      body: "Choose any moment in time and we'll create a custom map of it for you.",
    },
    {
      subheading: "Any Memory",
      body: "Choose any memory and we'll create a custom map of it for you.",
    },
  ],
};

const WeddingLanding = () => {
  const [shopNowBanner, setShopNowBanner] = useState([]);

  const [cornerImgList, setCornerImgList] = useState([]);
  const [vertImgList, setVertImgList] = useState([]);
  const [horizImgList, setHorizImgList] = useState([]);

  const [videoRender, setVideoRender] = useState([]);
  const [hasVideoRendered, setHasVideoRendered] = useState(false);

  const [currWeddingImg, setCurrWeddingImg] = useState(undefined);
  const [weddingCount, setWeddingCount] = useState(0);

  useEffect(() => {
    getPublicImage("transparent/aspen-wall-2-vert.png").then((file) => {
      setVertImgList((prev) => [...prev, file]);
    });
    getPublicImage("transparent/seattle-wall-2-vert.png").then((file) => {
      setVertImgList((prev) => [...prev, file]);
    });
    getPublicImage("transparent/long-beach-wall-2-vert.png").then((file) => {
      setVertImgList((prev) => [...prev, file]);
    });

    getPublicImage("transparent/ny-wall-2.png").then((file) => {
      setHorizImgList((prev) => [...prev, file]);
    });
    getPublicImage("transparent/hawaii-wall-2.png").then((file) => {
      setHorizImgList((prev) => [...prev, file]);
    });
    getPublicImage("transparent/detroit-wall-2.png").then((file) => {
      setHorizImgList((prev) => [...prev, file]);
    });

    getPublicImage("transparent/seattle-corner.png").then((file) => {
      setCornerImgList((prev) => [...prev, file]);
    });
    getPublicImage("transparent/hawaii-corner.png").then((file) => {
      setCornerImgList((prev) => [...prev, file]);
    });
    getPublicImage("transparent/dallas-corner.png").then((file) => {
      setCornerImgList((prev) => [...prev, file]);
    });

    getShopNowImage().then((file) => {
      setShopNowBanner(file);
    });

    // getUploadedImage().then((file) => {
    //   setImage(file);
    // });

    // getWedImgSet1().then((file) => {
    //   setWedImgSet1(file);
    // });

    // getWedImgSet2().then((file) => {
    //   setWedImgSet2(file);
    // });

    // getWedImgSet3().then((file) => {
    //   setWedImgSet3(file);
    // });

    getHowToVideo().then((file) => {
      setVideoRender(file);
      setHasVideoRendered(true);
    });
  }, []);

  const vertImgMedia = {
    type: "imageSlider",
    src: vertImgList,
  };

  const horizImgMedia = {
    type: "imageSlider",
    src: horizImgList,
  };

  const cornerImgMedia = {
    type: "imageSlider",
    src: cornerImgList,
  };

  const videoMedia = {
    type: "video",
    src: videoRender,
  };

  return (
    <div className={classes.page}>
      <Image
        alt="layout Responsive"
        src={shopNowBanner}
        width={100}
        height={400}
        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 100vw, 100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      {/* Component that has two columns when the screen is large enough but when 
      it is a smaller screen it jumps image up top and then content on the bottom. */}
      <LandingSection
        media={vertImgMedia}
        description={weddingSection}
        textFirstFlag={true}
      />

      <LandingSection
        media={videoMedia}
        description={weddingSection}
        textFirstFlag={true}
      />

      <LandingSection
        media={horizImgMedia}
        description={weddingSection}
        textFirstFlag={true}
      />

      <LandingSection
        media={cornerImgMedia}
        description={weddingSection}
        textFirstFlag={true}
      />
    </div>
  );
};

export default WeddingLanding;
