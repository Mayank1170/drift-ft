
interface ActionButtonsProps {
  subaccountId: number;
  onTrade: () => void;
  onDeposit: () => void;
  onWithdraw: () => void;
}

export function ActionButtons({
  subaccountId,
  onTrade,
  onDeposit,
  onWithdraw,
}: ActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button onClick={onTrade}>Trade</button>
      <button onClick={onDeposit}>Deposit</button>
      <button onClick={onWithdraw}>Withdraw</button>
    </div>
  );
}
