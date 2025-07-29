import { Metadata } from 'next';
import { seoManager } from '@/lib/seo';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = seoManager.generateMetadata({
  title: 'About Casino.ca - Your Trusted Online Casino Guide',
  description: 'Learn about Casino.ca\'s mission to provide Canadian players with honest, comprehensive reviews and guides for safe online gambling. Our expert team ensures you find the best casinos.',
  keywords: [
    'about casino.ca',
    'online casino reviews',
    'canadian casino experts',
    'casino guide team',
    'trusted casino reviews'
  ]
});

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Chief Editor',
      experience: '10+ years',
      expertise: 'Casino Reviews & Industry Analysis',
      bio: 'Sarah has been reviewing online casinos since 2014, with a focus on player safety and fair gaming practices.'
    },
    {
      name: 'Marcus Chen',
      role: 'Technical Analyst',
      experience: '8+ years',
      expertise: 'Software Testing & Security',
      bio: 'Marcus specializes in evaluating casino software, payment systems, and cybersecurity measures.'
    },
    {
      name: 'Emma Thompson',
      role: 'Compliance Specialist',
      experience: '12+ years',
      expertise: 'Gaming Law & Regulations',
      bio: 'Emma ensures all reviewed casinos meet Canadian gaming regulations and licensing requirements.'
    },
    {
      name: 'David Rodriguez',
      role: 'Game Specialist',
      experience: '6+ years',
      expertise: 'Slot Games & Table Games',
      bio: 'David reviews and analyzes casino games, focusing on RTP, volatility, and player experience.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Casino.ca founded with mission to help Canadian players' },
    { year: '2021', event: 'Reviewed over 100 online casinos' },
    { year: '2022', event: 'Launched comprehensive game database' },
    { year: '2023', event: 'Expanded to cover live dealer and mobile gaming' },
    { year: '2024', event: 'Introduced real-time bonus tracking system' },
    { year: '2025', event: 'Serving over 500,000 Canadian players monthly' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-casino-red to-casino-gold text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Casino.ca
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted source for honest casino reviews, expert guides, and safe gaming recommendations in Canada.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-casino-red">
            Contact Our Team
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Mission Statement */}
        <section className="mb-16">
          <Card padding="lg" className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              At Casino.ca, we&apos;re dedicated to providing Canadian players with the most comprehensive, 
              honest, and up-to-date information about online casinos. Our goal is to ensure every player 
              can make informed decisions and enjoy safe, responsible gaming experiences.
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-casino-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Player Safety</h3>
                <p className="text-gray-600">We only recommend licensed, regulated casinos that prioritize player protection.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-casino-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Honest Reviews</h3>
                <p className="text-gray-600">Our reviews are unbiased, transparent, and based on thorough testing and analysis.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-casino-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600">We provide comprehensive guides to help players understand games and strategies.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Casino.ca was founded in 2020 by a team of gaming industry veterans who recognized 
                  the need for a truly independent casino review site focused specifically on the 
                  Canadian market.
                </p>
                <p>
                  We saw too many players falling victim to rogue operators, misleading bonuses, 
                  and poor customer service. Our founders decided to create a platform that would 
                  cut through the marketing noise and provide honest, detailed reviews based on 
                  real player experiences.
                </p>
                <p>
                  Today, we&apos;ve reviewed hundreds of online casinos, helped thousands of players 
                  find safe gaming environments, and continue to advocate for transparency and 
                  responsible gambling practices across the industry.
                </p>
              </div>
            </div>
            <Card padding="lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Journey</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-casino-red text-white px-3 py-1 rounded-full text-sm font-semibold min-w-fit">
                      {milestone.year}
                    </div>
                    <p className="text-gray-700 text-sm">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of casino experts, analysts, and compliance specialists work together 
              to bring you the most accurate and comprehensive casino reviews in Canada.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card key={index} padding="lg" className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-casino-red to-casino-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-casino-red font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.experience} in {member.expertise}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Values & Principles */}
        <section className="mb-16">
          <Card padding="lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values & Principles</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-casino-red rounded-full mr-3"></span>
                  Independence
                </h3>
                <p className="text-gray-700">
                  We maintain complete editorial independence and never let commercial relationships 
                  influence our reviews or recommendations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-casino-gold rounded-full mr-3"></span>
                  Transparency
                </h3>
                <p className="text-gray-700">
                  We clearly disclose our testing methodology, rating criteria, and any affiliate 
                  relationships to ensure full transparency.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-casino-blue rounded-full mr-3"></span>
                  Accuracy
                </h3>
                <p className="text-gray-700">
                  We regularly update our reviews and information to ensure accuracy and relevance 
                  in the fast-changing online casino landscape.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Responsibility
                </h3>
                <p className="text-gray-700">
                  We promote responsible gambling practices and provide resources for players who 
                  may need help with gambling-related issues.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Innovation
                </h3>
                <p className="text-gray-700">
                  We continuously improve our review process and website features to better serve 
                  the Canadian gaming community.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Community
                </h3>
                <p className="text-gray-700">
                  We actively engage with the Canadian gaming community to understand player needs 
                  and concerns.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Contact CTA */}
        <section>
          <Card padding="lg" className="text-center bg-gradient-to-r from-casino-red/5 to-casino-gold/5">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Have questions about our reviews? Want to suggest a casino for evaluation? 
              We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Us
              </Button>
              <Button size="lg" variant="outline">
                Submit a Casino
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
