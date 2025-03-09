import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "mdesk.tech - Designing and hosting your digital future",
  description: "mdesk.tech specializes in cutting-edge web design and reliable hosting solutions.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mdesk.tech"),
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      }
    ],
    apple: "/apple-icon",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ScrollToTop />
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
  )
}

