import "../public/css/styles.css";
import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Volvo Cars</title>
        <meta name="keywords" content="Volvo, Cars"></meta>
        <meta
          name="description"
          content="Volvo Cars (Global Online Digital)"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
