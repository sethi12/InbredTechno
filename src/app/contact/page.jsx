'use client';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | InbredTechno</title>
      </Head>
      <main className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white px-4 sm:px-8 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Heading */}
          <section>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Contact Us</h1>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Last updated on 17-02-2025 19:25:41
            </p>
            <p className="mt-4 text-center text-lg text-gray-700 dark:text-gray-300">
              We’d love to hear from you. Whether you have a question, suggestion, or just want to say hello — our team is here to help.
            </p>
          </section>

          {/* Contact Info */}
          <section className="grid sm:grid-cols-2 gap-10 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Business Details</h2>
              <p><strong>Merchant Legal Entity Name:</strong> CHAITANYA SETHI</p>

              <div>
                <p className="font-semibold">Registered Address:</p>
                <p>Gali no.8, Road no.3, Hari Nagar</p>
                <p>WZ-471, MS Block, Hari Nagar</p>
                <p>West Delhi, Delhi, PIN: 110064</p>
              </div>

              <div>
                <p className="font-semibold">Operational Address:</p>
                <p>Gali no.8, Road no.3, Hari Nagar</p>
                <p>WZ-471, MS Block, Hari Nagar</p>
                <p>West Delhi, Delhi, PIN: 110064</p>
              </div>

              <p><strong>Telephone:</strong> <a href="tel:9267926408" className="text-blue-600 underline">9267926408</a></p>
              <p><strong>Email:</strong> <a href="mailto:sethichaitanya08@gmail.com" className="text-blue-600 underline">sethichaitanya08@gmail.com</a></p>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Send Us a Message</h2>
              <form className="grid gap-5">
                <div>
                  <label className="block mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 rounded bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Type your message..."
                    className="w-full px-4 py-2 rounded bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} InbredTechno. All rights reserved.
          </div>
        </div>
      </main>
    </>
  );
}
