"use client";

import FetchingState from "@/components/FetchingState";
import ProductCard from "@/components/ProductCard";
import PCSkeleton from "@/components/ProductCard/PCSkeleton";
import { useProducts } from "@/lib/hooks/useProducts";
import { Product } from "@/lib/types/product";
import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useStoreStore } from "./components/useStoreStore";
import dynamic from "next/dynamic";

const StoreSearch = dynamic(() => import("./components/StoreSearch"));
function StoreContent() {
  const { filter, setFilter } = useStoreStore();
  const { allProductsError, allProductsLoading, allProducts } =
    useProducts(filter);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams?.get("category")) {
      setFilter({ category__name: searchParams?.get("category") });
    }
  }, [searchParams, pathname, setFilter]);

  return (
    <div className="flex flex-col  w-full pb-10 ">
      <div className="w-full flex items-start pt-5 justify-center min-h-[100vh]">
        <div className="flex flex-col gap-5 justify-center items-start   px-7 w-full lg:max-w-[70vw]">
          <p className="text-2xl font-semibold">Store</p>

          <div className="w-full lg:max-w-[40vw]">
            <StoreSearch />
          </div>
          <FetchingState
            className={
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 justify-center flex-wrap  w-full lg:max-w-[70vw]"
            }
            success={allProducts?.map((r: Product) => (
              <ProductCard key={r?.id} product={r} />
            ))}
            skeletonCount={10}
            loading={<PCSkeleton />}
            isLoading={!allProducts && allProductsLoading}
            isError={allProductsError}
            nullComponent={
              allProducts &&
              allProducts.length < 1 && <div>No Products found</div>
            }
          />
        </div>
      </div>
    </div>
  );
}

function Store() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StoreContent />
    </Suspense>
  );
}

export default Store;
