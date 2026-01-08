import { sanityClient } from "@/lib/sanity/sanityClient";
import { PRODUCT_BY_SLUG_QUERY } from "@/lib/sanity/sanityQueries";
import { mapSanityToProduct } from "@/lib/mappers/productMapper";
import { notFound } from "next/navigation";

import ProductGallery from "@/components/PDP/ProductGallery";
import ProductInfo from "@/components/PDP/ProductInfo";
import ProductDescription from "@/components/PDP/ProductDescription";
import SizeSelector from "@/components/PDP/SizeSelector";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const sanityProduct = await sanityClient.fetch(
    PRODUCT_BY_SLUG_QUERY,
    { slug }
  );

  if (!sanityProduct) {
    notFound();
  }

  const product = mapSanityToProduct(sanityProduct);

  if (!product) {
    notFound();
  }

  return (
    <section className="bg-[#faf9f7] pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-20">

        {/* TOP: Gallery + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProductGallery images={product.images ?? []} />
          <ProductInfo product={product} />
        </div>

        {/* BOTTOM: Description */}
        <ProductDescription description={product.description} />

      </div>
    </section>
  );
}
