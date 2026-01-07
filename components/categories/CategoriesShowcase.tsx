import CategoryCard from "./CategoryCard";
import { categories } from "./categories.data";
import Link from "next/link";

export default function CategoriesShowcase() {
  return (
    <section className="bg-[radial-gradient(circle,rgba(97,31,24,1)_0%,rgba(20,1,5,1)_100%)] py-16">
      {/* CTA */}
      <div className="mb-10 text-center">
        <Link href="/products">
          <button className="border border-white text-white px-6 py-2 text-xs uppercase tracking-widest">
            All Products
          </button>
        </Link>
      </div>

      {/* GRID */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-10 md:max-w-5xl md:mx-auto">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
  