"use client";

import HeroColumn from "./HeroColumn";

export default function HeroDesktop() {
  return (
    <section className="hidden md:block">
      <div className="grid grid-cols-3">
        <HeroColumn image="/images/hero-left.jpg" />
        <HeroColumn image="/images/hero-center.jpg" center />
        <HeroColumn image="/images/hero-right.jpg" />
      </div>
    </section>
  );
}
