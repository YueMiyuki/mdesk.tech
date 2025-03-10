import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/GeistVF.woff" as="font" type="font/woff" crossOrigin="anonymous" />

        {/* Inline critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Critical CSS */
          :root {
            --animate-duration: 0.5s;
          }
          
          /* Optimize paint performance */
          .composite-layer {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
          
          .content-visibility-auto {
            content-visibility: auto;
            contain-intrinsic-size: 0 500px;
          }
          
          /* Optimize LCP elements */
          [data-lcp-element] {
            content-visibility: auto;
            contain-intrinsic-size: 0 auto;
          }
          
          /* Reduce layout shifts */
          .motion-safe {
            transform: translateZ(0);
          }
        `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

