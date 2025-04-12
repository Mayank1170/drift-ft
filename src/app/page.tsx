'use client';

import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { SubaccountCard } from '@/components/subaccounts/SubaccountCard';
import { CreateSubaccountCard } from '@/components/subaccounts/CreateSubaccountCard';
import { Input } from '@/components/ui/input';

const mockSubaccounts = [
  { id: 1, collateral: '$5,243.78 USDC', positions: 2, orders: 1 },
  { id: 2, collateral: '$12,876.45 USDC', positions: 1, orders: 3 },
  { id: 3, collateral: '$8,105.22 USDC', positions: 0, orders: 0 },
];

export default function Home() {
  const { connected } = useWallet();
  const [walletAddress, setWalletAddress] = useState('');
  const [subaccounts, setSubaccounts] = useState(mockSubaccounts);
  
  const handleViewWallet = () => {
    if (!walletAddress) {
      // toast({
      //   title: 'Error',
      //   description: 'Please enter a wallet address',
      //   variant: 'destructive',
      // });
      return;
    }
    
    console.log(`Viewing wallet: ${walletAddress}`);
    // toast({
    //   title: 'Success',
    //   description: `Viewing wallet: ${walletAddress}`,
    // });
  };
  
  const handleCreateSubaccount = () => {
    if (!connected) {
      // toast({
      //   title: 'Error',
      //   description: 'Please connect your wallet first',
      //   variant: 'destructive',
      // });
      return;
    }
    
    console.log('Creating new subaccount');
    const newId = subaccounts.length + 1;
    setSubaccounts([
      ...subaccounts,
      { id: newId, collateral: '$0.00 USDC', positions: 0, orders: 0 }
    ]);
    
    // toast({
    //   title: 'Success',
    //   description: `Created subaccount #${newId}`,
    // });
  };

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <Header />

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
                >
                </button>
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
