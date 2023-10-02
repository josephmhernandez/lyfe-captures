import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
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
import React from "react";
import TagManager from "react-gtm-module";
import * as gtag from "../lib/gtag";
import * as pintag from "../lib/pintag";
import { useRouter } from "next/router";
import Script from "next/script";
import OfferModal from "../components/ui/OfferModal";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import { ToastContainer } from "react-toastify";

Amplify.configure({
  ...awsconfig,
  ssr: true,
});

function MyApp({ Component, isMobileView, pageProps }) {
  const router = useRouter();
  const [showDiscount, setShowDiscount] = useState(false);
  let firstTime = true;

  useEffect(() => {
    if (typeof window !== "undefined" && firstTime) {
      firstTime = false;
      const loader = document.getElementById("globalLoader");

      if (loader) {
        loader.style.display = "none";
      }
    }

    // Pinterest Tag
    pintag.pinTagEvent("pagevisit", {
      page_name: router.pathname,
    });

    // Check if the user has visited the site before
    if (localStorage.getItem("visited") === null) {
      // And show the discount banner
      setTimeout(() => {
        // If not, set the visited flag to true
        localStorage.setItem("visited", true);
        setShowDiscount(true);
      }, 10000); // 10 seconds
    }
  }, [router.events, pageProps]);

  const stripePromise = loadStripe(process.env.STRIPE_PK);

  return (
    <Provider store={store}>
      <Head>
        <title>Map Your Memory</title>
        <link rel="shortcut icon" href="/pin-logo-new.png" />
        {/* Claim website for Pinterest */}
        <meta
          name="p:domain_verify"
          content="8888a1038127b435f40ee754969a6407"
        />
        <meta
          name="description"
          content="Design your own unique map for a special occasion, event, or place. It's the perfect customized gift for weddings, engagements, and holidays."
        />
      </Head>
      <FacebookPixel />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
          }); 
        `,
        }}
      />
      <Script
        id="pinterest-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(e){if(!window.pintrk){window.pintrk = function () {
          window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
            n=window.pintrk;n.queue=[],n.version="3.0";var
            t=document.createElement("script");t.async=!0,t.src=e;var
            r=document.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
          pintrk('load', '2614363147734', {em: 'joseph.hernandez@mapyourmemory.com'});
          pintrk('page');
          `,
        }}
      />
      {/* <noscript>
        <img
          height="1"
          width="1"
          style="display:none;"
          alt=""
          src="https://ct.pinterest.com/v3/?event=init&tid=2614363147734&pd[em]=<hashed_email_address>&noscript=1"
        />
      </noscript> */}

      <Elements stripe={stripePromise}>
        <Layout>
          <ToastContainer />
          <OfferModal
            open={showDiscount}
            onClose={() => setShowDiscount(false)}
          />
          <Component {...pageProps} />
        </Layout>
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

  let isMobileView = await (ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  //Returning the isMobileView as a prop to the component for further use.
  return {
    isMobileView: Boolean(isMobileView),
    pageProps,
  };
};

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.FB_PIXEL_ID);
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

export default MyApp;
