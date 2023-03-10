import Link from "next/link";
import Image from "next/image";
import cartPic from "../../public/cart-icon-small-white.png";
import classes from "./NavigationBar.module.css";
import SideBar from "./SideBar";
import { useState } from "react";

const MobileNavigationBar = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={classes.container}>
      <nav className={classes.grid}>
        <i
          onClick={() => {
            console.log("clickity");
            setVisible(!visible);
          }}
          class="bars icon large white"
        ></i>

        <SideBar
          animation={"slide along"}
          direction={"left"}
          visible={visible}
          setVisible={setVisible}
        />

        <div className={classes.logo}>
          <Link href="/">
            <h1>MapYourMemory</h1>
          </Link>
        </div>
        {/* <div className={classes.navbar}>
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
        </div> */}
        {/* <div className={classes.cartnav}>
          <Link href="/cart">
            <a>
              <Image width={30} height={30} src={cartPic} alt="CART" />
            </a>
          </Link>
        </div> */}
      </nav>
    </div>
  );
};

export default MobileNavigationBar;
