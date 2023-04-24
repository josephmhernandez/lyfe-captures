import { useMediaQuery } from "@mantine/hooks";
import { Fragment, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import MapsLandingPage from "../components/product/maps/MapsLandingPage";
import MapsLandingPageMobile from "../components/product/maps/MapsLandingPageMobile";
import { Modal } from "semantic-ui-react";

export default function Home(props) {
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
  const [showDiscount, setShowDiscount] = useState(false);

  // On mount execute this code
  useEffect(() => {
    // On component did mount
    // Check if the user has visited the site before
    // if (localStorage.getItem("visited") === null) {
    //   // And show the discount banner
    //   setTimeout(() => {
    //     // If not, set the visited flag to true
    //     localStorage.setItem("visited", true);
    //     setShowDiscount(true);
    //   }, 3000);
    // }
  }, []);

  if (isMobile) {
    return (
      <Fragment>
        <div>
          <Modal onClose={() => setShowDiscount(false)} open={showDiscount}>
            <Modal.Header>Lock in your price</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>
                  First time website visitors have the chance to lock in a 20%
                  discount on top of the sale going on right now. Just enter
                  your email below and we'll send you a discount code.
                </p>
                <p>
                  Right now, all maps are $499. With the 20% discount, you can
                  get a map for $399.20. This is the lowest price we'll ever
                  offer. Don't miss out! This is your only chance to lock in
                  this price.
                </p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>

        <MapsLandingPageMobile />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Modal onClose={() => setShowDiscount(false)} open={showDiscount}>
        <Modal.Header>Lock in your price</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>
              First time website visitors have the chance to lock in a 20%
              discount on top of the sale going on right now. Just enter your
              email below and we'll send you a discount code.
            </p>
            <p>
              Right now, all maps are $499. With the 20% discount, you can get a
              map for $399.20. This is the lowest price we'll ever offer. Don't
              miss out! This is your only chance to lock in this price.
            </p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      <MapsLandingPage />
    </Fragment>
  );
}
