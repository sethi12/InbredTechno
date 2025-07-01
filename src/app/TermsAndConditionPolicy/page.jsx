import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | InbredTechno</title>
      </Head>
      <main className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>

          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            Last Updated: {new Date().toLocaleDateString('en-IN')}
          </p>

          <p className="mb-4">
            This document is an electronic record in terms of Information Technology Act, 2000 and rules
            thereunder as applicable and the amended provisions pertaining to electronic records in various
            statutes as amended by the Information Technology Act, 2000. This electronic record is generated
            by a computer system and does not require any physical or digital signatures.
          </p>

          <p className="mb-4">
            This document is published in accordance with Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011, requiring publishing of the rules, privacy policy and terms of use for access or usage of{' '}
            <a
              href="https://play.google.com/store/apps/details?id=com.InbredTechno.Zizzle&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              https://play.google.com/store/apps/details?id=com.InbredTechno.Zizzle
            </a>{' '}
            (“Platform”).
          </p>

          <p className="mb-4">
            The Platform is owned by <strong>INBREDTECHNO</strong>, a company incorporated under the Companies Act, 1956 with its registered office at <strong>wz-471 ms block, Hari Nagar, New Delhi</strong> (hereinafter referred to as ‘Platform Owner’, 'we', 'us', 'our').
          </p>

          <p className="mb-6">
            Your use of the Platform, its services and tools are governed by the following terms and conditions (“Terms of Use”) along with applicable policies. By using the Platform, you agree to these terms. These Terms can be updated at any time.
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. User Obligations</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>You must provide accurate and complete registration information.</li>
            <li>We make no warranties on accuracy, performance, or completeness of information on this Platform.</li>
            <li>Your use of services is at your own risk. Assess suitability independently.</li>
            <li>Platform content is proprietary. You may not claim IP rights on it.</li>
            <li>Unauthorized use may lead to legal consequences.</li>
            <li>You agree to pay for services availed.</li>
            <li>You agree not to use the platform for illegal/unlawful purposes.</li>
            <li>External links are provided for information and governed by respective sites’ policies.</li>
            <li>Transactions entered via this platform are legally binding.</li>
            <li>You shall indemnify the Platform Owner from any third-party claims arising out of your actions.</li>
            <li>Force majeure events relieve both parties from obligations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">2. Governing Law & Jurisdiction</h2>
          <p className="mb-4">
            These Terms shall be governed by and interpreted in accordance with the laws of India. All disputes shall be subject to exclusive jurisdiction of courts in <strong>New Delhi, Delhi</strong>.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Contact</h2>
          <p>
            All concerns or communication related to these Terms should be addressed via the contact
            information available on our <a href="/contact" className="text-blue-500 underline">Contact Us</a> page.
          </p>
        </div>
      </main>
    </>
  );
}
