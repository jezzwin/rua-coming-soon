import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/components/boty/cart-context'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600']
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'R U A A - Luxury Fashion',
  description: 'Luxury fashion brand offering exquisite contemporary designs.',
  generator: 'v0.app',
  keywords: ['ruaa','luxury fashion', 'contemporary design', 'high-end', 'exclusive', 'designer', 'R U A A', 'fashion brand', 'premium clothing', 'couture', 'style', 'elegance', 'sophistication'],
  icons: {
    icon: [
      {
        url: '/images/ruaa-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/ruaa-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/ruaa-logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#F7F4EF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
