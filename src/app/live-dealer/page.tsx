import { Card } from '@/components/ui/Card';

export default function LiveDealerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Live Dealer Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <h2 className="text-xl font-semibold mb-2">Live Blackjack</h2>
          <p className="text-gray-600">Play blackjack with real dealers</p>
        </Card>
      </div>
    </div>
  );
}
