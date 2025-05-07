import type { Metadata } from "next"
import { Manrope as Font } from "next/font/google"
import "./globals.css"

import { Analytics } from "@vercel/analytics/react"

const fontSans = Font({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SDG: Planejar & Construir",
  description: "SDG: Planejar & Construir",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fontSans.variable} ${fontSans.className} scroll-smooth overflow-x-hidden antialiased `}
      >
        <Analytics />
        {children}
      </body>
    </html>
  )
}
