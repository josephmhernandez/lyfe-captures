import { Html, Head, Main, NextScript } from "next/document";
import loader from "../components/ui/Loader";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          src="https://js.stripe.com/v3/"
          crossOrigin="anonymous"
        ></script>

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
        <script
          src="https://code.jquery.com/jquery-3.1.1.min.js"
          integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
          crossOrigin="anonymous"
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>

        <script>$('.rating').rating();</script>
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
      </body>
    </Html>
  );
}
