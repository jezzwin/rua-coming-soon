"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#e3e1e2' }}>
      {/* Background Video */}
      <div className="border-b border-border/50 p-6 py-2" style={{ backgroundColor: '#e3e1e2' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'cover'
          }}
        >
          <source src="/videos/IMG_7750%20(2).mp4" type="video/mp4" />
        </video>
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-20 mr-14 lg:mr-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="w-full lg:max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span className="text-sm uppercase mb-6 block text-black animate-blur-in opacity-0 tracking-normal" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Luxury Fashion
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-balance text-black">
              <span className="block animate-blur-in opacity-0 font-semibold" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>Coming Soon.</span>
              <span className="block animate-blur-in opacity-0 font-semibold xl:text-9xl text-7xl" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>RUAA</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0 text-black animate-blur-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              An exquisite collection of contemporary design and fashion awaits. Be the first to know.
            </p>
          </div>
        </div>
      </div>


    </section>
  )
}
