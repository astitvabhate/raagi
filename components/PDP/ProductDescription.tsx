export default function SizeSelector({
  sizes,
  onSelect,
}: {
  sizes: string[];
  onSelect: (size: string) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm">Size</p>
        <button className="text-xs underline">Size Guide</button>
      </div>

      <div className="flex gap-2 flex-wrap">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className="border px-4 py-2 text-xs hover:border-black"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
