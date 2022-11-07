import Link from "next/link";
import Image from "next/image";
import cartPic from "../../public/cart-icon-small.png";
import classes from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  const DUMMY_TEXT = "UP TO 30% OFF CUSTOM MAP PRINTS WITH CODE 'SUMMER'";
  return (
    <div>
      <nav className={classes.grid}>
        <div className={classes.logo}>
          <Link href="/">LyfeCaptures</Link>
        </div>
        <div className={classes.navbar}>
          <ul>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/maps"> Create Now </Link>
            </li>
            <li>
              <Link href="/sizes">Sizes</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={classes.cartnav}>
          <Link href="/cart">
            <a>
              <Image src={cartPic} alt="CART" />
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
