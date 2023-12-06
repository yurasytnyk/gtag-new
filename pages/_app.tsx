import "@/styles/globals.css";
import { Partytown } from "@builder.io/partytown/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
