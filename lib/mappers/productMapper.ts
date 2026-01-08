import { SanityProduct } from "@/lib/models/sanityProduct";
import { Product } from "@/lib/models/product";

export function mapSanityToProduct(p: SanityProduct): Product | null {
  if (!p?._id || !p.slug) {
    return null; // 🔴 critical
  }

  return {
    id: p._id,
    slug: p.slug,
    title: p.title,
    price: p.price,

    image: p.images?.[0],
    images: p.images,

    category: p.category,
    description: p.description,
    sizes: Array.isArray(p.sizes)
      ? p.sizes.map((s) => ({
          label: s.label,
          stock: s.stock,
        }))
      : [],

    isActive: p.inStock ?? true,
  };
}
