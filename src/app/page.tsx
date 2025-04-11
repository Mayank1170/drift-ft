// import { button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">Drift Protocol</h1>
        <div className="flex items-center gap-2 bg-[#1f2937] rounded-md px-3 py-1.5 text-sm text-gray-300">
          <span>G3IW...rXy7</span>
          <span>▼</span>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-48 border-r border-gray-800">
          <nav className="p-2">
            <button className="w-full justify-start bg-blue-600 hover:bg-blue-700 mb-2">
              Subaccounts
            </button>
            <button
              className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800 mb-2"
            >
              Trading
            </button>
            <button  className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800">
              Wallet Lookup
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Your Subaccounts</h2>
              <div className="relative">
                <Input
                  placeholder="Enter wallet address to view"
                  className="w-64 bg-[#1f2937] border-gray-700 text-gray-300 pr-10"
                />
                <button
                  className="absolute right-0 top-0 h-full bg-blue-600 hover:bg-blue-700 rounded-l-none"
                >
                  {/* <Search className="h-4 w-4" /> */}
                </button>
              </div>
            </div>

            {/* Subaccounts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Subaccount 1 */}
              <SubaccountCard number={1} collateral="$5,243.78 USDC" positions={2} orders={1} />

              {/* Subaccount 2 */}
              <SubaccountCard number={2} collateral="$12,876.45 USDC" positions={1} orders={3} />

              {/* Subaccount 3 */}
              <SubaccountCard number={3} collateral="$8,105.22 USDC" positions={0} orders={0} />

              {/* Create New Subaccount */}
              <div className="bg-[#1f2937] border border-dashed border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center min-h-[220px]">
                <div className="bg-[#374151] rounded-full p-3 mb-3">
                </div>
                <span className="text-gray-400">Create New Subaccount</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

interface SubaccountCardProps {
  number: number
  collateral: string
  positions: number
  orders: number
}

function SubaccountCard({ number, collateral, positions, orders }: SubaccountCardProps) {
  return (
    <div className="bg-[#1f2937] rounded-lg p-6">
      <h3 className="font-medium mb-4">Subaccount {number}</h3>

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
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm">View Details</button>
        <button className="flex-1 hover:bg-gray-700 text-sm">
          Trading
        </button>
      </div>
    </div>
  )
}
