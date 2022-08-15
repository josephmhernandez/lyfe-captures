// Combine header and foot layout.

import { Fragment } from "react";
import Footer from "./Footer";
import PromoBanner from "./PromoBanner";
import NavigationBar from "./NavigationBar";

const Layout = (props) => {
  return (
    <Fragment>
      <PromoBanner />
      <NavigationBar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
