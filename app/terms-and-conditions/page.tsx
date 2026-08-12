import React from "react"

export const metadata = {
  title: 'Terms & Conditions - RUAA',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-16 bg-white/80">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-6">Terms &amp; Conditions</h1>
        <p className="mb-4">By using the RUAA website, you agree to the following terms.</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>All products are subject to availability.</li>
          <li>Product images are for reference. Slight colour variations may occur due to lighting and screen settings.</li>
          <li>Every hand-painted garment is individually created, making each piece unique.</li>
          <li>Prices may change without prior notice.</li>
          <li>Orders are confirmed only after successful payment.</li>
          <li>RUAA reserves the right to cancel orders in exceptional situations, in which case a full refund will be provided.</li>
          <li>Customers are responsible for providing accurate shipping information.</li>
          <li>Any misuse of the website or its content is prohibited.</li>
        </ul>
        <p>By placing an order, you acknowledge that you have read and agreed to these Terms &amp; Conditions.</p>
      </div>
    </main>
  )
}
