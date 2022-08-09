import Image from "next/image";
import Link from "next/link";
import classes from "./ShopNowBanner.module.css";
// Big picture for shop now button. Goes straing to product page. Made for landing page.

const ShopNowBanner = (props) => {
  return (
    <Link href={props.to}>
      <a>
        <Image className={classes.shopNowBanner} src={props.src} alt={props.alt} />
      </a>
    </Link>
  );
};

export default ShopNowBanner;
