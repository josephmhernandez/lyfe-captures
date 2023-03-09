import { useMediaQuery } from "@mantine/hooks";
import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import MobileNavigationBar from "../components/layout/MobileNavigationBar";
import NavigationBar from "../components/layout/NavigationBar";
import MapsLandingPage from "../components/product/maps/MapsLandingPage";
import MapsLandingPageMobile from "../components/product/maps/MapsLandingPageMobile";
import { useIsFirstRender } from "../hooks/useIsFirstRender";
export default function Home(props) {
  console.log("props.isMobileView: Home", props.isMobileView);

  // if (props.isMobileView) {
  //   return (
  //     <Fragment>
  //       <MapsLandingPageMobile />
  //     </Fragment>
  //   );
  // }

  // return (
  //   <Fragment>
  //     <MapsLandingPage />
  //   </Fragment>
  // );

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
  const isFirst = useIsFirstRender();

  if (isFirst) {
    console.log("first render!!!!");
  }

  if (isMobile) {
    return (
      <Fragment>
        {/* <MobileNavigationBar /> */}
        <MapsLandingPageMobile />
      </Fragment>
    );
  }

  return (
    <Fragment>
      {/* <NavigationBar /> */}
      <MapsLandingPage />
    </Fragment>
  );
}
