import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import MapsLandingPage from "../components/product/maps/MapsLandingPage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      {/* <Head>
        <title>Lyfe Captures</title>
        <meta
          name="description"
          content="Create a personalized gift worth giving. Capture memories and moments forever."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/play-button.ico" />
      </Head> */}
      

      <MapsLandingPage />
    </Fragment>
  );
}

Home.Layout = Layout;
