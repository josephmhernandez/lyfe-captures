import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { Fragment } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import store from '../store/index'; 

function MyApp({ Component, pageProps }) {


  return (
    <Provider store={store}>
      <Head>
        <title>Lyfe Captures wtf</title>
        <link rel="icon" href="/play-button.ico" />
        <meta
          name="description"
          content="Create a personalized gift worth giving. Capture memories and moments forever."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
