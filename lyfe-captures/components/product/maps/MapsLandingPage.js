import ProductPicture from "../ProductPicture";
import ShopNowBanner from "../ShopNowBanner";
import Link from "next/link";
import classes from "./MapsLandingPage.module.css";
import shopNowImage from "../../../public/OO-Summer-Sale-Page-Banner-3840x1400px.webp";
import mapProdPic from "../../../public/maps-prod-pic-landing.png";
import Image from "next/image";
const DUMMY_TITLE = "what is this?";
const DUMMY_DESCRIPTION =
  "We're giving you the capability to design a meaningful present. \nFrom a significant moment to a meaningful location, this print is perfect for any any loved one. \nLife is alwasy happening. We're hear to help you catpure the memories and moments that matter.";
const MapsLandingPage = () => {
  const shopNowBanner = "";
  const altText = "";

  //Two columns here
  // first column: picture of map
  // second column: title, description, and button

  return (
    <div>
      <div className={classes.box}>
        <ShopNowBanner to="/maps" src={shopNowImage} alt="" />
      </div>
      <div className={classes.grid}>
        <div className={classes.mapsImage}>
          <Image layout="intrinsic" src={mapProdPic} alt="Map" />
        </div>
        <div className={classes.mapsLandingPage}>
          <h1>{DUMMY_TITLE}</h1>
          <p>{DUMMY_DESCRIPTION}</p>
          <Link href="/maps">
            <a>
              <button type="button"> Create Now </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MapsLandingPage;
