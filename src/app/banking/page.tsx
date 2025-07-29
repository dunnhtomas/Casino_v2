import { Card } from '@/components/ui/Card';

export default function BankingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Banking & Payments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <h2 className="text-xl font-semibold mb-2">Credit Cards</h2>
          <p className="text-gray-600">Visa, MasterCard, American Express accepted</p>
        </Card>
      </div>
    </div>
  );
}
