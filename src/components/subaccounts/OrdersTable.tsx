import { Order } from '@/types/subaccount';

interface OrdersTableProps {
  orders: Order[];
}

export function OrdersTable({ orders }: OrdersTableProps) {
  if (!orders.length) {
    return (
      <div className="text-center py-8 text-gray-400">
        No open orders
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="text-left text-gray-400 text-sm">
          <tr>
            <th className="py-3 px-4">Market</th>
            <th className="py-3 px-4">Type</th>
            <th className="py-3 px-4">Side</th>
            <th className="py-3 px-4">Size</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {orders.map((order, index) => (
            <tr key={index} className="text-white">
              <td className="py-3 px-4">{order.market}</td>
              <td className="py-3 px-4">{order.type}</td>
              <td className={`py-3 px-4 ${order.side === 'BUY' ? 'text-green-500' : 'text-red-500'}`}>
                {order.side}
              </td>
              <td className="py-3 px-4">{order.size}</td>
              <td className="py-3 px-4">${order.price.toLocaleString()}</td>
              <td className="py-3 px-4">{order.status}</td>
              <td className="py-3 px-4">
                <button className="bg-[#374151] hover:bg-[#4B5563] text-white text-xs px-3 py-1 rounded">
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
