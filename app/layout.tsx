import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lao construction Bank - Digital Banking for Everyone",
  description: "Global banking network serving underbanked communities and uplifting small businesses worldwide",
  icons: {
    icon: "/images/lcb-logo.png",
    apple: "/images/lcb-logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body className={`${inter.className} overflow-x-hidden bg-sky-blue/30 dark:bg-prussian-blue`}>
        <Script nonce="INTERNAL_SCRIPT" id="csp-script" strategy="beforeInteractive">{`
          try {
            const nonce = document.head.querySelector('meta[property="csp-nonce"]')?.getAttribute('content');
            if (nonce) {
              document.documentElement.setAttribute('data-nonce', nonce);
            }
          } catch (e) {
            console.error('Failed to set nonce:', e);
          }
        `}</Script>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
