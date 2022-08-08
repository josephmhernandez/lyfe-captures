import Link from "next/link";
import Image from "next/image";
import logoPic from "../../public/logo-small.png";
import cartPic from "../../public/cart-icon-small.png";
import classes from "./NavigationBar.module.css";
//Navigation Bar

const Banner = (props) => {
  const DUMMY_TEXT = "UP TO 30% OFF CUSTOM MAP PRINTS WITH CODE 'SUMMER'";
  return (
    // Promotion text
    // Logo Link
    <div className={classes.topnav}>
      <nav className={classes.topnav}>
        <Link href="/" LyfeCaptures>
          LyfeCaptures
        </Link>
        <div className={classes.cartNav}>
          <Link href="/cart">
            <a>
              <Image src={cartPic} alt="CART" />
            </a>
          </Link>
        </div>
      </nav>
      {props.children}
    </div>
  );
};

export default Banner;
