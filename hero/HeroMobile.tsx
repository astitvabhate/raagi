"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/hero-left.jpg",
  "/images/hero-center.jpg",
  "/images/hero-right.jpg",
];

export default function HeroMobile() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:hidden relative h-[calc(100vh-64px)] overflow-hidden">
      <motion.img
        key={index}
        src={images[index]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute pt-30 opacity-70 inset-0 flex flex-col items-center  text-white">
        <h1 className="
          font-serif
          text-[clamp(3rem,5.2vw,5.2rem)]
          tracking-[-0.02em]                
          leading-none
          
        ">
          Raagi
        </h1>
        {/* <img src="/logo/bindi_raagi.png" alt="" className="h-50 " /> */}
        <p className="mt-2 text-[10px] tracking-[0.3em]">woven with tradition</p>
      </div>
    </section>
  );
}
