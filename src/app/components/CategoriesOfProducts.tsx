"use client";
import CategoryCard from "@/components/CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchCategories } from "@/lib/api/categories";
import { useAppStore } from "@/lib/store/useAppStore";
import { useQuery } from "@tanstack/react-query";

function CategoriesOfProducts() {
  const { data, isLoading, error } = useQuery<any[]>({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
  return (
    <div className="flex flex-col gap-5 justify-center w-full lg:w-[70%]   items-start lg:items-start">
      <p className="text-2xl  font-semibold ">Search by Categories</p>

      <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-1 lg:gap-5 justify-center  w-full ">
        {data?.map((r, index) => (
          <div key={index} >
            <CategoryCard category={r} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesOfProducts;
