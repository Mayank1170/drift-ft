'use client';

import { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { SubaccountCard } from '@/components/subaccounts/SubaccountCard';
import { CreateSubaccountCard } from '@/components/subaccounts/CreateSubaccountCard';
import { Input } from '@/components/ui/input';
import { useDriftStore } from '@/store';
import dynamic from 'next/dynamic';

const DriftIntegration = dynamic(
  () => import('@/components/DriftIntegration'),
  { ssr: false }
);

export default function Home() {
  const { connected, publicKey } = useWallet();
  const [walletAddress, setWalletAddress] = useState('');
  const { subaccounts, fetchSubaccounts } = useDriftStore();

  useEffect(() => {
    if (connected && publicKey) {
      fetchSubaccounts(publicKey);
    }
  }, [connected, publicKey, fetchSubaccounts]);

  const handleViewWallet = () => {
    if (!walletAddress) return;
    console.log(`Viewing wallet: ${walletAddress}`);
  };

  const handleCreateSubaccount = () => {
    if (!connected) return;
    console.log('Creating new subaccount');
  };

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <Header />
      <DriftIntegration />

      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <h2 className="text-xl font-semibold">Your Subaccounts</h2>
              <div className="relative w-full md:w-auto">
                <Input
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="Enter wallet address to view"
                  className="w-full md:w-64 pr-12"
                />
                <button 
                  onClick={handleViewWallet}
                  className="absolute right-0 top-0 h-full rounded-l-none"
                  aria-label="View wallet"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subaccounts.map((account) => (
                <SubaccountCard
                  key={account.id}
                  id={account.id}
                  collateral={account.collateral}
                  positions={account.positions}
                  orders={account.orders}
                />
              ))}
              <CreateSubaccountCard onCreateSubaccount={handleCreateSubaccount} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
