"use client";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import SupplySection from "./components/SupplySection";
import DiscoverSection from "./components/DiscoverSection";
import WarehousingSection from "./components/WarehousingSection";
import useScrollToTop from "@/components/ScrollToTop";
import dynamic from "next/dynamic";
const CategoriesOfProducts = dynamic(() => import("./components/CategoriesOfProducts"), {
  
})
export default function Home() {
  // if (typeof window === "undefined") {
  //   // The window object is undefined (likely not running in a browser environment)
  // } else {
  //   // The window object exists (likely running in a browser environment)
  //   window.history.scrollRestoration = "manual";
  // } // useScrollToTop
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
