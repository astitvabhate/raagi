"use client";

import { useState } from "react";

export default function ProductDescription({
  description,
}: {
  description?: string;
}) {
  const [open, setOpen] = useState(false);

  if (!description) return null;

  return (
    <div className="border-t border-black/10 pt-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm uppercase tracking-widest"
      >
        <span>Product Description</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <p className="mt-4 text-sm leading-relaxed text-black/70">
          {description}
        </p>
      )}
    </div>
  );
}
