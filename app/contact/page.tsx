import React from "react"

export const metadata = {
  title: 'Contact - RUAA',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 bg-white/80">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-6">Contact us</h1>
        <p className="mb-4">We’d love to hear from you.</p>
        <p className="mb-2">Whether you have a question about an order, a custom design, sizing, collaborations, or anything else, our team is here to help.</p>

        <div className="mt-6 space-y-2 text-sm">
          <p><strong>Business Name:</strong> R U A A</p>
          <p><strong>Email:</strong> <a href="mailto:ruaabyruthantony@gmail.com" className="text-primary">ruaabyruthantony@gmail.com</a></p>
          <p><strong>Phone/WhatsApp:</strong> <a href="tel:+919080692402" className="text-primary">+91 9080692402</a></p>
          <p><strong>Business Hours:</strong> Monday – Saturday<br/>10:00 AM – 6:00 PM (IST)</p>
        </div>

        <p className="mt-6">We’ll do our best to respond within 24–48 business hours.</p>

        <p className="mt-6">Thank you for choosing RUAA.</p>
      </div>
    </main>
  )
}
