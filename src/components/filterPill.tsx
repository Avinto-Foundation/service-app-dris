interface FilterPillProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function FilterPill({
  label,
  selected,
  onClick,
}: FilterPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        selected
          ? "border-blue-600 bg-blue-600 text-white"
          : "border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50"
      }`}
    >
      {label}
    </button>
  );
}

export default FilterPill;