import { Menu, Sidebar } from "semantic-ui-react";
import Link from "next/link";
import { useEffect } from "react";
import classes from "./SideBar.module.css";

const SideBar = ({ animation, direction, visible, setVisible }) => {
  // For mobile view vertical menu
  const handleScroll = () => {
    setVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleSelect = () => {
    setVisible(false);
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
      className={classes.sideBar}
    >
      <Menu.Item as="a" onClick={handleSelect}>
        <i className="minus icon"> </i>
      </Menu.Item>
      <Menu.Item as="a" onClick={handleSelect}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item as="a" onClick={handleSelect}>
        <Link href="/aboutus">About Us</Link>
      </Menu.Item>
      <Menu.Item as="a" onClick={handleSelect}>
        <Link href="/maps"> Create Now </Link>
      </Menu.Item>
      <Menu.Item as="a" onClick={handleSelect}>
        <Link href="/sizes">Sizes</Link>
      </Menu.Item>
      <Menu.Item as="a" onClick={handleSelect}>
        <Link href="/faqs">FAQs</Link>
      </Menu.Item>
      <Menu.Item as="a" onClick={handleSelect}>
        <Link href="/contactus">Contact Us</Link>
      </Menu.Item>
    </Sidebar>
  );
};

export default SideBar;
