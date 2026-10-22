import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

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
        <link rel="icon" type="image/svg+xml" href="/brand/saveaday-woven-color.svg" />
        <title>Saveaday — Keep your business moving</title>
      </Head>
      <div className="font-sans">
        <Component {...pageProps} />
      </div>
      <GoogleAnalytics />
      <Script
        id="saveaday-business-chat"
        src="https://youbot.live/widget.js"
        data-server="https://r1.saveaday.ai/saveaday"
        strategy="afterInteractive"
      />
    </>
  );
}
