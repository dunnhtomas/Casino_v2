import { Metadata } from 'next';
import { seoManager } from '@/lib/seo';
import { Card } from '@/components/ui/Card';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export const metadata: Metadata = seoManager.generateMetadata({
  title: 'Privacy Policy - Casino.ca',
  description: 'Read our comprehensive privacy policy to understand how Casino.ca collects, uses, and protects your personal information.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'casino.ca']
});

const faqData = [
  {
      id: 'personal-info-collected',
      question: 'What personal information do you collect?',
    answer: 'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, and preferences.'
  },
  {
      id: 'info-usage',
      question: 'How do you use my personal information?',
    answer: 'We use your information to provide our services, improve your experience, communicate with you, comply with legal requirements, and protect our users and services.'
  },
  {
      id: 'third-party-sharing',
      question: 'Do you share my information with third parties?',
    answer: 'We may share your information with service providers, business partners, or as required by law. We do not sell your personal information to third parties.'
  },
  {
      id: 'update-delete-info',
      question: 'How can I update or delete my information?',
    answer: 'You can update your account information at any time by logging into your account. To delete your information, please contact our support team.'
  }
];

export default function PrivacyPolicyPage() {
  const lastUpdated = '2025-01-15';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Card className="mb-8">
            <div className="p-8 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-lg text-gray-600">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {new Date(lastUpdated).toLocaleDateString()}
              </p>
            </div>
          </Card>

          {/* Introduction */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Casino.ca (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>
          </Card>

          {/* Information We Collect */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Register for an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us through our support channels</li>
                <li>Participate in surveys or promotions</li>
                <li>Leave reviews or comments</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device and usage:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>IP address and location information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website</li>
                <li>Device information and identifiers</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies and Tracking Technologies</h3>
              <p className="text-gray-700 leading-relaxed">
                We use cookies, web beacons, and similar tracking technologies to collect and store information about your preferences and activities on our website. You can control cookie preferences through your browser settings.
              </p>
            </div>
          </Card>

          {/* How We Use Information */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Personalizing your experience</li>
                <li>Communicating with you about our services</li>
                <li>Sending newsletters and promotional materials (with your consent)</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Analyzing usage patterns to improve our services</li>
                <li>Detecting and preventing fraud or abuse</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
          </Card>

          {/* Information Sharing */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, customer support, and marketing assistance.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Partners</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share information with casino operators and gaming providers featured on our platform to facilitate services and improve user experience.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose your information if required by law, regulation, legal process, or governmental request, or to protect our rights, property, or safety.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-medium">Important:</p>
                <p className="text-blue-700 text-sm mt-1">
                  We do not sell, trade, or rent your personal information to third parties for their marketing purposes.
                </p>
              </div>
            </div>
          </Card>

          {/* Data Security */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </Card>

          {/* Your Rights */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your information</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Object:</strong> Object to certain processing activities</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section below.
              </p>
            </div>
          </Card>

          {/* Retention */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </div>
          </Card>

          {/* Children's Privacy */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </div>
          </Card>

          {/* International Transfers */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place to protect your information.
              </p>
            </div>
          </Card>

          {/* Changes to Policy */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div><strong>Email:</strong> privacy@casino.ca</div>
                  <div><strong>Address:</strong> 123 Privacy Street, Toronto, ON M5V 3A8, Canada</div>
                  <div><strong>Phone:</strong> 1-800-CASINO-1</div>
                </div>
              </div>
            </div>
          </Card>

          {/* FAQ */}
          <Card>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <FAQAccordion items={faqData} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
