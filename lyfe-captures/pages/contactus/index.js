import Layout from "../../components/layout/Layout";

import shopNowImage from "../../public/OO-Summer-Sale-Page-Banner-3840x1400px.webp";
import ShopNowBanner from "../../components/product/ShopNowBanner";
import classes from "./index.module.css";
const ContactUs = () => {
  return (
    <div className={classes.box}>
      <ShopNowBanner to="/maps" src={shopNowImage} alt="" />
      <ShopNowBanner to="/maps" src={shopNowImage} alt="" />
      <ShopNowBanner to="/maps" src={shopNowImage} alt="" />
    </div>
  );
};
export default ContactUs;
