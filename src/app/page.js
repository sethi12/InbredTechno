'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white font-sans">
   

      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Building Future-Ready Digital Products</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          InbredTechno specializes in building innovative mobile applications used by thousands globally.
          Our apps are live on both Play Store and App Store, empowering users with simplicity and performance.
        </p>
      </section>

      {/* Services/Highlights */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-12">Our Services & Pricing</h2>
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
      <p className="mb-2">We build Android & iOS mobile apps tailored to your needs with beautiful UI and scalable architecture.</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Starting at ₹30,000</p>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">Website Development</h3>
      <p className="mb-2">Custom websites built using React, Next.js, and TailwindCSS for businesses and startups.</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Starting at ₹15,000</p>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
      <p className="mb-2">Modern, intuitive UI/UX design services to enhance your app/web usability and engagement.</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Starting at ₹5,000</p>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">Backend & API Integration</h3>
      <p className="mb-2">Robust backend systems with Firebase, Node.js, and secure APIs for real-time operations.</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Custom pricing based on project scope</p>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
      <p className="mb-2">Social media marketing, SEO, and ad campaigns to grow your business online.</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Packages from ₹10,000/month</p>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
      <p className="mb-2">Ongoing maintenance and support for your app or website post-launch.</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Starts at ₹2,000/month</p>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-700 text-center py-4 mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} InbredTechno. All rights reserved. |{" "}
          <a href="https://play.google.com/store/apps/developer?id=InbredTechno" target="_blank" className="underline hover:text-blue-600">Google Play</a>{" "}
          |{" "}
          <a href="https://apps.apple.com/developer/inbredtechno/id000000000" target="_blank" className="underline hover:text-blue-600">App Store</a>
        </p>
      </footer>
    </div>
  );
}
