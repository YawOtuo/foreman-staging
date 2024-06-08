"use client"


import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/lib/hooks/useProducts";
import { ProductInterface } from "@/lib/types/product";

function Store() {
  const { allProducts } = useProducts();

  return (
    <div className="w-full flex items-start pt-5 justify-center min-h-[100vh]">
      <div className="flex flex-col gap-5 justify-center">
        <p className="text-2xl font-semibold">Store</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 justify-center flex-wrap  w-full lg:max-w-[70vw]">
          {allProducts?.map((r : ProductInterface, index : number) => (
            <ProductCard key={index} product={r} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
