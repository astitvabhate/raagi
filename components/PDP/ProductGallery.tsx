"use client";

import { useState } from "react";
import { urlFor } from "@/lib/sanity/sanityImage";

type ProductGalleryProps = {
  images: any[]; // Sanity images
};

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  // Safety guard
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
        {images.map((img, index) => {
          const isActive = active === index;

          return (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`border transition ${
                isActive ? "border-black" : "border-black/20"
              }`}
            >
              <img
                src={urlFor(img).width(120).height(160).url()}
                alt=""
                className="h-20 w-16 object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-[#f6f4ef] overflow-hidden">
        <img
          src={urlFor(images[active]).width(900).url()}
          alt=""
          className="w-full max-h-[600px] object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
