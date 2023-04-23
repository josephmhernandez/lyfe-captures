import ShopNowBanner from "../ShopNowBanner";
import Link from "next/link";
import classes from "./MapsLandingPage.module.css";

import shopNowImage from "../../../public/images/banner-large-sale.png";
import benefitsBanner from "../../../public/images/cropped-benefits-banner.png";
import prodPicThreeD from "../../../public/images/new-prod-pics/3-d-effect.jpg";
import prodPicBackFrame from "../../../public/images/new-prod-pics/backframe-hanging.jpg";
import prodPicCloseUpPinsDarkTransit from "../../../public/images/new-prod-pics/close-up-pins-dark-transit.jpg";
import prodPicFourCorner from "../../../public/images/new-prod-pics/four-corner.jpg";
import prodPicTextCloseUp from "../../../public/images/new-prod-pics/text-close-up.jpg";
import prodPicTransitBlack from "../../../public/images/new-prod-pics/trans-black.png";
import prodPicTransitWhite from "../../../public/images/new-prod-pics/corner-transit-white.jpg";

import Image from "next/future/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "semantic-ui-react";
import DescriptionTab from "../DescriptionTab";
import React, { useState, useEffect } from "react";

import one_pic from "../../../public/images/image-rotation/city-lights-2.png";
import two_pic from "../../../public/images/image-rotation/dark-transit-3.png";
import three_pic from "../../../public/images/image-rotation/modern-1.png";

const prod_images = [one_pic, two_pic, three_pic];

const heading_special = "Special Request? We can help!";
const description_special = [
  `Want a specific color? We can help! Want a different size? We can help! Want a different style? We can help! We're here to help you create a unique and meaningful gift for your loved one. Please contact us at ${process.env.EMAIL_SPECIAL_REQUESTS}`,
];

const title = "Meaningful Maps";

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
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      const new_count = (count + 1) % prod_images.length;
      setCount(new_count);
    }, 4000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className={classes.all}>
      <ShopNowBanner to="/maps" src={shopNowImage} alt="" />
      <div className={classes.centerContent}>
        <Link href="/maps">
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
      {/* Normal Product Landing Page Information. Outlines the offer */}
      <div className={classes.twoColumns}>
        <div className={classes.flexChild}>
          <div
            style={{
              height: "100%",
              backgroundImage: `url(${prod_images[count].src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
              overflow: "hidden",
              opacity: "1.0",
              "-webkit-transition": "background 1.5s linear",
              "-moz-transition": "background 1.5s linear",
              "-o-transition": "background 1.5s linear",
              "-ms-transition": "background 1.5s linear",
              transition: "background 1.5s linear",
            }}
          >
            {/* <Image src={bg} alt="my gif" layout="raw"></Image> */}
          </div>
          {/* Left Side. Product Pictures. Fade Image to show different designs & customization */}
        </div>
        <div className={classes.flexChild}>
          {/* Right Side. Offer  Description. */}
          <h1> What You Get </h1>

          <div className={classes.benefits}>
            <div>
              <h2>Elegant Art Piece That Pops On The Wall</h2>
              <ul>
                <li>
                  <p>
                    <b>Large Acrylic Print - </b>durable, scratch-resistant
                    material that gives the map a 3D effect
                  </p>
                </li>
                <li>
                  <p>
                    <b>High Resolution - </b>300 DPI print making your map look
                    incredible from up close and far away{" "}
                  </p>
                </li>
              </ul>

              <h2>Free Floating Hanging Kit</h2>
              <ul>
                <li>
                  <p>
                    {" "}
                    <b>Floating Back Frame - </b> (already attached) for
                    effortless hanging. Back frame does NOT show through the
                    acrylic. We've ensured that won't happen in any type of
                    light
                  </p>
                </li>
                <li>
                  <p>
                    <b>French Cleat and Screws - </b>Install with just a
                    screwdriver and a stud finder
                  </p>
                </li>
                <li>
                  <p>
                    <b>Gloves - </b>Hang your map fingerprint free{" "}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Installation Instructional Video - </b> Simply takes a
                    minute to hang
                  </p>
                </li>
              </ul>

              <h2>100% Satisfaction</h2>
              <ul>
                <li>
                  <p>
                    {" "}
                    <b>Don't like it? - </b>Send it back
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <b>Damaged in shipping? - </b>We'll expedite another
                  </p>
                </li>
                <li>
                  <p>
                    <b>Typo? - </b>We'll fix it
                  </p>
                </li>
                <li>
                  <p>
                    <b>Mock Up Design -</b>
                    We'll email you the image of your map before we print to
                    correct any mistakes
                  </p>
                </li>
              </ul>

              <h2>100% Customizability</h2>
              <ul>
                <li>
                  <p>
                    <b>Want a different Style? Different Colors? - </b>Email us
                    and we'll get the style you want
                  </p>
                </li>
              </ul>

              <h2>Free Gift Option</h2>
              <ul>
                <li>
                  <p>
                    <b>Sending directly as a gift? - </b>Let us send a hand
                    written letter to the recipient with your message
                  </p>
                </li>
              </ul>

              <h2>Free Consultation</h2>
              <ul>
                <li>
                  <p>
                    <b>Not great with computers? - </b>We'll hop on a zoom call
                    together to help you out. Email us:{" "}
                    <span>
                      <a
                        to="#"
                        onClick={(e) => {
                          window.location.href =
                            "mailto:" + process.env.EMAIL_SPECIAL_REQUESTS;
                          e.preventDefault();
                        }}
                      >
                        {process.env.EMAIL_SPECIAL_REQUESTS}
                      </a>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <b>Don't have time? - </b>Email us what you're looking for
                    and we'll send you a mockup in 12 hours:{" "}
                    <span>
                      <a
                        to="#"
                        onClick={(e) => {
                          window.location.href =
                            "mailto:" + process.env.EMAIL_SPECIAL_REQUESTS;
                          e.preventDefault();
                        }}
                      >
                        {process.env.EMAIL_SPECIAL_REQUESTS}
                      </a>
                    </span>
                  </p>
                </li>
              </ul>

              <h2>You Pay Shipping.... Just Kidding</h2>
              <ul>
                <li>
                  <p>
                    That'd be a weird place to draw the line. OF COURSE free
                    shipping. All you pay is the listed price plus tax
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.centerContent}>
        <Link href="/maps">
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

      <div className={classes.specialRequest}>
        <h1>Low Inventory Sale?</h1>
        <p>
          We're currently running a Low Inventory sale for our custom maps!
          While we wait for our supplies to arrive we thought we give you time
          now to order your custom map at a steep discount! All maps ordered
          during the Low Inventory sale will be shipped out on May 15th! After
          May 15th we won’t be offering this discount if you have any questions
          just reach out! help@mapyourmemory.com
        </p>
      </div>

      <DescriptionTab
        img={prodPicTransitWhite}
        description={dict_x}
        img_first_flag={true}
      />
      <DescriptionTab
        img={prodPicCloseUpPinsDarkTransit}
        description={dict_customizable}
        img_first_flag={false}
      />
      <DescriptionTab
        img={prodPicBackFrame}
        description={dict_hanging}
        img_first_flag={true}
      />
      <DescriptionTab
        img={prodPicTransitBlack}
        description={dict_sizes}
        img_first_flag={false}
      />
      <DescriptionTab
        img={prodPicFourCorner}
        description={dict_shipping}
        img_first_flag={true}
      />
      <DescriptionTab
        img={prodPicTextCloseUp}
        description={dict_gifts}
        img_first_flag={false}
      />
      <DescriptionTab
        img={prodPicThreeD}
        description={dict_quality}
        img_first_flag={true}
      />
      <div className={classes.specialRequest}>
        <h1>{dict_special_request.heading}</h1>
        <p>{dict_special_request.text}</p>
      </div>
      <div className={classes.centerContent}>
        <Link href="/maps">
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
