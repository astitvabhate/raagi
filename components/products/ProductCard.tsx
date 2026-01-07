import { Product } from "@/app/lib/models/product";
import { BsCartPlus  } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg transition">
      
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <Link href={`/products/${product.id}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="
            w-full
            h-[260px]
            sm:h-[320px]
            md:h-[420px]
            object-cover
            transition-transform
            duration-[1200ms]
            group-hover:scale-[1.05]
          "
        />
        </Link>

        {/* ADD TO CART */}
        <button
          className="
            absolute
            bottom-4
            right-4
            h-10
            w-10
            rounded-full
            bg-white
            shadow
            flex
            items-center
            justify-center
            transition
            opacity-100
            md:opacity-0
            md:group-hover:opacity-100
          "
          aria-label="Add to cart"
        >
          <BsCartPlus />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-1">
        
        {/* TITLE */}
        <h3 className="text-sm leading-snug line-clamp-2">
          {product.title}
        </h3>

        {/* RATING */}
        {product.rating && (
          <div className="flex items-center gap-1 text-xs text-[#7a3b18]">
            {Array.from({ length: product.rating }).map((_, i) => (
              <AiFillStar key={i} />
            ))}
            <span className="text-black/50">
              ({product.reviewsCount})
            </span>
          </div>
        )}

        {/* PRICE */}
        <p className="text-sm font-medium">
          ₹{product.salePrice ?? product.price}
        </p>
      </div>
    </div>
  );
}
