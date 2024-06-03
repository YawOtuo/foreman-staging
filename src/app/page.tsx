import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoriesOfProducts from "./components/CategoriesOfProducts";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-10">
      <HeroSection />
   <div className=" flex flex-col gap-10 px-5 lg:px-0">
        <FeaturedProducts />
        <CategoriesOfProducts />
   </div>
    </main>
  );
}
