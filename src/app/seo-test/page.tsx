import { Metadata } from 'next';
import { ServerStructuredData } from '@/components/StructuredData';
import { structuredData } from '@/lib/structured-data';
import { seoManager } from '@/lib/seo';

export const metadata: Metadata = seoManager.generateMetadata({
  title: 'SEO Test Page - Structured Data Demo',
  description: 'Test page showcasing SEO and structured data implementation for Casino.ca',
  canonical: '/seo-test',
});

export default function SEOTestPage() {
  // Generate sample structured data
  const organizationData = structuredData.generateOrganizationData();
  const websiteData = structuredData.generateWebsiteData();
  const breadcrumbData = structuredData.generateBreadcrumbData([
    { name: 'Home', url: '/' },
    { name: 'SEO Test', url: '/seo-test' },
  ]);
  
  const faqData = structuredData.generateFAQData([
    {
      question: 'Is online gambling legal in Canada?',
      answer: 'Yes, online gambling is legal in Canada when conducted through licensed and regulated platforms.',
    },
    {
      question: 'How do I choose a safe online casino?',
      answer: 'Look for proper licensing, security certifications, fair gaming practices, and positive user reviews.',
    },
  ]);

  const sampleReview = structuredData.generateCasinoReviewData({
    name: 'Sample Casino',
    rating: 4.5,
    reviewText: 'This is an excellent online casino with great games and bonuses.',
    datePublished: '2025-01-01',
  });

  const allStructuredData = [organizationData, websiteData, breadcrumbData, faqData, sampleReview];

  return (
    <>
      <ServerStructuredData data={allStructuredData} />
      
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="container-fluid max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            SEO & Structured Data Test Page
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Phase 7 Implementation Status
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Sitemap Generation (Static + Dynamic)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Robots.txt Configuration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>JSON-LD Structured Data</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>SEO Utilities & Metadata</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Organization Schema</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Website Schema</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Breadcrumb Schema</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>FAQ Schema</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Generated URLs in Sitemap
            </h2>
            <p className="text-gray-600 mb-4">
              Our sitemap generator creates URLs for static pages plus dynamic content from the database:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Static pages (Home, Casinos, Bonuses, Reviews, Categories)</li>
              <li>Dynamic casino pages (/casinos/[slug])</li>
              <li>Dynamic bonus pages (/bonuses/[slug])</li>
              <li>Dynamic review pages (/reviews/[slug])</li>
              <li>Dynamic category pages (/categories/[slug])</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Current sitemap contains 15 URLs including seeded data.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Available Commands
            </h2>
            <div className="bg-gray-100 rounded p-4">
              <code className="text-sm">
                npm run docker:sitemap    # Generate sitemap.xml<br/>
                curl localhost:3001/sitemap.xml    # View dynamic sitemap<br/>
                npm run docker:lint       # Validate code quality
              </code>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
