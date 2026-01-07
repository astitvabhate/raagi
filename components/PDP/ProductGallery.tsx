"use client";

import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
};

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  // Safety guard (never crashes)
  if (!Array.isArray(images) || images.length === 0) {
    return (
      <div className="h-[420px] bg-[#f6f4ef] flex items-center justify-center text-sm opacity-60">
        No images available
      </div>
    );
  }

  return (
    <div className="flex gap-6">
      {/* Thumbnails (Desktop only) */}
      <div className="hidden md:flex flex-col gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`border transition ${
              active === index ? "border-black" : "border-black/20"
            }`}
          >
            <img
              src={img}
              alt=""
              className="h-20 w-16 object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-[#f6f4ef] overflow-hidden">
        <img
          src={images[active]}
          alt=""
          className="w-full max-h-[600px] object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
