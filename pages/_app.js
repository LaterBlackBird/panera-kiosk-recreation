import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome To Panera</title>
        <meta name="description" content="A panera bread kiosk duplicate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps}/>
    </>
  );
}

export default MyApp;
