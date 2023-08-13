import ShopNowBanner from "../ShopNowBanner";
import Link from "next/link";
import classes from "./MapsLandingPage.module.css";

import benefitsBanner from "../../../public/images/cropped-benefits-banner.png";
import Offer from "../../ui/copyElements/Offer/Offer";
import Image from "next/image";

import { Button } from "semantic-ui-react";
import DescriptionTab from "../DescriptionTab";
import React, { useState, useEffect } from "react";
import LandingSection from "../../ui/LandingSection.js/LandingSection";
import { getPublicImage } from "../../../utils/awsFunctions";
import {
  generalCopyCustomizeMaps,
  generalCopyEasyDesign,
  generalCopyPerfectGift,
} from "../../../utils/copy_general";

const heading_special = "Special Request? We can help!";
const description_special = [
  `Want a specific color? We can help! Want a different size? We can help! Want a different style? We can help! We're here to help you create a unique and meaningful gift for your loved one. Please contact us at ${process.env.EMAIL_SPECIAL_REQUESTS}`,
];

const dict_special_request = {
  heading: heading_special,
  text: description_special,
};

const heading_x = "Ultra High Resolution";
const description_x = [
  `With a resolution of 300 DPI, every detail of your maps will be captured in stunning clarity, making your maps pieces of art. Standard DPI for a computer display is 96 DPI so your monitor won't do it justice. At a 24 in. x 36 in. size, your map will look great up close and far away`,
];
const dict_x = {
  heading: heading_x,
  text: description_x,
};

const dict_customizable = {
  heading: "Personalized Touch",
  text: [
    "You have the freedom to choose a location and make it your own with a variety of customization options. Choose from modern, geographical, transit styles, or any of our exclusive maps. Add text or pins to commemorate special places and occasions. With the ability to add your personal touch to the map, you can make it truly unique to you and your story. The customization benefits of this map make it a one-of-a-kind work of art that is both meaningful and beautiful",
  ],
};

const dict_hanging = {
  heading: "Effortless Installation",
  text: [
    "Hanging your custom high-resolution map is a breeze! With a simple and straightforward process, you can transform your space in no time. The map is less than 13 lb’s making it lightweight and easy to handle. With the back subframe all you need to do is install your French cleat (included) and hangin it in any direction you want. The subframe is versatile and will allow you to hang by any conventional hangin method",
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

const MapsLandingPage = () => {
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
  const [bgProdDescriptionImg, setBgProdDescriptionImg] = useState(null);

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

    getPublicImage("Homepage/reg-banner.png").then((file) => {
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

    getPublicImage("Homepage/dark-transit-bg.png").then((file) => {
      setBgProdDescriptionImg(file);
    });
  }, []);

  const landingMedia1 = {
    type: "imageSlider",
    src: horizImgList,
  };

  const landingMedia2 = {
    type: "video",
    src: videoHowTo,
  };

  const landingMedia3 = {
    type: "imageSlider",
    src: cornerImgList,
  };

  const landingMedia4 = {
    type: "imageSlider",
    src: vertImgList,
  };

  // Background of product description as dark transit
  const divBgStyle = {
    backgroundImage: `url(${bgProdDescriptionImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundOpacity: 0.4,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className={classes.all}>
      <ShopNowBanner to="/maps" src={homepageBanner} alt="" />
      <div className={classes.spacingBecauseOfImageBug}></div>
      <div className={classes.prodDescrption} style={divBgStyle}>
        <div className={classes.prodDescrption}>
          {/* Product Description */}
          <h1>Luxurious Acrylic Maps</h1>
          <ul>
            <li>
              <h2>Large 24x36 in. Prints</h2>
            </li>
            <li>
              <h2>Thick Quarter in. Acrylic</h2>
            </li>
            <li>
              <h2>High Resolution Map Imaging</h2>
            </li>
            <li>
              <h2>Customizable Text and Styles</h2>
            </li>
            <li>
              <h2>No Assembly! Hang Out of the Box</h2>
            </li>
            <li>
              <h2>Hanging Material Included</h2>
            </li>
            <li>
              <h2>Free Shipping</h2>
            </li>
            <li>
              <h2>Enter Giveaway for 20% Off</h2>
            </li>
          </ul>
        </div>
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

      <LandingSection
        media={landingMedia1}
        description={generalCopyCustomizeMaps}
        darkBackground={true}
      />

      <LandingSection
        media={landingMedia2}
        description={generalCopyEasyDesign}
      />

      <LandingSection
        media={landingMedia3}
        description={generalCopyPerfectGift}
        darkBackground={true}
      />

      <LandingSection media={landingMedia4} darkBackground={false}>
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

      <div className={classes.benefitsStyle}>
        <Image
          className={classes.picBenefitsStyle}
          src={benefitsBanner}
          alt="Benefits"
          layout="raw"
        />
      </div>
      <div className={classes.spacingBecauseOfImageBug}></div>

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
          img_first_flag={false}
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
          img_first_flag={false}
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
          img_first_flag={false}
        />
      )}
      {descriptionImg3DEffect && (
        <DescriptionTab
          img={descriptionImg3DEffect}
          description={dict_quality}
          img_first_flag={true}
        />
      )}
      <div className={classes.specialRequest}>
        <h1>{dict_special_request.heading}</h1>
        <p>{dict_special_request.text}</p>
      </div>
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

export default MapsLandingPage;
