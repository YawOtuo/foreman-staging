"use client";
import FetchingState from "@/components/FetchingState";
import ProductCard from "@/components/ProductCard";
import PCSkeleton from "@/components/ProductCard/PCSkeleton";
import { useProducts } from "@/lib/hooks/useProducts";
import { useAppStore } from "@/lib/store/useAppStore";
import { Product } from "@/lib/types/product";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useStoreStore } from "../store/components/useStoreStore";
import { useToast } from "@/components/ui/use-toast";

function FeaturedProducts() {
  const { toast } = useToast();

  const { allProductsError, allProductsLoading, allProducts } = useProducts();
  return (
    <div className="group/root w-full flex flex-col gap-5 justify-center items-start  lg:max-w-[70%] ">
      <p className="text-2xl font-semibold">Our Popular Products</p>

      {/* <button
        onClick={() => toast({
          title: "He",
          variant: "default",
        })}>
        Toest
      </button> */}

      <FetchingState
        className={
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 justify-center flex-wrap  w-full"
        }
        success={allProducts?.slice(0, 6)?.map((r: Product) => (
          <ProductCard key={r?.id} product={r} />
        ))}
        skeletonCount={6}
        loading={<PCSkeleton />}
        isLoading={allProductsLoading}
        isError={allProductsError}
      />

      <Link
        href={"/store"}
        className="flex items-center justify-center gap-5 hover:text-brand-100">
        Show all
        <FaArrowRightLong />
      </Link>
    </div>
  );
}

export default FeaturedProducts;
