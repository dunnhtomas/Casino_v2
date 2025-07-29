import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Casino.ca',
  description: 'The page you are looking for could not be found.',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-white opacity-20">404</h1>
          <h2 className="text-2xl font-semibold text-white">Page Not Found</h2>
          <p className="text-gray-300">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </Link>
          
          <div className="flex justify-center space-x-4 text-sm">
            <Link href="/casinos" className="text-blue-400 hover:text-blue-300 transition-colors">
              Browse Casinos
            </Link>
            <Link href="/bonuses" className="text-blue-400 hover:text-blue-300 transition-colors">
              View Bonuses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
