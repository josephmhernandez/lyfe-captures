import ShopNowBanner from "../ShopNowBanner";
import classes from "./MapsLandingPage.module.css";
import { getPublicImage } from "../../../utils/awsFunctions";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import DescriptionTab from "../DescriptionTab";
import React, { useState, useEffect } from "react";

import one_pic from "../../../public/images/image-rotation/city-lights-2.png";
import two_pic from "../../../public/images/image-rotation/dark-transit-3.png";
import three_pic from "../../../public/images/image-rotation/modern-1.png";

import Link from "next/link";
import { Button } from "semantic-ui-react";
import LandingSection from "../../ui/LandingSection.js/LandingSection";
import Offer from "../../ui/copyElements/Offer/Offer";
import {
  generalCopyCustomizeMaps,
  generalCopyEasyDesign,
  generalCopyPerfectGift,
} from "../../../utils/copy_general";

const prod_images = [one_pic, two_pic, three_pic];

const DUMMY_TITLE = "what is this?";
const DUMMY_DESCRIPTION =
  "We're giving you the capability to design a meaningful present. \nFrom a significant moment to a meaningful location, this print is perfect for any any loved one. \nLife is alwasy happening. We're hear to help you catpure the memories and moments that matter.";

const title = "Meaningful Maps";

const pre_heading_1 = "How it works";
const pre_description_1 = [
  "Choose a meaningful location, select a desired map style, customize with text and pins, and receive a luxurious wall art piece to bring your memories to life",
];

const pre_heading_2 = "Who's this for?";
const pre_description_2 = [
  "This map is the ultimate way to celebrate your adventures, travels, memories, and the places you love. It transforms your home into a personalized masterpiece, reflecting your unique style and passions. We've found these make great gifts commemorating special events including weddings and engagements",
];

const pre_heading_3 = "Benefits";
const pre_description_3 = [
  "Elevate any space with fully customized, premium artwork. These large, high definition prints come with a ready to hang subframe making the setup process painless. Add a touch of luxury in your decor to celebrate your adventures and memories, or create a thoughtful gift for any occasion",
];

const heading_1 = "HIGH RESOLUTION";
const description_1 = [
  "Design a unique map 24x36 inches",
  "Looks great up close and far away",
  `Printed at 300 DPI. This is great resolution, and some might say "overkill"`,
];

const heading_2 = "NEXT DAY SHIPPING";
const description_2 = [
  "94% of our maps are shipped that next day",
  "Ships in two business days guaranteed",
  "USPS tracking number emailed to you",
  "Ships to continental US only",
];

const heading_3 = "UNMATCHED CUSTOMER SERVICE";
const description_3 = [
  "Under 24 hours response time",
  "Speedy and transparent printing to shipping process",
];

const heading_x = "Ultra High Resolution";
const description_x = [
  "With a resolution of 300 DPI, every detail of your maps will be captured in stunning clarity, making your maps look pieces of art. Standard DPI for a computer display is 96 DPI so your monitor won't do it justice. At a 24 in. x 36 in. size, your map will look great up close and far away.",
];

const dict_how_it_works = {
  heading: pre_heading_1,
  text: pre_description_1,
};
const dict_who_is_this_for = {
  heading: pre_heading_2,
  text: pre_description_2,
};
const dict_benefits = {
  heading: pre_heading_3,
  text: pre_description_3,
};

const dict_x = {
  heading: heading_x,
  text: description_x,
};

const dict_customizable = {
  heading: "Personalized Touch",
  text: [
    "You have the freedom to choose a location and make it your own with a variety of customization options. Choose from modern, geographical, transit styles, or any of our exclusive maps. Add text or pins to commemorate special places and occasions. With the ability to add your personal touch to the map, you can make it truly unique to you and your story. The customization benefits of this map make it a one-of-a-kind work of art that is both meaningful and beautiful.",
  ],
};

const dict_hanging = {
  heading: "Effortless Installation",
  text: [
    "Hanging your custom high-resolution map is a breeze! With a simple and straightforward process, you can transform your space in no time. The map is less than 13 lb’s making it lightweight and easy to handle. With the back subframe all you need to do is install your French cleat (included) and hanging it in any direction you want. The subframe is versatile and will allow you to hang by any conventional hanging method",
  ],
};

const dict_sizes = {
  heading: "Sizes",
  text: [
    'We currently offer one size for our custom high-resolution maps: 24" x 36". This size is the perfect balance between impact and versatility, making it suitable for any room in your home or office. The 24" x 36" size provides enough space for you to showcase your personalized map in detail, while still being compact enough to fit in smaller spaces. Special request? Just send us an email!',
  ],
};

const dict_shipping = {
  heading: "Shipping",
  text: [
    "At the moment, our shipping times are estimated to take between 3-9 business days and are available within the continental United States. Please allow 4 business days for the map to be printed and the adhesive to cure before it can be shipped. Our team strives to ensure that your personalized map arrives in perfect condition and we take the necessary steps to ensure it is protected during shipping",
  ],
};

const dict_gifts = {
  heading: "Unique Gifts",
  text: [
    "Our maps make for the perfect gift for any occasion. Whether it's a special anniversary, a wedding, an engagement, or simply a way to show someone how much you care, our maps are a unique and personalized way to express your feelings. With the ability to choose a location, style, add text, and even place special pins, you can create a customized piece of art that will always be cherished",
  ],
};

const dict_quality = {
  heading: "Superior Craftsmanship",
  text: [
    "Our hand-made maps are of the highest quality. The maps are printed on a 1/4 inch thick acrylic block, giving them a luxurious and sturdy feel. The colors are fade-resistant and the detail is sharp, with crystal clear images and lifelike colors. The 1/4 inch thick acrylic block enhances the vibrancy of the colors, making them pop and adding a beautiful, glossy finish, creating a stunning piece of art that will be sure to catch the eye",
  ],
};

const MapsLandingPageMobile = () => {
  const [vertImgList, setVertImgList] = useState([]);
  const [homepageBanner, setHomepageBanner] = useState([]);
  const [horizImgList, setHorizImgList] = useState([]);
  const [cornerImgList, setCornerImgList] = useState([]);
  const [videoHowTo, setVideoHowTo] = useState([]);
  const [descriptionImg3DEffect, setDescriptionImg3DEffect] = useState(null);
  const [descriptionImgBackFrame, setDescriptionImgBackFrame] = useState(null);
  const [
    descriptionImgCloseUpPinsDarkTransit,
    setDescriptionImgCloseUpPinsDarkTransit,
  ] = useState(null);
  const [descriptionImgFourCorner, setDescriptionImgFourCorner] =
    useState(null);
  const [descriptionImgTextCloseUp, setDescriptionImgTextCloseUp] =
    useState(null);
  const [descriptionImgTransitBlack, setDescriptionImgTransitBlack] =
    useState(null);
  const [descriptionImgTransitWhite, setDescriptionImgTransitWhite] =
    useState(null);

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

    getPublicImage("Homepage/reg-banner-mobile.png").then((file) => {
      setHomepageBanner((prev) => [...prev, file]);
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

    getPublicImage("how-to-vid-white-bg.mp4").then((file) => {
      setVideoHowTo((prev) => [...prev, file]);
    });

    getPublicImage(
      "Homepage/description-tab-prod-pictures/3-d-effect.jpg"
    ).then((file) => {
      setDescriptionImg3DEffect(file);
    });

    getPublicImage(
      "Homepage/description-tab-prod-pictures/backframe-hanging.jpg"
    ).then((file) => {
      setDescriptionImgBackFrame(file);
    });

    getPublicImage(
      "Homepage/description-tab-prod-pictures/close-up-pins-dark-transit.jpg"
    ).then((file) => {
      setDescriptionImgCloseUpPinsDarkTransit(file);
    });

    getPublicImage(
      "Homepage/description-tab-prod-pictures/four-corner.jpg"
    ).then((file) => {
      setDescriptionImgFourCorner(file);
    });

    getPublicImage(
      "Homepage/description-tab-prod-pictures/text-close-up.jpg"
    ).then((file) => {
      setDescriptionImgTextCloseUp(file);
    });

    getPublicImage(
      "Homepage/description-tab-prod-pictures/trans-black.png"
    ).then((file) => {
      setDescriptionImgTransitBlack(file);
    });

    getPublicImage(
      "Homepage/description-tab-prod-pictures/corner-transit-white.jpg"
    ).then((file) => {
      setDescriptionImgTransitWhite(file);
    });
  }, []);

  const landingMedia1 = {
    type: "video",
    src: videoHowTo,
  };

  const landingMedia2 = {
    type: "imageSlider",
    src: horizImgList,
  };

  const landingMedia3 = {
    type: "imageSlider",
    src: cornerImgList,
  };

  const landingMedia4 = {
    type: "image",
    src: vertImgList,
  };

  return (
    <div className={classes.all}>
      <ShopNowBanner
        to="/maps"
        src={homepageBanner}
        alt="mobile offer banner"
      />

      <div className={classes.spacingBecauseOfImageBug}></div>
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

      <LandingSection
        media={landingMedia1}
        description={generalCopyCustomizeMaps}
      />

      <LandingSection
        media={landingMedia2}
        description={generalCopyEasyDesign}
        darkBackground={true}
      />

      <LandingSection
        media={landingMedia3}
        description={generalCopyPerfectGift}
        darkBackground={true}
      />

      <LandingSection media={landingMedia4} darkBackground={false}>
        <Offer />
      </LandingSection>

      <DescriptionTab
        className={classes.invertColor}
        img={undefined}
        description={dict_how_it_works}
      />
      <DescriptionTab img={undefined} description={dict_who_is_this_for} />
      <DescriptionTab img={undefined} description={dict_benefits} />
      {descriptionImgTransitWhite && (
        <DescriptionTab
          img={descriptionImgTransitWhite}
          description={dict_x}
          img_first_flag={true}
        />
      )}
      {descriptionImg3DEffect && (
        <DescriptionTab
          img={descriptionImgCloseUpPinsDarkTransit}
          description={dict_customizable}
          img_first_flag={true}
        />
      )}
      {descriptionImgBackFrame && (
        <DescriptionTab
          img={descriptionImgBackFrame}
          description={dict_hanging}
          img_first_flag={true}
        />
      )}
      {descriptionImgTransitBlack && (
        <DescriptionTab
          img={descriptionImgTransitBlack}
          description={dict_sizes}
          img_first_flag={true}
        />
      )}

      {descriptionImgFourCorner && (
        <DescriptionTab
          img={descriptionImgFourCorner}
          description={dict_shipping}
          img_first_flag={true}
        />
      )}
      {descriptionImgTextCloseUp && (
        <DescriptionTab
          img={descriptionImgTextCloseUp}
          description={dict_gifts}
          img_first_flag={true}
        />
      )}
      {descriptionImg3DEffect && (
        <DescriptionTab
          img={descriptionImg3DEffect}
          description={dict_quality}
          img_first_flag={true}
        />
      )}
    </div>
  );
};

export default MapsLandingPageMobile;
