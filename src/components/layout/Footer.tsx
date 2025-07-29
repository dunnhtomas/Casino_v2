import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Casino.ca</h3>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted guide to the best online casinos in Canada. Expert reviews, exclusive bonuses, and responsible gambling.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/casinos" className="text-gray-400 hover:text-white transition-colors">Online Casinos</Link></li>
              <li><Link href="/bonuses" className="text-gray-400 hover:text-white transition-colors">Casino Bonuses</Link></li>
              <li><Link href="/games" className="text-gray-400 hover:text-white transition-colors">Casino Games</Link></li>
              <li><Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">Casino Reviews</Link></li>
              <li><Link href="/guides" className="text-gray-400 hover:text-white transition-colors">How-to Guides</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors">Casino News</Link></li>
            </ul>
          </div>

          {/* Game Categories */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Games</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/games/slots" className="text-gray-400 hover:text-white transition-colors">Slot Games</Link></li>
              <li><Link href="/games/table-games" className="text-gray-400 hover:text-white transition-colors">Table Games</Link></li>
              <li><Link href="/live-dealer" className="text-gray-400 hover:text-white transition-colors">Live Dealer</Link></li>
              <li><Link href="/jackpots" className="text-gray-400 hover:text-white transition-colors">Jackpot Games</Link></li>
              <li><Link href="/mobile" className="text-gray-400 hover:text-white transition-colors">Mobile Casino</Link></li>
              <li><Link href="/providers" className="text-gray-400 hover:text-white transition-colors">Game Providers</Link></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal & Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/responsible-gambling" className="text-gray-400 hover:text-white transition-colors">Responsible Gambling</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Accepted Payment Methods</h4>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white text-gray-900 px-3 py-1 rounded text-xs font-medium">Visa</div>
            <div className="bg-white text-gray-900 px-3 py-1 rounded text-xs font-medium">Mastercard</div>
            <div className="bg-white text-gray-900 px-3 py-1 rounded text-xs font-medium">Interac</div>
            <div className="bg-white text-gray-900 px-3 py-1 rounded text-xs font-medium">PayPal</div>
            <div className="bg-white text-gray-900 px-3 py-1 rounded text-xs font-medium">Neteller</div>
            <div className="bg-white text-gray-900 px-3 py-1 rounded text-xs font-medium">Skrill</div>
            <div className="bg-white text-gray-900 px-3 py-1 rounded text-xs font-medium">Bitcoin</div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest casino bonuses and news delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 text-white px-6 py-2 rounded-r-lg hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Responsible Gambling Notice */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-yellow-400 font-semibold mb-2">⚠️ Responsible Gambling</h4>
            <p className="text-gray-400 text-sm mb-4">
              Gambling can be addictive. Please play responsibly and only gamble with money you can afford to lose.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <a href="https://www.gamblingtherapy.org/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                Gambling Therapy
              </a>
              <a href="https://www.gamblersanonymous.org/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                Gamblers Anonymous
              </a>
              <a href="https://www.ncpgambling.org/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                Problem Gambling
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Casino.ca. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-xs text-gray-500">18+ Only</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">Licensed in Canada</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">Play Responsibly</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}