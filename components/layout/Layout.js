// Combine header and foot layout.

import { Fragment } from "react";
import Footer from "./Footer";
import PromoBanner from "./PromoBanner";
import NavigationBar from "./NavigationBar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment className={classes.layout}>
      <PromoBanner />
      <NavigationBar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
