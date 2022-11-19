import { Html, Head, Main, NextScript } from "next/document";
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
        {/* <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" /> */}
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
