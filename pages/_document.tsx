import { Partytown } from "@builder.io/partytown/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <body>
        <Main />
        <NextScript />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXQZBDRL"
            height="0"
            width="0"
            className="hidden"
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
