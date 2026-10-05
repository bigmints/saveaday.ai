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
          content="Give your teams a simple way to report problems and your managers a clearer view of what needs attention. Spend less time chasing details with Saveaday."
        />
        <link rel="icon" href="/logo.svg" />
        <title>Saveaday — Keep your business moving</title>
      </Head>
      <div className="font-sans">
        <Component {...pageProps} />
      </div>
      <GoogleAnalytics />
    </>
  );
}
