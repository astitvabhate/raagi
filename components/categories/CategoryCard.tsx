"use client";

import Link from "next/link";

export default function CategoryCard({
  title,
  image,
  slug,
}: {
  title: string;
  image: string;
  slug: string;
}) {
  return (
    <Link href={`/products?category=${slug}`}>
      <div className="relative overflow-hidden aspect-[3/4]">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/15" />

        {/* TITLE */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-xs uppercase tracking-[0.25em]">
          {title}
        </div>
      </div>
    </Link>
  );
}
