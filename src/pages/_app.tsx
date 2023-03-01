// ** React Imports
import { useEffect, useState } from "react";
import type { ReactElement, ReactNode } from "react";

// ** Next Imports
import Script from "next/script";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

// ** Layouts
import UserLayout from "../layouts/UserLayout";
import BlankLayout from "../layouts/BlankLayout";

// ** Amplify Imports
import { Amplify, API } from "aws-amplify";
import awsExports from "../aws-exports";

// ** Redux Imports
import { Provider } from "react-redux";
import { store } from "../features/user/store";
import { checkUserIsAuthenticated } from "../features/user/userSlice";

// ** Components
import Login from "../pages/login";

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

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean | null>();

  // Fix here!
  const getLayout =
    Component.getLayout ??
    (true
      ? (page) => <UserLayout>{page}</UserLayout>
      : () => (
          <BlankLayout>
            <Login />
          </BlankLayout>
        ));

  useEffect(() => {
    store.dispatch(checkUserIsAuthenticated()).then(() => {
      console.log("User status: " + store.getState().user.loginStatus);
      setIsUserLoggedIn(store.getState().user.loginStatus);
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}
