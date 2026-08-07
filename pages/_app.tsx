import type { AppProps } from "next/app";
import Head from "next/head";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="SaveADay keeps customer questions, follow-ups, bookings, and records together so your team knows what needs attention next."
        />
        <link rel="icon" href="/logo.svg" />
        <title>SaveADay — Turn more enquiries into customers</title>
      </Head>
      <div className="font-sans">
        <Component {...pageProps} />
      </div>
      <GoogleAnalytics />
    </>
  );
}
