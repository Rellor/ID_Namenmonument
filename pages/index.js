import Head from "next/head";
import DataBody from "../components/data/data";
import styles from "../styles/Home.module.css";
import { KanyeProvider } from "../components/provider/provider";

export default function Home() {
  return (
    <KanyeProvider>
      {" "}
      <div className={styles.container}>
        <Head>
          <title>Namenmonument Tropenmuseum</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          {/* <HomeBody /> */}
          <DataBody />
        </main>
      </div>
    </KanyeProvider>
  );
}
