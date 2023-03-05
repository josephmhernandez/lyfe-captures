// Combine header and foot layout.

import { Fragment } from "react";
import Footer from "./Footer";
import PromoBanner from "./PromoBanner";
import MobileNavigationBar from "./MobileNavigationBar";
import classes from "./Layout.module.css";

const MobileLayout = (props) => {
  return (
    <Fragment className={classes.layout}>
      <PromoBanner />
      <MobileNavigationBar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default MobileLayout;
