import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import loader from "../components/ui/Loader";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />

        <style>{loader}</style>
      </Head>
      <body>
        <div id={"globalLoader"}>
          <div className={"loader"}>
            <div></div>
          </div>
        </div>
        <Main />
        <NextScript />
        <Script
          id="script-stripe-js"
          src="https://js.stripe.com/v3/"
          crossOrigin="anonymous"
        ></Script>
        <Script
          id="script-jquery"
          src="https://code.jquery.com/jquery-3.1.1.min.js"
          integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
          crossOrigin="anonymous"
        ></Script>

        <Script
          id="script-semantic-cloudflare"
          src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"
        ></Script>
        <Script src="js/vendor/jquery-1.11.2.min.js"></Script>

        <Script src="js/accordion.js"></Script>

        <Script language="javascript">
          {`$('.ui.accordion').accordion('refresh');
`}
        </Script>

        <Script id="script-rating">{`$(".rating").rating();`}</Script>
      </body>
    </Html>
  );
}
