import { Product } from "@/lib/models/product";
import ProductCard from "./ProductCard";

type ProductsGridProps = {
  products: Product[];
};

export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-8 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
