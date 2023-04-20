// ** React Imports
import type { ReactElement, ReactNode } from "react";

// ** Next Imports
import Script from "next/script";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

// ** Amplify Imports
import { Amplify, API } from "aws-amplify";
import awsExports from "../aws-exports";

// ** Lens & Wagmi Imports
import {
  LensProvider,
  LensConfig,
  development,
} from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

import { ThirdwebProvider } from "@thirdweb-dev/react";

// ** Styles
import "../../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

Amplify.register(API);
Amplify.configure({ ...awsExports, ssr: true });

config.autoAddCss = false;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const chains = [polygonMumbai];
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string;

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: development,
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      {/* <Script
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
      </Script> */}
      <WagmiConfig client={wagmiClient}>
        <LensProvider config={lensConfig}>
          <ThirdwebProvider>
            {getLayout(<Component {...pageProps} />)}
          </ThirdwebProvider>
        </LensProvider>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
