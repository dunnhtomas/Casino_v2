import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { RatingStars } from '@/components/ui/RatingStars';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { getBreadcrumbStructuredData, getHomePageStructuredData } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Payment Methods | Casino.ca',
  description: 'Complete guide to online casino payment methods in Canada. Compare deposit and withdrawal options including Interac, credit cards, e-wallets, and cryptocurrencies.',
  keywords: 'casino payment methods, Interac, credit cards, e-wallets, cryptocurrency, deposits, withdrawals, Canada',
  openGraph: {
    title: 'Best Casino Payment Methods in Canada',
    description: 'Secure and fast payment options for Canadian online casino players.',
    type: 'website',
  },
};

interface PaymentMethod {
  id: string;
  name: string;
  type: 'Traditional' | 'E-Wallet' | 'Cryptocurrency' | 'Bank Transfer';
  logo: string;
  rating: number;
  processingTime: {
    deposit: string;
    withdrawal: string;
  };
  fees: {
    deposit: string;
    withdrawal: string;
  };
  limits: {
    minDeposit: string;
    maxDeposit: string;
    minWithdrawal: string;
    maxWithdrawal: string;
  };
  pros: string[];
  cons: string[];
  availability: 'Widely Available' | 'Limited' | 'Select Casinos';
  security: number;
  popularity: number;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'interac',
    name: 'Interac',
    type: 'Bank Transfer',
    logo: '/images/payments/interac.webp',
    rating: 4.8,
    processingTime: {
      deposit: 'Instant',
      withdrawal: '1-3 business days'
    },
    fees: {
      deposit: 'Free',
      withdrawal: 'Free'
    },
    limits: {
      minDeposit: '$10',
      maxDeposit: '$5,000',
      minWithdrawal: '$20',
      maxWithdrawal: '$5,000'
    },
    pros: [
      'Most popular in Canada',
      'High security standards',
      'Direct bank transfer',
      'No additional registration needed'
    ],
    cons: [
      'Available only to Canadian banks',
      'Withdrawal times can vary'
    ],
    availability: 'Widely Available',
    security: 10,
    popularity: 95
  },
  {
    id: 'visa',
    name: 'Visa',
    type: 'Traditional',
    logo: '/images/payments/visa.webp',
    rating: 4.6,
    processingTime: {
      deposit: 'Instant',
      withdrawal: '3-5 business days'
    },
    fees: {
      deposit: 'Free',
      withdrawal: 'May apply'
    },
    limits: {
      minDeposit: '$10',
      maxDeposit: '$10,000',
      minWithdrawal: '$20',
      maxWithdrawal: '$5,000'
    },
    pros: [
      'Universally accepted',
      'Instant deposits',
      'Familiar to all users',
      'Built-in fraud protection'
    ],
    cons: [
      'Some banks block gambling transactions',
      'Slower withdrawal times',
      'Potential fees'
    ],
    availability: 'Widely Available',
    security: 9,
    popularity: 85
  },
  {
    id: 'paypal',
    name: 'PayPal',
    type: 'E-Wallet',
    logo: '/images/payments/paypal.webp',
    rating: 4.7,
    processingTime: {
      deposit: 'Instant',
      withdrawal: '24-48 hours'
    },
    fees: {
      deposit: 'Free',
      withdrawal: 'Free'
    },
    limits: {
      minDeposit: '$10',
      maxDeposit: '$10,000',
      minWithdrawal: '$10',
      maxWithdrawal: '$10,000'
    },
    pros: [
      'Fast withdrawals',
      'Extra security layer',
      'Buyer protection',
      'Easy to use'
    ],
    cons: [
      'Not accepted at all casinos',
      'Account limitations possible',
      'Service fees in some regions'
    ],
    availability: 'Limited',
    security: 9,
    popularity: 70
  },
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    type: 'Cryptocurrency',
    logo: '/images/payments/bitcoin.webp',
    rating: 4.4,
    processingTime: {
      deposit: '10-30 minutes',
      withdrawal: '1-24 hours'
    },
    fees: {
      deposit: 'Network fees apply',
      withdrawal: 'Network fees apply'
    },
    limits: {
      minDeposit: '$20',
      maxDeposit: 'No limit',
      minWithdrawal: '$50',
      maxWithdrawal: 'No limit'
    },
    pros: [
      'Anonymous transactions',
      'Fast processing',
      'No geographic restrictions',
      'Lower fees'
    ],
    cons: [
      'Price volatility',
      'Technical knowledge required',
      'Limited casino acceptance',
      'Regulatory uncertainty'
    ],
    availability: 'Select Casinos',
    security: 8,
    popularity: 25
  }
];

const faqData = [
  {
    id: 'safest-payment',
    question: 'What is the safest payment method for online casinos?',
    answer: 'Interac and PayPal are considered the safest due to their encryption standards and fraud protection. Interac offers direct bank transfers with high security, while PayPal provides an additional layer between your bank and the casino.',
  },
  {
    id: 'fastest-withdrawal',
    question: 'Which payment method has the fastest withdrawals?',
    answer: 'E-wallets like PayPal, Skrill, and Neteller typically offer the fastest withdrawals (24-48 hours). Cryptocurrency can also be fast but depends on network congestion.',
  },
  {
    id: 'payment-fees',
    question: 'Are there fees for casino deposits and withdrawals?',
    answer: 'Most reputable casinos offer free deposits. Withdrawal fees vary by method and casino. Interac and most e-wallets are typically free, while credit cards may have fees.',
  },
  {
    id: 'payment-limits',
    question: 'What are typical deposit and withdrawal limits?',
    answer: 'Limits vary by casino and payment method. Typical minimums are $10-20 for deposits and $20-50 for withdrawals. Maximums range from $5,000 to unlimited depending on your VIP status.',
  }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://casino.ca' },
  { name: 'Payment Methods', url: 'https://casino.ca/payments' }
];

const structuredData = [
  getHomePageStructuredData(),
  getBreadcrumbStructuredData(breadcrumbs)
];

export default function PaymentMethodsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Casino Payment Methods
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete guide to secure and fast payment options for Canadian online casino players. 
              Compare deposit and withdrawal methods to find the best option for you.
            </p>
          </div>

          {/* Payment Methods Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {paymentMethods.map((method) => (
              <div key={method.id}>
                <Card padding="lg">
                  <>
                    <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                        {method.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {method.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {method.type}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <RatingStars rating={method.rating} size="sm" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {method.rating}/5
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    method.availability === 'Widely Available' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                      : method.availability === 'Limited'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
                  }`}>
                    {method.availability}
                  </span>
                </div>

                {/* Processing Times */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Deposit Time
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {method.processingTime.deposit}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Withdrawal Time
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {method.processingTime.withdrawal}
                    </p>
                  </div>
                </div>

                {/* Limits */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Deposit Limits
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {method.limits.minDeposit} - {method.limits.maxDeposit}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Withdrawal Limits
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {method.limits.minWithdrawal} - {method.limits.maxWithdrawal}
                    </p>
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {method.pros.slice(0, 2).map((pro, index) => (
                        <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-green-500 mr-1">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {method.cons.slice(0, 2).map((con, index) => (
                        <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-red-500 mr-1">✗</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                  </>
                </Card>
              </div>
            ))}
          </div>

          {/* Payment Security Guide */}
          <div className="mb-12">
            <Card padding="lg">
              <>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Payment Security Best Practices
                </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Before Making a Deposit
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Verify the casino&apos;s license and regulation
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Check for SSL encryption (https://)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Read payment terms and conditions
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Set deposit limits on your account
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    During Transactions
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Use secure networks (avoid public Wi-Fi)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Double-check all transaction details
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Keep records of all transactions
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Log out completely after transactions
                    </li>
                  </ul>
                </div>
                </div>
              </>
            </Card>
          </div>          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqData} />
          </div>
        </div>
      </div>
    </>
  );
}
