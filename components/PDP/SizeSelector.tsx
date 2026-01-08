"use client";

import { useState } from "react";

type Size = {
  label: string;
  stock: number;
};

type SizeSelectorProps = {
  sizes: Size[];
  onSelect: (size: string) => void;
};

export default function SizeSelector({ sizes, onSelect }: SizeSelectorProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Size</p>
        <button
          type="button"
          className="text-xs uppercase tracking-widest text-black/60 hover:text-black"
        >
          Size Guide
        </button>
      </div>

      {/* Sizes */}
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => {
          const selected = active === size.label;
          const disabled = size.stock === 0;

          return (
            <button
              key={size.label}
              type="button"
              disabled={disabled}
              onClick={() => {
                setActive(size.label);
                onSelect(size.label);
              }}
              className={`
                h-10 min-w-[42px] px-4 text-sm rounded-md border transition
                ${
                  disabled
                    ? "border-black/10 text-black/30 cursor-not-allowed"
                    : selected
                    ? "bg-black text-white border-black"
                    : "border-black/30 hover:border-black"
                }
              `}
            >
              {size.label}
              {size.stock === 1 && (
                <span className="ml-1 text-xs text-red-600">1 left</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
