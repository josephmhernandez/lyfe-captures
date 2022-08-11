// Combine header and foot layout.

import { Fragment } from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

const Layout = (props) => {
  return (
    <Fragment>
      <NavigationBar />
      <main>{props.children}</main>
      {!props.hideFooter && <Footer />}
    </Fragment>
  );
};

export default Layout;
