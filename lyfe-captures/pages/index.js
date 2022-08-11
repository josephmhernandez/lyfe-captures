import Head from "next/head";
import Layout from "../components/layout/Layout";
import MapsLandingPage from "../components/product/maps/MapsLandingPage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lyfe Captures</title>
        <meta
          name="description"
          content="Create a personalized gift worth giving. Capture memories and moments forever."
        />
        <link rel="icon" href="/play-button.ico" />
      </Head>
      <Layout>
        <MapsLandingPage />
      </Layout>
    </div>
  );
}
