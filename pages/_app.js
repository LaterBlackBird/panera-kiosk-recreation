import Head from "next/head";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Welcome To Panera</title>
        <meta name="description" content="A panera bread kiosk duplicate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence mode="wait" exitBeforeEnter initial={false}>
        {getLayout(<Component {...pageProps} />)}
      </AnimatePresence>
    </>
  );
}

export default MyApp;
