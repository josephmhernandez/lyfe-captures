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
          className={classes.banner}
          alt="shop now banner"
          src={props.src[0]}
          width={100}
          height={400}
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 100vw, 100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </a>
    </Link>
  );
};

export default ShopNowBanner;
