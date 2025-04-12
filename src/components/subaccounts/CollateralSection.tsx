import { Card } from '@/components/ui/Card';

interface CollateralSectionProps {
  collateral: {
    USDC: number;
    SOL: number;
    mSOL: number;
    [key: string]: number;
  };
}

export function CollateralSection({ collateral }: CollateralSectionProps) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-3 text-white">Collateral</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gapPositionsTable-3">
        {Object.entries(collateral).map(([asset, amount]) => (
          <Card key={asset} className="flex flex-col">
            <span className="text-sm text-gray-400 mb-1">{asset}</span>
            <span className="text-white font-medium">
              {asset === 'USDC' ? '$' : ''}{amount.toLocaleString(undefined, {
                minimumFractionDigits: asset === 'USDC' ? 2 : 2,
                maximumFractionDigits: asset === 'USDC' ? 2 : 2
              })}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}
