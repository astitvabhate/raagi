"use client";

type SizeSelectorProps = {
  sizes: string[];
  onSelect: (size: string) => void;
};

export default function SizeSelector({
  sizes,
  onSelect,
}: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Select Size</p>
        <button
          type="button"
          className="text-xs underline text-black/60 hover:text-black transition"
        >
          Size Guide
        </button>
      </div>

      {/* Sizes */}
      <div className="grid grid-cols-4 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => onSelect(size)}
            className="
              border border-black/30 py-2 text-sm
              hover:border-black transition
              focus:outline-none focus:border-black
            "
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
