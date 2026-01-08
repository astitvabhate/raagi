import { Product } from "@/lib/models/product";
import { BsCartPlus } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/sanityImage";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition hover:shadow-lg">
      
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <Link href={`/products/${product.slug}`}>
          <img
            src={urlFor(product.image).width(600).url()}
            alt={product.title}
            className="
              h-[260px]
              w-full
              object-cover
              transition-transform
              duration-[1200ms]
              group-hover:scale-[1.05]
              sm:h-[320px]
              md:h-[420px]
            "
          />
        </Link>

        {/* ADD TO CART */}
        <button
          className="
            absolute
            bottom-4
            right-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white
            shadow
            transition
            md:opacity-0
            md:group-hover:opacity-100
          "
          aria-label="Add to cart"
        >
          <BsCartPlus />
        </button>
      </div>

      {/* CONTENT */}
      <div className="space-y-1 p-4">
        
        {/* TITLE */}
        <h3 className="line-clamp-2 text-sm leading-snug">
          {product.title}
        </h3>


        {/* PRICE */}
        <p className="text-sm font-medium">
          ₹{product.price}
        </p>
      </div>
    </div>
  );
}
