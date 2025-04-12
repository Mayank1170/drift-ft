import { useRouter } from 'next/navigation';

interface SubaccountCardProps {
  id: number;
  collateral: string;
  positions: number;
  orders: number;
}

export function SubaccountCard({ id, collateral, positions, orders }: SubaccountCardProps) {
  const router = useRouter();
  
  const handleViewDetails = () => {
    router.push(`/subaccount/${id}`);
  };
  
  const handleTrading = () => {
    router.push(`/trading?subaccount=${id}`);
  };
  
  return (
    <div className="bg-[#1f2937] rounded-lg p-6">
      <h3 className="font-medium mb-4">Subaccount {id}</h3>

      <div className="mb-4">
        <div className="text-xs text-gray-400">Total Collateral</div>
        <div className="font-semibold">{collateral}</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-xs text-gray-400">Open Positions</div>
          <div>{positions}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Open Orders</div>
          <div>{orders}</div>
        </div>
      </div>

      <div className="flex gap-2">
        <button onClick={handleViewDetails} className="bg-blue-600 hover:bg-blue-700 rounded-md text-sm">
          View Details
        </button>
        <button onClick={handleTrading} className="bg-blue-600 hover:bg-blue-700 rounded-md text-sm">
          Trading
        </button>
      </div>
    </div>
  );
}
