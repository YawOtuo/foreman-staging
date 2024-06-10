import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoriesOfProducts from "./components/CategoriesOfProducts";
import SupplySection from "./components/SupplySection";
import DiscoverSection from "./components/DiscoverSection";
import WarehousingSection from "./components/WarehousingSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-10">
      <HeroSection />
      <div className=" flex flex-col gap-10 px-5 max-w-[1200px] mx-auto">
        <FeaturedProducts />
        <CategoriesOfProducts />
        <SupplySection />
        <DiscoverSection />
        <WarehousingSection />
      </div>
    </main>
  );
}
