
interface CreateSubaccountCardProps {
  onCreateSubaccount: () => void;
}

export function CreateSubaccountCard({ onCreateSubaccount }: CreateSubaccountCardProps) {
  return (
    <button
      onClick={onCreateSubaccount}
      className="bg-[#1f2937] border border-dashed border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center min-h-[220px] w-full hover:bg-gray-800 transition-colors"
    >
      <div className="bg-[#374151] rounded-full p-3 mb-3">
      </div>
      <span className="text-gray-400">Create New Subaccount</span>
    </button>
  );
}
