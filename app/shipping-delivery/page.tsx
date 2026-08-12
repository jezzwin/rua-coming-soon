import React from "react"

export const metadata = {
  title: 'Shipping & Delivery Policy - RUAA',
}

export default function ShippingDeliveryPage() {
  return (
    <main className="min-h-screen py-16 bg-white/80">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-6">Shipping &amp; Delivery Policy</h1>
        <p className="mb-4">We strive to deliver your order safely and on time.</p>
        <ul className="list-disc list-inside mb-4">
          <li>Ready-to-ship products are usually dispatched within 2–5 business days.</li>
          <li>Hand-painted and made-to-order products require approximately 7–21 business days for production before dispatch.</li>
          <li>Delivery timelines vary depending on your location and courier service.</li>
          <li>Once shipped, a tracking number will be shared via email or WhatsApp.</li>
          <li>RUAA is not responsible for delays caused by courier companies, natural events, public holidays, or unforeseen circumstances.</li>
        </ul>
        <p>Please ensure your shipping address and contact details are accurate when placing your order.</p>
      </div>
    </main>
  )
}
