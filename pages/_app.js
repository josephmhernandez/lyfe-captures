import "../styles/globals.css";
import Script from "next/script";
import Layout from "../components/layout/Layout";
import MobileLayout from "../components/layout/MobileLayout";
import { useEffect, useRef } from "react";
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
function MyApp({ Component, isMobileView, pageProps }) {
  let isMobile = false;
  if (typeof window !== "undefined") {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    console.log("windowSize.current: app.js", windowSize.current);
    if (windowSize.current[0] < 768) {
      isMobile = true;
    }
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");

      if (loader) {
        loader.style.display = "none";
      }
    }
  }, []);

  const stripePromise = loadStripe(process.env.STRIPE_PK);

  console.log("isMobileView: app.js", isMobileView);
  pageProps.isMobileView = isMobile;
  return (
    <Provider store={store}>
      <Head>
        <title>Map Your Memory</title>
        <link rel="icon" href="/pin-logo.ico" />

        <meta
          name="description"
          content="Design your own unique map for a special occasion, event, or place. It's the perfect customized gift for weddings, engagements, and holidays."
        />
      </Head>
      <Elements stripe={stripePromise}>
        {isMobileView && (
          <MobileLayout>
            <Component {...pageProps} />
          </MobileLayout>
        )}

        {!isMobileView && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Elements>
    </Provider>
  );
}

// Need this so that the pageProps are passed to the page component. This checks to see if there is an "getInitialProps" function in the page component and if so, it runs it and passes the result to the page component.
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  console.log("ctx: MyApp");
  console.log("ctx.req: MyApp", ctx.req);
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
    pageProps,
  };

  return { pageProps };
};

export default MyApp;
