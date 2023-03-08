import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import MapsLandingPage from "../components/product/maps/MapsLandingPage";
import MapsLandingPageMobile from "../components/product/maps/MapsLandingPageMobile";
export default function Home(props) {
  console.log("props.isMobileView: Home", props.isMobileView);

  if (props.isMobileView) {
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

Home.Layout = Layout;

// Need this here to get the current device that the user is on.
// Can't have getInitialProps in the component itself. It must be on the page component.
Home.getInitialProps = async (ctx) => {
  console.log(
    "ctx.req.headers['user-agent']: Home",
    ctx.req.headers["user-agent"]
  );

  let waits = await ctx.req.headers["user-agent"];
  console.log("waits: Home", waits);

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
