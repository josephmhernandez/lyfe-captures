import Image from "next/image";
import Link from "next/link";

// Big picture for shop now button. Goes straing to product page. Made for landing page.  

const ShopNowBanner = (props) => {
  return (
    <div className="shop-now-banner">
      <Link href={props.to}>
        <a>
          <Image src={props.src} alt={props.alt} />
        </a>
      </Link>
    </div>
  );
};

export default ShopNowBanner;
