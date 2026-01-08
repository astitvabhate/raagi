"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductsGrid from "@/components/products/ProductsGrid";
import { sanityClient } from "@/lib/sanity/sanityClient";
import { PRODUCTS_QUERY } from "@/lib/sanity/sanityQueries";
import { mapSanityToProduct } from "@/lib/mappers/productMapper";
import { Product } from "@/lib/models/product";
import { SanityProduct } from "@/lib/models/sanityProduct";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const sanityProducts: SanityProduct[] = await sanityClient.fetch(PRODUCTS_QUERY);

        const mappedProducts = sanityProducts
          .map((p: SanityProduct) => mapSanityToProduct(p))
          .filter((p): p is Product => p !== null);
        setProducts(mappedProducts);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally { 
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = category
    ? products.filter(
        (product) =>
          product.category?.toLowerCase() === category.toLowerCase()
      )
    : products;

  if (loading) {
    return (
      <section className="py-20 text-center">
        Loading products…
      </section>
    );
  }

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

          {/* Sort (UI only) */}
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
