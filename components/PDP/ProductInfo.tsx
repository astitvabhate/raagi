"use client";

import { useState } from "react";
import { Product } from "@/lib/models/product";
import SizeSelector from "./SizeSelector";
import Link from "next/link";

type ProductInfoProps = {
  product: Product;
};

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  function handleAddToCart() {
    console.log("Add to cart:", {
      productId: product.id,
      size: selectedSize,
    });
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <p className="text-xs uppercase tracking-widest text-black/50">
        <Link href="/"> Home</Link> / {product.slug}
      </p>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-medium tracking-tight">
        {product.title}
      </h1>

      {/* Price */}
      <p className="text-xl font-semibold">₹{product.price}</p>

      {/* Size Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <SizeSelector sizes={product.sizes} onSelect={setSelectedSize} />
      )}

      {/* Primary CTA */}
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={!selectedSize}
        className={`
          w-full py-4 text-sm uppercase tracking-[0.25em]
          rounded-md transition
          ${
            selectedSize
              ? "bg-black text-white hover:bg-neutral-800"
              : "bg-black/10 text-black/40 cursor-not-allowed"
          }
        `}
      >
        {selectedSize ? "Add to Cart" : "Select Size"}
      </button>

      {/* Secondary CTA */}
      <button
        disabled={!selectedSize}
        className="w-full py-4 text-sm uppercase tracking-[0.25em] rounded-md bg-black/5 text-black/30"
      >
        Buy Now
      </button>

      {/* Reassurance */}
      <p className="text-xs text-black/60">
        Inclusive of all taxes. Free shipping on prepaid orders.
      </p>
    </div>
  );
}
