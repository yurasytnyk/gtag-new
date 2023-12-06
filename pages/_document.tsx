import { Partytown } from "@builder.io/partytown/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Partytown
          debug={true}
          forward={["dataLayer.push"]}
          resolveUrl={(url, location) => {
            if (url.pathname.includes("/debug/bootstrap")) {
              var proxyUrl = new URL(location.origin + "/googletagmanager/debug/bootstrap");
              proxyUrl.searchParams.append("url", url.href);
              return proxyUrl;
            }
            return url;
          }}
          set={(opts) => {
            const isDebugging = opts?.window?.location?.search.includes("gtm_debug");
            if (isDebugging && opts?.name === "type" && opts?.nodeName === "SCRIPT") {
              return opts.prevent;
            }
            return opts.continue;
          }}
        />

        <script
          id="gtm"
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXQZBDRL');`,
          }}
        />
      </Head>

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
