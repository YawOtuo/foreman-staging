"use client";

import FetchingState from "@/components/FetchingState";
import ProductCard from "@/components/ProductCard";
import PCSkeleton from "@/components/ProductCard/PCSkeleton";
import { useProducts } from "@/lib/hooks/useProducts";
import { Product } from "@/lib/types/product";

function Store() {
  const { allProductsError, allProductsLoading, allProducts } = useProducts();

  return (
    <div className="w-full flex items-start pt-5 justify-center min-h-[100vh]">
      <div className="flex flex-col gap-5 justify-center items-start  px-7 w-full lg:w-fit">
        <p className="text-2xl font-semibold">Store</p>

        <FetchingState
          className={
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 justify-center flex-wrap  w-full lg:max-w-[70vw]"
          }
          success={allProducts?.map((r: Product) => (
            <ProductCard key={r?.id} product={r} />
          ))}
          skeletonCount={6}
          loading={<PCSkeleton />}
          isLoading={allProductsLoading}
          isError={allProductsError}
        />
      </div>
    </div>
  );
}

export default Store;
