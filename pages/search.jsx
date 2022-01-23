import Head from "next/head";
import DataBody from "../components/data/data";
import styles from "../styles/Home.module.css";
import { KanyeProvider } from "../components/provider/provider";
import Link from "next/link";

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

        <div className="h-1 w-full z-100 absolute inset-0 z-50">
          <header className="relative m-auto text-center">
            <div className="flex p-8 z-100 bg-white w-9/12 h-24 m-auto">
              <div className="mr-auto">
                <img
                  className="w-24"
                  src="https://www.tropenmuseum.nl/themes/custom/tropenmuseum_maintheme/logo.svg"
                  alt="logo tropenmuseum"
                />
              </div>
              <Link href="/">
                <a className="text-2xl text-tropen-rood font-medium">
                  Voorbeeld
                </a>
              </Link>
            </div>
          </header>
        </div>
        <main className={styles.main}>
          {/* <HomeBody /> */}
          <DataBody />
        </main>
      </div>
    </KanyeProvider>
  );
}
