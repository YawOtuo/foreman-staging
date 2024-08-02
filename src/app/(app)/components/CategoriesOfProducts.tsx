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
import useCategories from "@/lib/hooks/useCategories";
import { useAppStore } from "@/lib/store/useAppStore";
import { useQuery } from "@tanstack/react-query";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function CategoriesOfProducts() {
  const { categories } = useCategories();
  return (
    <div className="flex flex-col gap-5 justify-center w-full lg:w-[70%]   items-start lg:items-start">
      <p className="text-2xl  font-semibold ">Search by Categories</p>

      <div className=" items-center gap-1 lg:gap-5 justify-center  w-full ">
        <Swiper
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 "
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={25}
          modules={[Autoplay, FreeMode]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}>
          {categories?.map((r, index) => (
            <SwiperSlide key={index}>
              <div>
                <CategoryCard category={r} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CategoriesOfProducts;
