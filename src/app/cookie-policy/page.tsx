import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how we use cookies and similar technologies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                enabling certain functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Types of Cookies We Use
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Essential Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  These cookies are necessary for the website to function properly. They enable core 
                  functionality such as security, network management, and accessibility.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Functional Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  These cookies enable the website to provide enhanced functionality and personalization. 
                  They may be set by us or by third party providers whose services we have added to our pages.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Marketing Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  These cookies are used to track visitors across websites. The intention is to display 
                  ads that are relevant and engaging for the individual user.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. How to Control Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are 
                already on your computer and you can set most browsers to prevent them from being placed.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                However, please note that if you do this, you may have to manually adjust some preferences 
                every time you visit a site and some services and functionality may not work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Third-Party Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may use third-party services that place cookies on your device. These services include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing functionality</li>
                <li>Payment processors for transaction security</li>
                <li>Customer support tools for live chat functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Updates to This Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Email: cookies@casino.ca<br />
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
