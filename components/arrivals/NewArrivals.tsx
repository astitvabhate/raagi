"use client";

import ProductCard from "./ProductCard";
import { arrivals } from "./arrivals.data";
import { motion } from "framer-motion";

export default function NewArrivals() {
  return (
    <section className="bg-[#F7F7FF] py-20">
      {/* HEADER */}
      <div className="mb-12 text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[#8b5e3c]">
          New Arrivals
        </h2>
        <div className="mx-auto mt-4 h-px w-24 bg-[#8b5e3c]" />
      </div>

      {/* DESKTOP / TABLET GRID */}
      <div className="hidden sm:block mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {arrivals.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>

      {/* MOBILE HORIZONTAL SCROLL */}
      <div className="sm:hidden">
        <motion.div
          className="
            flex gap-6 px-6
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            no-scrollbar
          "
        >
          {arrivals.map((item) => (
            <motion.div
              key={item.id}
              className="min-w-[80%] snap-center"
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.96 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center gap-4">
              <ProductCard
                image={item.image}
                title={item.title}
                compact
              />

              <button className="bg-[#8b5e3c] px-5 py-2 text-xs uppercase tracking-widest shadow text-white">
            Shop Now
          </button>
              </div>
              
            </motion.div>
            
          ))}
          
        </motion.div>
      </div>
    </section>
  );
}
