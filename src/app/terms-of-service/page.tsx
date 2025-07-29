import { Metadata } from 'next';
import { seoManager } from '@/lib/seo';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = seoManager.generateMetadata({
  title: 'Terms of Service - Casino.ca Legal Terms and Conditions',
  description: 'Read Casino.ca\'s terms of service including user responsibilities, disclaimer policies, and legal information for using our casino review website.',
  keywords: [
    'casino.ca terms of service',
    'website terms and conditions',
    'casino review legal terms',
    'user agreement',
    'website disclaimer'
  ]
});

export default function TermsOfServicePage() {
  const lastUpdated = 'January 1, 2025';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">
              Last updated: {lastUpdated}
            </p>
          </div>

          <Card padding="lg" className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Casino.ca (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) 
                govern your use of our website located at casino.ca (the &quot;Service&quot;) operated by Casino.ca.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                with any part of these terms, then you may not access the Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using Casino.ca, you accept and agree to be bound by the terms and 
                provision of this agreement. Additionally, when using Casino.ca&apos;s specific services, 
                you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Description of Service */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Casino.ca is an informational website that provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Reviews and ratings of online casinos</li>
                <li>Information about casino games and strategies</li>
                <li>Bonus and promotional information</li>
                <li>Educational content about responsible gambling</li>
                <li>Industry news and updates</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We do not operate any gambling services directly. We are an independent review and 
                information site only.
              </p>
            </section>

            {/* Age Restriction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Age Restriction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You must be at least 18 years of age (or the legal gambling age in your jurisdiction, 
                whichever is higher) to use this Service. By using our Service, you represent and 
                warrant that you meet this age requirement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to request proof of age and to restrict access to users who 
                cannot provide adequate verification.
              </p>
            </section>

            {/* User Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">As a user of Casino.ca, you agree to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Provide accurate and truthful information when requested</li>
                <li>Use the Service only for lawful purposes</li>
                <li>Not attempt to hack, compromise, or otherwise gain unauthorized access to our systems</li>
                <li>Not transmit any viruses, malware, or other harmful code</li>
                <li>Not spam or send unsolicited communications through our platforms</li>
                <li>Comply with all applicable local, provincial, and federal laws</li>
                <li>Be responsible for your own gambling decisions and activities</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are and will remain 
                the exclusive property of Casino.ca and its licensors. The Service is protected by 
                copyright, trademark, and other laws. Our trademarks and trade dress may not be used 
                in connection with any product or service without our prior written consent.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                publicly perform, republish, download, store, or transmit any of the material on our 
                Service without prior written consent.
              </p>
            </section>

            {/* Disclaimers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimers</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-800 font-semibold">Important Disclaimers:</p>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Information Accuracy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide accurate and up-to-date information, we make no warranties 
                about the completeness, reliability, and accuracy of this information. Any action you 
                take upon the information on this website is strictly at your own risk.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Gambling Risks</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Gambling involves financial risk and may result in loss of money. We strongly encourage 
                responsible gambling and recommend that users only gamble with money they can afford to lose.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Third-Party Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are not responsible for the content, policies, or practices of third-party websites 
                or services that we may link to or reference. Use of third-party services is at your own risk.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall Casino.ca, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your use of the Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our total liability to you for all claims arising from or relating to this Agreement 
                or your use of the Service shall not exceed $100 CAD.
              </p>
            </section>

            {/* Affiliate Relationships */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Affiliate Relationships</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Casino.ca may contain affiliate links to online casinos and gaming operators. When you 
                click on these links and sign up or make deposits, we may receive a commission from 
                the operator at no additional cost to you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These affiliate relationships do not influence our reviews or recommendations. We maintain 
                editorial independence and provide honest assessments of all reviewed operators.
              </p>
            </section>

            {/* Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of the Service, to understand our practices regarding the collection and use 
                of your personal information.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, your right to use the Service will cease immediately.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the Province of Ontario 
                and the laws of Canada applicable therein. Any disputes arising from these Terms shall 
                be subject to the exclusive jurisdiction of the courts of Ontario, Canada.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days&apos; notice prior to any 
                new terms taking effect.
              </p>
              <p className="text-gray-700 leading-relaxed">
                What constitutes a material change will be determined at our sole discretion. By continuing 
                to access or use our Service after those revisions become effective, you agree to be bound 
                by the revised terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@casino.ca</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> 123 Bay Street, Suite 2500, Toronto, ON M5K 1A1, Canada</p>
                <p className="text-gray-700"><strong>Phone:</strong> 1-800-CASINO-CA</p>
              </div>
            </section>

            {/* Severability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is held to be unenforceable or invalid, such provision 
                will be changed and interpreted to accomplish the objectives of such provision to the 
                greatest extent possible under applicable law, and the remaining provisions will continue 
                in full force and effect.
              </p>
            </section>

            {/* Entire Agreement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms constitute the entire agreement between you and Casino.ca regarding your use 
                of the Service and supersede all prior and contemporaneous written or oral agreements 
                between you and Casino.ca.
              </p>
            </section>
          </Card>

          {/* Last Updated Notice */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              These Terms of Service were last updated on {lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
