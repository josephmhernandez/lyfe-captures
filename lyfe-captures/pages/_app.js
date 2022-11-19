import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { useEffect } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store/index";
import nProgress from "nprogress"; 
import Router from 'next/router'; 
import "../styles/nprogress.css";


Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        loader.style.display = "none";
      }
    }
  }, []); 

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MyApp;
