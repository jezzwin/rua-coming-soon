import React from "react"

export const metadata = {
  title: 'Refund & Cancellation Policy - RUAA',
}

export default function RefundCancellationPage() {
  return (
    <main className="min-h-screen py-16 bg-white/80">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-6">Refund &amp; Cancellation Policy</h1>
        <p className="mb-4">At RUAA, customer satisfaction is important to us.</p>

        <h2 className="text-xl font-medium mt-4 mb-2">Cancellation</h2>
        <p className="mb-4">Orders can be cancelled only before production or dispatch begins.</p>
        <p className="mb-4">Custom-made, personalised, and hand-painted products cannot be cancelled once production has started.</p>

        <h2 className="text-xl font-medium mt-4 mb-2">Refunds</h2>
        <p className="mb-2">Refunds are issued only if:</p>
        <ul className="list-disc list-inside mb-4">
          <li>You receive a damaged product.</li>
          <li>You receive the wrong product.</li>
        </ul>
        <p className="mb-4">To request a refund, contact us within 48 hours of delivery and include clear photos of the product and packaging.</p>
        <p className="mb-4">Once approved, refunds will be processed within 7–10 business days to the original payment method.</p>

        <h2 className="text-xl font-medium mt-4 mb-2">Exchanges</h2>
        <p className="mb-4">Exchanges are available only for damaged or incorrect items after verification.</p>
        <p className="mb-4">Unboxing video is mandatory.</p>
        <p className="mb-4">Normal wear, improper washing, or colour variations due to screen settings are not eligible for refunds or exchanges.</p>
      </div>
    </main>
  )
}
