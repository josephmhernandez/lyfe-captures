import { Menu, Sidebar } from "semantic-ui-react";
import Link from "next/link";
import { useEffect } from "react";
import classes from "./SideBar.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import cartPic from "../../public/cart-icon-small-white.png";

const SideBar = ({ animation, direction, visible, setVisible }) => {
  const router = useRouter();

  // For mobile view vertical menu
  const handleScroll = () => {
    setVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleSelect = (e, { name }) => {
    setVisible(false);

    if (name === "nvm") {
      setVisible(false);
    } else if (name === "Home") {
      router.push("/");
    } else if (name === "AboutUs") {
      router.push("/aboutus");
    } else if (name === "Maps") {
      router.push("/maps");
    } else if (name === "Sizes") {
      router.push("/sizes");
    } else if (name === "Faqs") {
      router.push("/faqs");
    } else if (name === "ContactUs") {
      router.push("/contactus");
    } else if (name === "Cart") {
      router.push("/cart");
    }
  };

  return (
    <Sidebar
      as={Menu}
      animation={animation}
      direction={direction}
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width="thin"
    >
      <Menu.Item name="nvm" as="a" onClick={handleSelect}>
        <i className="minus icon"> </i>
      </Menu.Item>
      <Menu.Item name="Home" as="a" onClick={handleSelect}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item name="Cart" as="a" onClick={handleSelect}>
        <Link href="/cart">
          <Image width={25} height={25} src={cartPic} alt="CART" />
        </Link>
      </Menu.Item>
      <Menu.Item name="Gallery" as="a" onClick={handleSelect}>
        <Link href="/gallery">Get Inspired</Link>
      </Menu.Item>
      <Menu.Item name="Maps" as="a" onClick={handleSelect}>
        <Link href="/maps">Create Now</Link>
      </Menu.Item>
      <Menu.Item name="AboutUs" as="a" onClick={handleSelect}>
        <Link href="/aboutus">About Us</Link>
      </Menu.Item>
      <Menu.Item name="Sizes" as="a" onClick={handleSelect}>
        <Link href="/sizes">Sizes</Link>
      </Menu.Item>
      <Menu.Item name="Faqs" as="a" onClick={handleSelect}>
        <Link href="/faqs">FAQs</Link>
      </Menu.Item>
      <Menu.Item name="ContactUs" as="a" onClick={handleSelect}>
        <Link href="/contactus">Contact Us</Link>
      </Menu.Item>
    </Sidebar>
  );
};

export default SideBar;
