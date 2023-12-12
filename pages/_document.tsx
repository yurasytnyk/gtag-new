import { Partytown } from "@builder.io/partytown/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Partytown
          debug={true}
          forward={["dataLayer.push"]}
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

        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3790744,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
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
