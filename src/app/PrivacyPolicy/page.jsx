'use client';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | InbredTechno</title>
      </Head>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Last updated: Automatically upon changes</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p>
              Our privacy policy helps you understand what information we collect at <strong>InbredTechno / Zizzle</strong>,
              how it is used, and the choices you have.
              <br />
              Zizzle is a free app provided by InbredTechno intended for use as is. By using this Service, you agree to the
              collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Information Collection and Use</h2>
            <p>
              We may require certain personally identifiable information such as name, email, gender, location, and pictures
              to enhance your experience. This data is stored securely and used strictly for service improvement.
              <br />
              The app may use third-party services which may collect information used to identify you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Cookies</h2>
            <p>
              While our Service does not use cookies directly, some third-party tools may. You may choose to accept or refuse
              cookies, but doing so might limit certain features.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Location Information</h2>
            <p>
              We may use location data sent from users' devices to provide location-based services, but only within the scope
              of the intended feature.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Device Information</h2>
            <p>
              Device details may be collected to ensure a better experience and prevent fraud. However, no personally
              identifiable information is included in this data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Service Providers</h2>
            <p>
              We may use third-party services to support our operations. These providers may have access to your personal
              data but are strictly bound by confidentiality and cannot use the information for other purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Security</h2>
            <p>
              We implement commercially acceptable security practices, but no method is 100% secure. Please understand that we
              cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Children’s Privacy</h2>
            <p>
              Our services are not intended for anyone under the age of 13. We do not knowingly collect data from children. If
              you discover a child has shared personal data, contact us immediately and we’ll remove it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
            <p>
              We may update this policy from time to time. You are encouraged to review this page regularly. Updates take
              effect once posted.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, please contact:
            </p>
            <p className="text-blue-600 underline">
              <a href="mailto:sethichaitanya08@gmail.com">sethichaitanya08@gmail.com</a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
