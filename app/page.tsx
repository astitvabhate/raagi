import Hero from "@/hero/Hero";
import NewArrivals from "@/components/arrivals/NewArrivals";
import CategoriesShowcase from "@/components/categories/CategoriesShowcase";
import StayUpdated from "@/components/Updates/stayUpdated";
import FeaturesStrip from "@/components/features/FeaturesStrip";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <NewArrivals />
      <CategoriesShowcase />
      <StayUpdated />
      <FeaturesStrip />
    </main>
  );
}
