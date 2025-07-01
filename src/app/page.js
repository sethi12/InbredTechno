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
      <section className="py-16 px-6 max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Live Mobile Apps</h3>
          <p>Our applications are available on Play Store and App Store with thousands of active users.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">User-Centric Design</h3>
          <p>We craft digital experiences that are intuitive, beautiful, and impactful for users.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
          <p>Our products are built to scale across millions of users with real-time infrastructure.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
          <p>We consistently evolve and innovate to stay ahead in the digital era.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Cross-Platform Reach</h3>
          <p>Our apps are optimized for Android, iOS, tablets, and emerging devices.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Trusted by Users</h3>
          <p>Thousands of users trust InbredTechno apps every day for entertainment, productivity, and more.</p>
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
