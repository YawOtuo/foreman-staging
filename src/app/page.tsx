import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <HeroSection />
      <FeaturedProducts />
    </main>
  );
}
