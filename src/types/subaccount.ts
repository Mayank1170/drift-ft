export interface CollateralAsset {
    symbol: string;
    amount: number;
  }
  
  export interface Position {
    market: string;
    size: string;
    entryPrice: number;
    indexPrice: number;
    pnl: number;
  }
  
  export interface Order {
    market: string;
    type: string;
    side: 'BUY' | 'SELL';
    size: string;
    price: number;
    status: string;
  }
  
  export interface SubaccountData {
    id: number;
    collateral: {
      USDC: number;
      SOL: number;
      mSOL: number;
      [key: string]: number;
    };
    positions: Position[];
    orders: Order[];
  }
  