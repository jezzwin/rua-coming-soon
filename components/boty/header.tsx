"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
       <nav className="max-w-7xl mx-auto px-6 lg:px-8 backdrop-blur-md rounded-lg py-0 my-0 animate-scale-fade-in bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.32)]" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}>
        <div className="flex items-center justify-between h-[68px]">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground boty-transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          />


          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
            <Image
              src="/images/rua-logo-black.png"
              alt="RUAA Logo"
              width={48}
              height={48}
              className="w-10 h-10"
            />
            <h1 className="text-2xl tracking-wider text-foreground" style={{ fontFamily: 'Georgia, serif' }}>R U A A</h1>
          </Link>

          {/* Right Actions - Empty for now */}
          <div className="w-12" />
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden boty-transition ${
            isMenuOpen ? "max-h-32 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
            {/* Coming soon message */}
          </div>
        </div>
      </nav>
    </header>
  )
}
