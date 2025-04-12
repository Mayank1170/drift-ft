import { Position } from '@/types/subaccount';

interface PositionsTableProps {
  positions: Position[];
}

export function PositionsTable({ positions }: PositionsTableProps) {
  if (!positions.length) {
    return (
      <div className="text-center py-8 text-gray-400">
        No open positions
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="text-left text-gray-400 text-sm">
          <tr>
            <th className="py-3 px-4">Market</th>
            <th className="py-3 px-4">Size</th>
            <th className="py-3 px-4">Entry Price</th>
            <th className="py-3 px-4">Index Price</th>
            <th className="py-3 px-4">PnL</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {positions.map((position, index) => {
            const isPositive = position.pnl >= 0;
            return (
              <tr key={index} className="text-white">
                <td className="py-3 px-4">{position.market}</td>
                <td className="py-3 px-4">{position.size}</td>
                <td className="py-3 px-4">${position.entryPrice.toLocaleString()}</td>
                <td className="py-3 px-4">${position.indexPrice.toLocaleString()}</td>
                <td className={`py-3 px-4 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {isPositive ? '+' : ''}{position.pnl.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </td>
                <td className="py-3 px-4">
                  <button className="bg-[#374151] hover:bg-[#4B5563] text-white text-xs px-3 py-1 rounded">
                    Close
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
