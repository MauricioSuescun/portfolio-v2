import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { ScrollContainer } from "react-scroll";
import { appWithTranslation } from "next-i18next";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-black pt-8`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default appWithTranslation(App);
