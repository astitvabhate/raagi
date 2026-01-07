"use client";

import HeroColumn from "./HeroColumn";

export default function HeroDesktop() {
  return (
    <section className="hidden md:block">
      <div className="grid grid-cols-3">
        <HeroColumn image="/images/hero-left.JPG" />
        <HeroColumn image="/images/hero-center.JPG" center />
        <HeroColumn image="/images/hero-right.JPG" /> 
      </div>
    </section>
  );
}
