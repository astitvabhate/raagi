import ProductGallery from "@/components/PDP/ProductGallery";
import ProductInfo from "@/components/PDP/ProductInfo";
import { products } from "@/app/lib/data/products.mock";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  // 🔑 REQUIRED for sync-dynamic-apis
  const { slug } = await params;

  if (!slug) {
    return (
      <div className="py-32 text-center text-sm opacity-60">
        Invalid product
      </div>
    );
  }

  const product = products.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!product) {
    return (
      <div className="py-32 text-center text-sm opacity-60">
        Product not found
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
    </section>
  );
}
