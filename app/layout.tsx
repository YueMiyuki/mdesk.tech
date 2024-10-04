import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'mdesk.tech - Designing and hosting your digital future',
  description: 'mdesk.tech specializes in cutting-edge web design and reliable hosting solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-PNVSLSSS8V" />
      </body>
    </html>
  )
}