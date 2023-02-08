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
  "We're giving you the capability to design a meaningful present. \nFrom a significant moment to a meaningful location, this print is perfect for any any loved one. \nLife is alwasy happening. We're hear to help you catpure the memories and moments that matter.";

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
  "With a resolution of 300 DPI, every detail of your maps will be captured in stunning clarity, making your maps look more like pieces of art. Standard DPI for a computer display is 96 DPI so your monitor won't do it justice. At a 24 in. x 36 in. size, your map will look great up close and far away.",
];
const dict_x = {
  heading: heading_x,
  text: description_x,
};

const dict_customizable = {
  heading: "Customizable",
  text: [""],
};

const dict_hanging = {
  heading: "Painless Hanging",
  text: [""],
};

const dict_sizes = {
  heading: "Sizes",
  text: [""],
};

const dict_shipping = {
  heading: "Shipping",
  text: [""],
};

const dict_gifts = {
  heading: "Unique Gifts",
  text: [""],
};

const dict_quality = {
  heading: "Quality",
  text: [""],
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
      <div className={classes.centerContent}>
        <Link href="/maps">
          <a>
            <Button
              style={{
                "background-color": "var(--color-primary)",
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
      {/* <Segment raised className={classes.mapsLandingPage}>
        <h1>{title}</h1>

        <div className={classes.grid}>
          <div className={classes.myCarousel}>
            <Carousel className={classes.bg}>
              <div className={classes.mapsImage}>
                <Image layout="intrinsic" src={prodPic1} alt="Map" />
              </div>
              <div className={classes.mapsImage}>
                <Image layout="intrinsic" src={prodPic2} alt="Map" />
              </div>
              <div className={classes.mapsImage}>
                <Image layout="intrinsic" src={prodPic3} alt="Map" />
              </div>
            </Carousel>
          </div>
          <div>
            <h2>{heading_1}</h2>
            <ul>
              {description_1.map((description) => {
                return (
                  <li key={uuid()}>
                    <p>{description}</p>
                  </li>
                );
              })}
            </ul>
            <h2>{heading_2}</h2>
            <ul>
              {description_2.map((description) => {
                return (
                  <li key={uuid()}>
                    <p>{description}</p>
                  </li>
                );
              })}
            </ul>
            <h2>{heading_3}</h2>
            <ul>
              {description_3.map((description) => {
                return (
                  <li key={uuid()}>
                    <p>{description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <Link href="/maps">
            <a>
              <Button
                style={{
                  "background-color": "var(--color-primary)",
                  color: "white",
                  "border-radius": "100px",
                  "font-family": "var(--page-paragraph-font-family)",
                  "font-size": "var(--page-paragraph-font-size)",
                  "font-weight": "600",
                }}
              >
                Create Now
              </Button>
            </a>
          </Link>
        </div>

        <div className={classes.description}>
          <h2>What is Map Your Memory?</h2>
          <p>
            Our mission is to destroy every Live, Laugh, Love sign and replace
            them with unique and meaningful artwork. These high quality prints
            are just the start!
          </p>
          <p>
            {`We'll provide you the tools to truly create meaningful and unique
            artwork. All you need to do is hang it up! These work as a gift for
            yourself or a gift for someone you care about. You probably can’t
            remember what you got last Christmas and that wasn’t even a couple
            months ago. We want you to create something that is truly unique to
            you or someone else. Create a map to capture a memory, a story.
            Commemorate an engagement, wedding, anniversary with a customized
            pins. Map your family home, or favorite vacation spot, just make
            sure it's somewhere special to you. Let your wall art being a
            talking point, a focal point. And most importantly don’t let the
            Live, Laugh, Love signs win!`}
          </p>
          <p>
            Be sure to let us know what you think and how we can improve our
            product. We’re working tirelessly to help you design something that
            is truly your own! Send us an email at
            suggestions@mapyourmemory.com, we love to read them!
          </p>
        </div>
      </Segment> */}

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
