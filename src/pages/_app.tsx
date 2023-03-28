// ** React Imports
import { useEffect } from "react";
import type { ReactElement, ReactNode } from "react";

// ** Next Imports
import Script from "next/script";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

// ** Amplify Imports
import { Amplify, API } from "aws-amplify";
import awsExports from "../aws-exports";

// ** Styles
import "../../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// ** Auth
import { ThirdwebProvider } from "@thirdweb-dev/react";

Amplify.register(API);
Amplify.configure({ ...awsExports, ssr: true });

config.autoAddCss = false;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
      `}
      </Script>
      <ThirdwebProvider
        // Required configuration for the provider, but doesn't affect Auth.
        activeChain="ethereum"
        authConfig={{
          // Set this to your domain to prevent phishing attacks
          domain: "localhost:3000",
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </ThirdwebProvider>
    </>
  );
}
