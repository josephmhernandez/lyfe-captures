import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { useEffect } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store/index";
import nProgress from "nprogress";
import Router from "next/router";
import "../styles/nprogress.css";
import "../styles/overrides.css";
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        loader.style.display = "none";
      }
    }
  }, []);

  const stripePromise = loadStripe(process.env.STRIPE_PK);
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: "{{CLIENT_SECRET}}",
  // };

  return (
    <Provider store={store}>
      <Head>
        <title>Map Your Memory</title>
        <link rel="icon" href="/play-button.ico" />
        <script
          src="https://js.stripe.com/v3/"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="description"
          content="Design your own unique map for a special occasion, event, or place. It's the perfect customized gift for weddings, engagements, and holidays."
        />
      </Head>
      <Elements stripe={stripePromise}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Elements>
    </Provider>
  );
}

export default MyApp;
