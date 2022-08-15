import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Lyfe Captures</title>
        <link rel="icon" href="/play-button.ico" />
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
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
