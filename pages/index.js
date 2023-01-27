
import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import MapsLandingPage from "../components/product/maps/MapsLandingPage";


export default function Home() {
  return (
    <Fragment>
      <MapsLandingPage />
    </Fragment>
  );
}

Home.Layout = Layout;
