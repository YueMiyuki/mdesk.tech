import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import LcpOptimizer from "@/components/LcpOptimizer"
import PerformanceOptimizer from "@/components/PerformanceOptimizer"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
  variable: "--font-inter",
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata = {
  title: "mdesk.tech - Designing and hosting your digital future",
  description: "mdesk.tech specializes in cutting-edge web design and reliable hosting solutions.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mdesk.tech"),
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mdesk.tech",
    title: "mdesk.tech - Designing and hosting your digital future",
    description:
      "Cutting-edge web design and reliable hosting solutions for businesses that want to stand out in the digital landscape.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "mdesk.tech - Designing and hosting your digital future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mdesk.tech - Designing and hosting your digital future",
    description:
      "Cutting-edge web design and reliable hosting solutions for businesses that want to stand out in the digital landscape.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://mdesk.tech",
  },
  verification: {
    google: "google-site-verification-code",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} style={{ colorScheme: "dark" }}>
      <head>
        {/* Add preconnect for external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Inline critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root { --font-inter: '__Inter_Fallback_${inter.variable}'; }
              .critical-content { opacity: 1 !important; }
              
              /* Additional critical CSS for LCP */
              h1, [data-lcp-element="true"] {
                opacity: 1 !important;
                visibility: visible !important;
                content-visibility: visible !important;
                transform: translateZ(0);
              }
              
              /* Optimize paint performance */
              .composite-layer {
                transform: translateZ(0);
                backface-visibility: hidden;
                perspective: 1000px;
              }
              
              /* Reduce layout shifts */
              .motion-safe {
                transform: translateZ(0);
              }
              
              /* Optimize LCP elements */
              [data-lcp-element] {
                content-visibility: visible;
                contain-intrinsic-size: 0 auto;
              }
              
              /* Defer non-critical content */
              section:not(:first-of-type) {
                content-visibility: auto;
                contain-intrinsic-size: 0 500px;
              }
              
              /* Pre-allocate space for grid pattern */
              .grid-pattern {
                height: 100% !important;
                width: 100% !important;
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                contain: strict !important;
              }
              
              /* Add support for reduced motion */
              @media (prefers-reduced-motion: reduce) {
                * {
                  animation-duration: 0.01ms !important;
                  animation-iteration-count: 1 !important;
                  transition-duration: 0.01ms !important;
                  scroll-behavior: auto !important;
                }
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {/* Add priority hint for LCP content */}
              <div className="critical-content" data-priority="high">
                {children}
              </div>
            </main>
            <Footer />
          </div>

          {/* Client components for performance optimization */}
          <LcpOptimizer />
          <PerformanceOptimizer />

          {/* Defer non-critical scripts */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="lazyOnload"
            data-priority="low"
          />
          <Script id="google-analytics" strategy="lazyOnload" data-priority="low">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                send_page_view: false,
                transport_type: 'beacon',
                anonymize_ip: true,
              });
            `}
          </Script>

          {/* Load analytics only in production */}
          {process.env.NODE_ENV === "production" && (
            <>
              <Analytics />
              <SpeedInsights />
              {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}

