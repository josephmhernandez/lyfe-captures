// Combine header and foot layout.

import { Fragment } from "react";
import Footer from "./Footer";
import PromoBanner from "./PromoBanner";
import NavigationBar from "./NavigationBar";
import classes from "./Layout.module.css";
// import { useIsFirstRender } from "../hooks/useIsFirstRender";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useIsFirstRender } from "../../hooks/useIsFirstRender";
import MobileNavigationBar from "./MobileNavigationBar";
import React from "react";

const Layout = (props) => {
  const [initialRenderComplete, setInitialRenderComplete] =
    React.useState(false);

  const isMobile = useMediaQuery("(max-width: 600px)");

  React.useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  const renderNavBar = () => {
    if (initialRenderComplete) {
      return renderComp(isMobile);
    }

    return <div></div>;
  };

  return (
    <Fragment className={classes.layout}>
      <PromoBanner />
      {renderNavBar()}
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;

function renderComp(isMobile) {
  // const isFirst = useIsFirstRender();

  // if (isFirst) {
  //   console.log("first render!!!!");
  // }

  if (isMobile) {
    return (
      <Fragment>
        <MobileNavigationBar />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <NavigationBar />
    </Fragment>
  );
}
