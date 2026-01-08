"use client";

import { useSearchParams } from "next/navigation";
import ProductsGrid from "@/components/products/ProductsGrid";
import { products } from "@/lib/data/products.mock";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = category
    ? products.filter(
        (product) =>
          product.category?.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <section className="bg-[#faf9f7] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          {/* Title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-medium text-[#7a3b18]">
              Products
            </h1>
            {category && (
              <p className="mt-1 text-sm text-[#7a3b18]/70 capitalize">
                Showing results for “{category}”
              </p>
            )}
          </div>

          {/* Sort (UI only – like reference) */}
          <div className="flex items-center gap-3 text-sm">
            <span className="text-[#7a3b18]/70">Sort by:</span>
            <select
              className="
                rounded-md
                border
                border-[#7a3b18]/20
                bg-white
                px-4
                py-2
                text-sm
                focus:outline-none
              "
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* GRID */}
        <ProductsGrid products={filteredProducts} />

      </div>
    </section>
  );
}
