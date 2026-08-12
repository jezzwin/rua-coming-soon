"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="pt-20 pb-10 relative overflow-hidden" style={{ backgroundColor: '#fffefc' }}>
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="text-[200px] sm:text-[200px] md:text-[400px] lg:text-[400px] xl:text-[400px] font-bold text-white/20 whitespace-nowrap leading-none" style={{ fontFamily: 'Georgia, serif' }}>
          R U A A
        </span>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/ruaa-logo.png"
                alt="RUAA Logo"
                width={90}
                height={90}
                className="w-[90px] h-[90px]"
              />
            </div>
            <h2 className="text-3xl text-foreground mb-4" style={{ fontFamily: 'Georgia, serif' }}>R U A A</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Inspired by heritage, designed for the future. Hand-painted couture
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/__ruaa____?igsh=NXJqbnZsZjJocjV4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1EdNkdPQFX/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@ruaabyruthantony"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:underline">About us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">Privacy policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/refund-cancellation" className="hover:underline">Refund &amp; Cancellation</Link>
              </li>
              <li>
                <Link href="/shipping-delivery" className="hover:underline">Shipping &amp; Delivery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Optional small description / newsletter placeholder */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Stay in touch</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Sign up for updates, new collections and exclusive offers.
            </p>
            {/* Add newsletter form later if desired */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-1">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RUAA. All rights reserved.
            </p>
            <p className="max-sm:text-xs text-muted-foreground">
              powered by bitraccoon
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
