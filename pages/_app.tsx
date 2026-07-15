import type { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="SaveADay helps every customer enquiry move forward while giving your team back time."
        />
        <link rel="icon" href="/logo.svg" />
        <title>SaveADay — More customers. Less chasing.</title>
      </Head>
      <div className="font-sans">
        <Component {...pageProps} />
      </div>
    </>
  );
}
