import ProductPicture from "../ProductPicture";
import ShopNowBanner from "../ShopNowBanner";
import Link from "next/link";
import classes from "./MapsLandingPage.module.css";
import shopNowImage from "../../../public/OO-Summer-Sale-Page-Banner-3840x1400px.webp";
import mapProdPic from "../../../public/maps-prod-pic-landing.png";
import Image from "next/image";
import {CreateNowButton} from '../../ui/CustomButtons'
import { v4 as uuid } from "uuid";
const DUMMY_TITLE = "what is this?";
const DUMMY_DESCRIPTION =
  "We're giving you the capability to design a meaningful present. \nFrom a significant moment to a meaningful location, this print is perfect for any any loved one. \nLife is alwasy happening. We're hear to help you catpure the memories and moments that matter.";

const title = "Uniquely Meaningful Maps";
const heading_1 = "HIGH RESOLUTION";
const description_1 = [
  "Created with your own unique design",
  "Printed at 300 DPI",
  "Looks great up close and far away",
];

const heading_2 = "NEXT DAY SHIPPING";
const description_2 = [
  "Create your map today and we’ll ship it out in two business days guaranteed",
  "94% of our maps are shipped that next day",
  "Tracking number emailed to you",
];

const heading_3 = "UNMATCHED CUSTOMER SERVICE";
const description_3 = [
  "We respond with a solution in less than 24 hours",
  "We ensure a transparent and speed printing to shipment process",
];

const MapsLandingPage = () => {
  const shopNowBanner = "";
  const altText = "";

  return (
    <div>
      <div className={classes.box}>
        <ShopNowBanner to="/maps" src={shopNowImage} alt="" />
      </div>
      <div className={classes.mapsLandingPage}>
        <h1>{title}</h1>

        <div className={classes.grid}>
          <div className={classes.mapsImage}>
            <Image layout="intrinsic" src={mapProdPic} alt="Map" />
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
            <div>
              <Link href="/maps">
                <a>
                  <CreateNowButton>Create Now</CreateNowButton>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapsLandingPage;
