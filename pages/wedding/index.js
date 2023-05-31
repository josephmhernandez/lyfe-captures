import { Storage } from "aws-amplify";
import Image from "next/image";
import { useState, useEffect } from "react";
import LandingSection from "../../components/ui/LandingSection.js/LandingSection";
import classes from "./wedding.module.css";
import Link from "next/link";
import { Button } from "semantic-ui-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Offer from "../../components/ui/copyElements/Offer/Offer";
import { useRouter } from "next/router";

const getHowToVideo = async () => {
  const file = await Storage.get("how-to-vid-white-bg.mp4", {
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

const weddingSection = {
  heading: '"The Perfect Wedding or Engagement Gift"',
  text: [
    {
      subheading: "Thoughtful and Unique",
      body: "Stand out from traditional wedding gifts with something truly exceptional. Our custom maps are a thoughtful and unique way to celebrate their love. Every time they glance at it, they'll be reminded of the joyous moments they shared and the exciting adventures that lie ahead.",
    },
    {
      subheading: "A Keepsake for a Lifetime",
      body: "Unlike many other gifts, our custom maps are timeless treasures that will never go out of style. They are not only a beautiful addition to their home but also a lasting memento of their special day. This gift will continue to hold sentimental value and serve as a cherished keepsake for years to come.",
    },
    {
      subheading: "Create Everlasting Memories",
      body: "Give them a gift that will make their hearts swell with happiness. Our custom maps have the power to evoke emotions, trigger memories, and create everlasting moments. It's a truly remarkable way to commemorate their journey together and inspire them to continue creating beautiful memories.",
    },
  ],
};

const weddingSection2 = {
  heading: "Customized Maps for Unforgettable Moments",
  text: [
    {
      subheading: "Capture Their Love Story",
      body: "Celebrate their special bond with a custom map that tells their unique love story. Our customizable maps allow you to choose the location where they first met, got engaged, or tied the knot. Whether it's a picturesque park, a charming café, or a dreamy destination, you have the power to create a truly personalized gift.",
    },
    {
      subheading: "Cherish Meaningful Memories",
      body: "Make their wedding or engagement gift extra special by adding personalized text to the map. Include their names, wedding date, or a heartfelt message to commemorate their milestone. Every time they look at the map, they'll be reminded of the love and joy they shared on that special day.",
    },
    {
      subheading: "Mark a Place of Significance",
      body: "Our custom maps offer the option to add a custom pin, allowing them to highlight a place of deep meaning. Whether it's the location of their proposal, their first home together, or a favorite vacation spot, this thoughtful touch will make the map a cherished keepsake that symbolizes their journey as a couple.",
    },
  ],
};

const weddingSection3 = {
  heading: "Easy Design, Timeless Elegance",
  text: [
    {
      subheading: "Effortless Personalization",
      body: "Designing your custom map is a breeze with our user-friendly interface. Simply select the location, customize the text, and choose the perfect pin to mark their special place. In just a few clicks, you'll have a unique and personalized gift that captures their love story.",
    },
    {
      subheading: "High-Quality Craftsmanship",
      body: "We take pride in crafting maps of exceptional quality. Each map is meticulously printed on premium materials to ensure sharp details and vibrant colors. Our attention to detail guarantees that this gift will not only be a beautiful piece of artwork but a lasting symbol of their love.",
    },
    {
      subheading: "Ready to Display",
      body: "Our maps are designed to be effortlessly hung and admired. They come with easy-to-follow instructions and include all the necessary hardware. Whether they choose to display it in their living room, bedroom, or office, this map will instantly become a stunning focal point.",
    },
  ],
};

const WeddingLanding = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  const [shopNowBanner, setShopNowBanner] = useState([]);

  const [cornerImgList, setCornerImgList] = useState([]);
  const [vertImgList, setVertImgList] = useState([]);
  const [horizImgList, setHorizImgList] = useState([]);

  const [videoRender, setVideoRender] = useState([]);
  const [hasVideoRendered, setHasVideoRendered] = useState(false);

  const [currWeddingImg, setCurrWeddingImg] = useState(undefined);
  const [weddingCount, setWeddingCount] = useState(0);

  useEffect(() => {
    getPublicImage("fullTransparent/aspen-wall-2-vert.png").then((file) => {
      setVertImgList((prev) => [...prev, file]);
    });
    getPublicImage("fullTransparent/seattle-wall-2-vert.png").then((file) => {
      setVertImgList((prev) => [...prev, file]);
    });
    getPublicImage("fullTransparent/sanfran-wall-2-vert.png").then((file) => {
      setVertImgList((prev) => [...prev, file]);
    });

    getPublicImage("fullTransparent/seattle-wall-horiz.png").then((file) => {
      setHorizImgList((prev) => [...prev, file]);
    });
    getPublicImage("fullTransparent/hawaii-wall-horiz.png").then((file) => {
      setHorizImgList((prev) => [...prev, file]);
    });
    getPublicImage("fullTransparent/detroit-wall-horiz.png").then((file) => {
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

    let shopNowBannerPath = "Homepage/Larger-size-banner-wedding.png";
    if (isMobile) {
      shopNowBannerPath = "Homepage/mobile-banner-wedding.png";
    }
    getPublicImage(shopNowBannerPath).then((file) => {
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
    <div>
      <Link href={"/maps"} legacyBehavior>
        <a>
          <Image
            className={classes.banner}
            alt="layout Responsive"
            src={shopNowBanner}
            width={100}
            height={400}
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 100vw, 100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            onClick={() => {
              // use router to move to /maps
              router.push("/maps");
            }}
          />
        </a>
      </Link>

      <div className={classes.negativeSpace}>
        <p></p>
      </div>
      {/* Component that has two columns when the screen is large enough but when 
      it is a smaller screen it jumps image up top and then content on the bottom. */}
      <LandingSection
        media={vertImgMedia}
        description={weddingSection}
        textFirstFlag={true}
        darkBackground={true}
      />

      <LandingSection
        media={videoMedia}
        description={weddingSection2}
        darkBackground={false}
        // textFirstFlag={true}
      />

      <LandingSection
        media={horizImgMedia}
        description={weddingSection3}
        textFirstFlag={true}
        darkBackground={true}
      />

      {/* We want the complete offer to be inputted here. */}

      <LandingSection
        media={cornerImgMedia}
        description={weddingSection}
        darkBackground={false}
        // textFirstFlag={true}
      >
        <Offer />
      </LandingSection>

      <div className={classes.centerContent}>
        <Link href="/maps" legacyBehavior>
          <a>
            <Button
              style={{
                "background-color": "var(--buy-now-btn-color)",
                color: "white",
                "border-radius": "100px",
                "font-family": "var(--page-paragraph-font-family)",
                "font-size": "var(--page-paragraph-font-size)",
                "font-weight": "400",
              }}
            >
              Create Now
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WeddingLanding;
