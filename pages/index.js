import { useMediaQuery } from "@mantine/hooks";
import { Fragment, useEffect } from "react";
import Layout from "../components/layout/Layout";
import MapsLandingPage from "../components/product/maps/MapsLandingPage";
import MapsLandingPageMobile from "../components/product/maps/MapsLandingPageMobile";
// import { rudderInitialize } from "../utils/Analytics/rudderInitialize";

export default function Home(props) {
  useEffect(() => {
    // rudderInitialize();
  }, []);

  // const search = () => {
  // window.rudderanalytics.page();
  // window.rudderanalytics.track("Track Event.");
  // };

  return <div>{renderComp()}</div>;
}

Home.Layout = Layout;

// Need this here to get the current device that the user is on.
// Can't have getInitialProps in the component itself. It must be on the page component.
Home.getInitialProps = async (ctx) => {
  let isMobileView = await (ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  //Returning the isMobileView as a prop to the component for further use.
  return {
    isMobileView: Boolean(isMobileView),
  };
};

// export default MapPage;

function renderComp() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  if (isMobile) {
    return (
      <Fragment>
        <MapsLandingPageMobile />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <MapsLandingPage />
    </Fragment>
  );
}
