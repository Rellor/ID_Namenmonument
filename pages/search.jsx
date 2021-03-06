import Head from "next/head";
import DataBody from "../components/data/data";
import styles from "../styles/Home.module.css";
import { KanyeProvider } from "../components/provider/provider";
import Header from "../components/main/navVoorbeeld";

export default function Home() {
  return (
    <KanyeProvider>
      {" "}
      <div className="App h-max w-full m-auto p-4 bg-project-donker font-Koh text-project-secondary">
        <Head>
          <title>Namenmonument Tropenmuseum</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Alex+Brush"
            rel="stylesheet"
          ></link>
        </Head>

        <Header />
        <main className={styles.main}>
          {/* <HomeBody /> */}
          <DataBody />
        </main>
      </div>
    </KanyeProvider>
  );
}
