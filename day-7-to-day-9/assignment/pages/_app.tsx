import type { AppProps } from "next/app";

import { SiteFooter, SiteHeader } from "../components";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </>
  );
}

export default MyApp;
