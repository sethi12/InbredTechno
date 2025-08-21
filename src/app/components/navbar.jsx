'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800">
      <div className="flex items-center gap-3">
        <Image src="/companylogo.jpg" alt="InbredTechno Logo" width={40} height={40} />
        <span className="text-2xl font-bold tracking-tight">InbredTechno</span>
      </div>
      <nav className="hidden sm:flex gap-5 text-sm font-medium">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        <Link href="/PrivacyPolicy" className="hover:text-blue-600">Privacy</Link>
        <Link href="/TermsAndConditionPolicy" className="hover:text-blue-600">Terms</Link>
         <Link href="/ShippingDelivery" className="hover:text-blue-600">Shipping</Link>
        <Link href="/RefundAndCancelation" className="hover:text-blue-600">Refund</Link>
      </nav>
    </header>
  );
}
