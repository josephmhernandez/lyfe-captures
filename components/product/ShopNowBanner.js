// import Image from "next/future/image";
import Image from "next/image";
import Link from "next/link";
import classes from "./ShopNowBanner.module.css";
// Big picture for shop now button. Goes straing to product page. Made for landing page.

const ShopNowBanner = (props) => {
  return (
    <Link className={classes.shopNowBanner} href={props.to} legacyBehavior>
      <a>
        <Image
          src={props.src}
          alt={props.alt}
          className={classes.pic}
          layout="raw"
        />
      </a>
    </Link>
  );
};

export default ShopNowBanner;
