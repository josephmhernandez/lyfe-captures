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
  return (
    <div className={classes.all}>
      <ShopNowBanner to="/maps" src={shopNowImage} alt="" />

      <div className={classes.benefitsStyle}>
        <Image
          className={classes.picBenefitsStyle}
          src={benefitsBanner}
          alt="Benefits"
          layout="raw"
        />
      </div>
      <div className={classes.spacingBecauseOfImageBug}></div>
      <div className={classes.centerContent}>
        <Link href="/maps">
          <a>
            <Button
              style={{
                "background-color": "white",
                color: "var(--color-primary)",
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
      <div className={classes.specialRequest}>
        <h1>Pre-Launch Sale?</h1>
        <p>
          We're currently running a pre-launch sale for our custom maps! We have
          perfected our prototype, and while we wait for our supplies to arrive
          we thought we give you time now to pre-order your custom map at a
          steep discount! All maps ordered during the pre-launch sale will be
          shipped out on April 25th! After April 25th we won’t be offering this
          discount if you have any questions just reach out!
          help@mapyourmemory.com
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
    </div>
  );
};

export default MapsLandingPage;
