'use client';

import { useParams, useRouter } from 'next/navigation';
import { useSubaccountData } from '@/hooks/useSubaccountData';
import { Card } from '@/components/ui/Card';
import { CollateralSection } from '@/components/subaccounts/CollateralSection';
import { PositionsTable } from '@/components/subaccounts/PositionsTable';
import { OrdersTable } from '@/components/subaccounts/OrdersTable';
import { ActionButtons } from '@/components/subaccounts/ActionButtons';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';

export default function SubaccountDetailsPage() {
  const { id } = useParams();
  const subaccountId = parseInt(id as string);
  const router = useRouter();
  const { data, isLoading, error } = useSubaccountData(subaccountId);

  const handleTrade = () => {
    router.push(`/trading?subaccount=${subaccountId}`);
  };

  const handleDeposit = () => {
    console.log(`Open deposit modal for subaccount ${subaccountId}`);
  };

  const handleWithdraw = () => {
    console.log(`Open withdraw modal for subaccount ${subaccountId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-white">
        <Header />
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 p-4 md:p-6">
            <div className="max-w-6xl mx-auto">
              <div className="animate-pulse space-y-6">
                <div className="flex justify-between items-center">
                  <div className="h-8 bg-[#1E293B] rounded w-48"></div>
                  <div className="flex space-x-2">
                    <div className="h-10 bg-[#1E293B] rounded w-24"></div>
                    <div className="h-10 bg-[#1E293B] rounded w-24"></div>
                    <div className="h-10 bg-[#1E293B] rounded w-24"></div>
                  </div>
                </div>
                <div className="h-32 bg-[#1E293B] rounded"></div>
                <div className="h-64 bg-[#1E293B] rounded"></div>
                <div className="h-64 bg-[#1E293B] rounded"></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-white">
        <Header />
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 p-4 md:p-6">
            <div className="max-w-6xl mx-auto">
              <Card className="p-8 text-center">
                <h2 className="text-xl font-medium mb-2">Error Loading Subaccount</h2>
                <p className="text-gray-400">{error || 'Subaccount not found'}</p>
                <button 
                  onClick={() => router.push('/')}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Return to Dashboard
                </button>
              </Card>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h1 className="text-xl font-semibold">Subaccount {subaccountId}</h1>
              <ActionButtons 
                subaccountId={subaccountId}
                onTrade={handleTrade}
                onDeposit={handleDeposit}
                onWithdraw={handleWithdraw}
              />
            </div>
            <div className="space-y-6">
              <CollateralSection collateral={data.collateral} />
              <PositionsTable positions={data.positions} />
              <OrdersTable orders={data.orders} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
