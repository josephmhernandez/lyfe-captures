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
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
