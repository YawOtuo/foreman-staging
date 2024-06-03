import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoriesOfProducts from "./components/CategoriesOfProducts";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-10">
      <HeroSection />
      <FeaturedProducts />
      <CategoriesOfProducts />
    </main>
  );
}
