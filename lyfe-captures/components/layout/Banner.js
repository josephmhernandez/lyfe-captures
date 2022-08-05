import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import logoPic from "../../public/logo-small.png";
import cartPic from "../../public/cart-icon-small.png";

const Banner = (props) => {
  const DUMMY_TEXT = "UP TO 30% OFF CUSTOM MAP PRINTS WITH CODE 'SUMMER'";
  return (
    // Promotion text
    // Logo Link
    <Fragment>
      <Link href="/">
        <a>
          <Image src={logoPic} alt="Lyfe Captures" />
        </a>
      </Link>
      <Link href="/cart">
        <a>
          <Image src={cartPic} alt="CART" />
        </a>
      </Link>
    </Fragment>
  );
};

export default Banner;
