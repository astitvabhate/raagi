"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductCard({
  image,
  title,
  compact = false,
}: {
  image: string;
  title: string;
  compact?: boolean;
}) {
  return (
    <div className="group relative overflow-hidden bg-white">
      
      {/* IMAGE */}
      <motion.img
        src={image}
        alt={title}
        className={`
          w-full object-cover
          ${compact 
            ? "h-[280px] sm:h-[340px]" 
            : "h-[320px] sm:h-[380px] md:h-[420px]"}
          transition-transform duration-[1200ms] ease-out
          group-hover:scale-[1.04]
        `}
      />

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-black/0 sm:group-hover:bg-black/10 transition" />

      {/* CTA */}
      {!compact && (
        <div
          className="
            absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2
            opacity-100 sm:opacity-0
            sm:group-hover:opacity-100
            transition duration-300
          "
        >
          <Link href="/products"
            className="
              bg-white
              px-5 py-2
              text-xs
              uppercase
              tracking-widest
              text-[#7a3b18]
              shadow-sm
              border border-[#7a3b18]/20
              hover:bg-[#7a3b18]
              hover:text-white
              transition
            "
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
}
