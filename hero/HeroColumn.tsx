"use client";

import { motion } from "framer-motion";

export default function HeroColumn({
  image,
  center = false,
}: {
  image: string;
  center?: boolean;
}) {
  return (
    <div className="relative h-[calc(100vh-64px)] overflow-hidden group">
      <motion.img
        src={image}
        alt=""
        className="h-full  w-full  object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
      />

      <div className="absolute inset-0 bg-black/10" />

      {center && (
        <div className="pt-34 opacity-50 absolute inset-0 flex flex-col items-center  text-white">
          <h1 className="
            font-serif
            text-[clamp(3rem,5.2vw,5.2rem)]
            tracking-[-0.02em]
            leading-none
            
          ">
            Raagi
          </h1>
          {/* <img src="/logo/bindi_raagi.png" alt="" /> */}
          <p className="mt-3 text-[11px] tracking-[0.35em]">woven with tradition</p>
        </div>
      )}
    </div>
  );
}
