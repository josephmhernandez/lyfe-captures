import { Fragment } from "react";
import ProductPicture from "../ProductPicture";
import ShopNowBanner from "../ShopNowBanner";
import Link from "next/link";
const DUMMY_TITLE = "what is this?";
const DUMMY_DESCRIPTION =
  "We're giving you the capability to design a meaningful present. \nFrom a significant moment to a meaningful location, this print is perfect for any any loved one. \nLife is alwasy happening. We're hear to help you catpure the memories and moments that matter.";
const MapsLandingPage = () => {
  const shopNowBanner = "";
  const altText = "";

  return (
    <Fragment>
      <div>
        <ShopNowBanner to="/maps" src="" alt="" />
      </div>
      <ProductPicture />
      <div>
        <h1>{DUMMY_TITLE}</h1>
        <p>{DUMMY_DESCRIPTION}</p>
      </div>
      <Link href="/maps">
        <a>
          <button type="button"> Create Now </button>
        </a>
      </Link>
    </Fragment>
  );
};

export default MapsLandingPage;
