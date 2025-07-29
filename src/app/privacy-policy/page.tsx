import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                make a deposit, or contact our customer support.
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Personal identification information (name, email, phone number)</li>
                <li>Payment and financial information</li>
                <li>Gaming preferences and history</li>
                <li>Device and usage information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Detect and prevent fraud and abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Information Sharing
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You have the right to access, update, or delete your personal information. 
                You may also opt out of certain communications from us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Email: privacy@casino.ca<br />
                Phone: 1-800-CASINO-1<br />
                Address: 123 Gaming Street, Toronto, ON M5V 3A8, Canada
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
