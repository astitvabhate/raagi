"use client";

import { useState } from "react";
import { Product } from "@/app/lib/models/product";
import SizeSelector from "./SizeSelector";

type ProductInfoProps = {
  product: Product;
};

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <p className="text-xs uppercase tracking-widest text-black/50">
        Home / {product.category}
      </p>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-medium tracking-tight">
        {product.title}
      </h1>

      {/* Price */}
      <p className="text-xl font-semibold">
        ₹{product.price}
      </p>

      {/* Size Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <SizeSelector
          sizes={product.sizes}
          onSelect={setSelectedSize}
        />
      )}

      {/* CTA */}
      <button
        disabled={!selectedSize}
        className={`
          w-full py-4 text-sm uppercase tracking-[0.25em]
          transition-all duration-300
          ${
            selectedSize
              ? "bg-black text-white hover:bg-neutral-800"
              : "bg-black/10 text-black/40 cursor-not-allowed"
          }
        `}
      >
        {selectedSize ? "Add to Cart" : "Select Size"}
      </button>

      {/* Small reassurance */}
      <p className="text-xs text-black/60">
        Inclusive of all taxes. Free shipping on prepaid orders.
      </p>
    </div>
  );
}
