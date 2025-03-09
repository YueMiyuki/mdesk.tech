import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata = {
  title: "mdesk.tech - Designing and hosting your digital future",
  description:
    "mdesk.tech specializes in cutting-edge web design and reliable hosting solutions.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mdesk.tech",
  ),
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth dark"
      style={{ colorScheme: "dark" }}
    >
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="dark"
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Analytics />
          <GoogleAnalytics gaId="G-PNVSLSSS8V" />
        </ThemeProvider>
      </body>
    </html>
  );
}
