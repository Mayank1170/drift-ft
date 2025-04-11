// src/components/layout/Header.tsx
'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export function Header() {
  const { connected, publicKey } = useWallet();
  
  const truncatedAddress = publicKey 
    ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}`
    : 'Connect Wallet';

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800">
      <h1 className="text-xl font-bold">Drift Protocol</h1>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-300 bg-[#1f2937] rounded-md px-2 py-1.5">
          {connected ? truncatedAddress : 'Not Connected'}
        </span>
        <WalletMultiButton className="bg-blue-600 hover:bg-blue-700 rounded-md text-sm" />
      </div>
    </header>
  );
}
