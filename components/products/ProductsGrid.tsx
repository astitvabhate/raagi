import { Product } from "@/lib/models/product";
import ProductCard from "./ProductCard";

export default function ProductsGrid({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12">
      {products
        .filter((p) => p.isActive)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
