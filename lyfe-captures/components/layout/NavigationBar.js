import Link from "next/link";
import Image from "next/image";
import logoPic from "../../public/logo-small.png";
import cartPic from "../../public/cart-icon-small.png";
import classes from "./NavigationBar.module.css";
//Navigation Bar

const NavigationBar = (props) => {
  const DUMMY_TEXT = "UP TO 30% OFF CUSTOM MAP PRINTS WITH CODE 'SUMMER'";
  return (
    <div className={classes.navBar}>
      <nav>
        <div className={classes.topnav}>
          <Link className={classes.topnav} href="/">
            LyfeCaptures
          </Link>
        </div>

        <div className={classes.cartNav}>
          <Link href="/cart">
            <a className={classes.cartNav}>
              <Image src={cartPic} alt="CART" />
            </a>
          </Link>
        </div>
      </nav>
      {props.children}
    </div>
  );
};

export default NavigationBar;
