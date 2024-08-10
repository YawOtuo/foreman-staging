import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoriesOfProducts from "./components/CategoriesOfProducts";
import SupplySection from "./components/SupplySection";
import DiscoverSection from "./components/DiscoverSection";
import WarehousingSection from "./components/WarehousingSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-10 2xl:gap-16">
      <HeroSection />
      <div className="w-full flex flex-col gap-20 lg: px-5 items-center justify-center">
        <FeaturedProducts />
        <SupplySection />

        {/* <DiscoverSection /> */}
        <CategoriesOfProducts />

        <WarehousingSection />
      </div>
    </main>
  );
}
