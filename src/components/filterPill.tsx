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
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        selected
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

export default FilterPill;