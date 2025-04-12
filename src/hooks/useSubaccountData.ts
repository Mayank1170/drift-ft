
'use client';

import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { SubaccountData } from '@/types/subaccount';

const mockData: Record<number, SubaccountData> = {
  1: {
    id: 1,
    collateral: {
      USDC: 5243.78,
      SOL: 0,
      mSOL: 0
    },
    positions: [
      {
        market: 'BTC-PERP',
        size: '+0.12 BTC',
        entryPrice: 63245.25,
        indexPrice: 63870.50,
        pnl: 75.03
      },
      {
        market: 'ETH-PERP',
        size: '-0.50 ETH',
        entryPrice: 3120.75,
        indexPrice: 3085.30,
        pnl: -17.72
      }
    ],
    orders: [
      {
        market: 'SOL-PERP',
        type: 'Limit',
        side: 'BUY',
        size: '10 SOL',
        price: 135.25,
        status: 'Open'
      }
    ]
  }
};

export function useSubaccountData(subaccountId: number) {
  const { connected } = useWallet();
  const [data, setData] = useState<SubaccountData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!connected) {
      setError('Wallet not connected');
      setIsLoading(false);
      return;
    }

    async function fetchData() {
      try {
        setIsLoading(true);
        
        
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const subaccountData = mockData[subaccountId];
        
        if (!subaccountData) {
          throw new Error(`Subaccount ${subaccountId} not found`);
        }
        
        setData(subaccountData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch subaccount data');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [subaccountId, connected]);

  return { data, isLoading, error };
}
