'use client';
import Head from 'next/head';

export default function RefundCancellationPolicy() {
  return (
    <>
      <Head>
        <title>Refund & Cancellation Policy | InbredTechno</title>
      </Head>
      <main className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Refund & Cancellation Policy</h1>

          <p className="mb-4">
            This Refund and Cancellation Policy outlines the terms under which you may cancel your order or request a refund for products and services purchased through the InbredTechno platform.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Cancellations will be accepted only if the request is made within <strong>10 days of placing the order</strong>.</li>
            <li>Cancellation requests may not be accepted if the product has already been shipped or is out for delivery. In such cases, you may choose to reject the order at the time of delivery.</li>
            <li>Orders for perishable goods such as flowers, food items, and other consumables are <strong>not eligible for cancellation</strong>.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>If you receive a damaged or defective item, you must report it to our customer service within <strong>10 days of delivery</strong>. Our team will assess the issue and coordinate with the seller or merchant for resolution.</li>
            <li>Products that do not match the listing or fail to meet your expectations must be reported within <strong>10 days of receipt</strong>. Refunds will be considered after proper verification by our support team.</li>
            <li>If the product carries a manufacturer warranty, all warranty claims must be directed to the respective manufacturer.</li>
            <li>In cases where a refund is approved, it will be <strong>processed within 3–5 business days</strong> to the original payment method.</li>
            <li>Shipping charges (if any) are non-refundable unless the refund is due to our error.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>We reserve the right to reject refund or cancellation requests that do not meet the policy conditions stated above.</li>
            <li>All refunds are subject to review and validation by our support and logistics teams.</li>
            <li>Our decision on refund and cancellation matters is final and binding.</li>
          </ul>

          <p className="mt-8">If you have any questions or need assistance regarding this policy, please contact our support team through the details available on our <a href="/contact" className="text-blue-600 underline">Contact</a> page.</p>
        </div>
      </main>
    </>
  );
}
