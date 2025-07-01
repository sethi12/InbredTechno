'use client';
import Head from 'next/head';

export default function ShippingDeliveryPolicy() {
  return (
    <>
      <Head>
        <title>Shipping & Delivery Policy | InbredTechno</title>
      </Head>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-10 font-sans">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Shipping & Delivery Policy</h1>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Last updated on: 01-07-2025</p>

          <div className="space-y-6 leading-relaxed text-lg">
            <p>
              This Shipping and Delivery Policy applies to all purchases made through the mobile application <strong>Zizzle</strong>, owned and operated by <strong>CHAITANYA SETHI</strong> (InbredTechno).
            </p>

            <h2 className="text-2xl font-semibold mt-6">1. Delivery Timeline</h2>
            <p>
              Upon successful payment confirmation, we will initiate the digital delivery of any virtual content (such as in-app credits, subscriptions, or features) within a maximum of <strong>24 hours</strong>. For any physical merchandise (if offered), orders are processed within <strong>2–3 business days</strong> and delivered within <strong>5–7 business days</strong> depending on the location.
            </p>

            <h2 className="text-2xl font-semibold mt-6">2. Delivery Methods</h2>
            <p>
              - Digital products will be automatically activated within your Zizzle account.<br />
              - Physical products (if applicable) will be delivered via our trusted courier partners and tracking information will be provided via email/SMS.
            </p>

            <h2 className="text-2xl font-semibold mt-6">3. Shipping Charges</h2>
            <p>
              - No shipping charges apply to digital content.<br />
              - Physical items may incur shipping fees which will be displayed at checkout (if applicable).
            </p>

            <h2 className="text-2xl font-semibold mt-6">4. Service Availability</h2>
            <p>
              Our services are available pan-India. However, delivery timelines may vary for remote or restricted regions.
            </p>

            <h2 className="text-2xl font-semibold mt-6">5. Delays</h2>
            <p>
              While we strive for timely delivery, certain factors such as unforeseen weather, courier issues, or service disruptions may cause delays. We appreciate your understanding in such cases.
            </p>

            <h2 className="text-2xl font-semibold mt-6">6. Contact Information</h2>
            <p>
              For any questions about your order or delivery status, please contact us at:<br />
              <strong>Email:</strong> <a href="mailto:sethichaitanya08@gmail.com" className="text-blue-600 underline">sethichaitanya08@gmail.com</a><br />
              <strong>Phone:</strong> <a href="tel:9267926408" className="text-blue-600 underline">9267926408</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
