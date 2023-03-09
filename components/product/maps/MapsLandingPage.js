import ShopNowBanner from "../ShopNowBanner";
import Link from "next/link";
import classes from "./MapsLandingPage.module.css";

import shopNowImage from "../../../public/images/banner-wide.png";
import benefitsBanner from "../../../public/images/cropped-benefits-banner.png";
import prodPic1 from "../../../public/images/prod-pics/3-maps-prod-pic-small.png";
import prodPic2 from "../../../public/images/prod-pics/map-vert-prod-pic-small.png";
import prodPic3 from "../../../public/images/prod-pics/puerto-rico-landscape-prod-pic-small.png";
import Image from "next/future/image";
import { v4 as uuid } from "uuid";
import { Label, Segment } from "semantic-ui-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "semantic-ui-react";
import DescriptionTab from "../DescriptionTab";

const DUMMY_TITLE = "what is this?";
const DUMMY_DESCRIPTION =
  "We're giving you the capability to design a meaningful present. \nFrom a significant moment to a meaningful location, this print is perfect for any any loved one. \nLife is alwasy happening. We're hear to help you catpure the memories and moments that matter";

const title = "Meaningful Maps";
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
  "With a resolution of 300 DPI, every detail of your maps will be captured in stunning clarity, making your maps look more like pieces of art. Standard DPI for a computer display is 96 DPI so your monitor won't do it justice. At a 24 in. x 36 in. size, your map will look great up close and far away",
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
    "Hanging your custom high-resolution map is a breeze! With a simple and straightforward process, you can transform your space in no time. The map is less than 15 lb’s making it lightweight and easy to handle. With the back subframe all you need to do is install your French cleat (included) and hangin it in any direction you want. The subframe is versatile and will allow you to hang by any conventional hangin method",
  ],
};

const dict_sizes = {
  heading: "Sizes",
  text: [
    'We currently offer one size for our custom high-resolution maps: 24" x 36". This size is the perfect balance between impact and versatility, making it suitable for any room in your home or office. The 24" x 36" size provides enough space for you to showcase your personalized map in detail, while still being compact enough to fit in smaller spaces',
  ],
};

const dict_shipping = {
  heading: "Shipping",
  text: [
    "At the moment, our shipping times are estimated to take between 3-9 business days and are available within the continental United States. Please allow 2 business days for the map to be printed and the adhesive to cure before it can be shipped. Our team strives to ensure that your personalized map arrives in perfect condition and we take the necessary steps to ensure it is protected during shipping",
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
    "Our hand-made maps are of the highest quality. The maps are printed on an aluminum composite material and adhered to a 1/4 inch thick acrylic block, giving them a luxurious and sturdy feel. The colors are fade-resistant and the detail is sharp, with crystal clear images and lifelike colors. The 1/4 inch thick acrylic block enhances the vibrancy of the colors, making them pop and adding a beautiful, glossy finish, creating a stunning piece of art that will be sure to catch the eye",
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
      <DescriptionTab
        img={prodPic1}
        description={dict_x}
        img_first_flag={true}
      />
      <DescriptionTab
        img={prodPic1}
        description={dict_customizable}
        img_first_flag={false}
      />
      <DescriptionTab
        img={prodPic1}
        description={dict_hanging}
        img_first_flag={true}
      />
      <DescriptionTab
        img={prodPic1}
        description={dict_sizes}
        img_first_flag={false}
      />
      <DescriptionTab
        img={prodPic1}
        description={dict_shipping}
        img_first_flag={true}
      />
      <DescriptionTab
        img={prodPic1}
        description={dict_gifts}
        img_first_flag={false}
      />
      <DescriptionTab
        img={prodPic1}
        description={dict_quality}
        img_first_flag={true}
      />
    </div>
  );
};

export default MapsLandingPage;
