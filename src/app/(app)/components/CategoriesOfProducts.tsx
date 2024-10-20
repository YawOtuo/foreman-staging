"use client";
import CategoryCard from "@/components/CategoryCard";
import FetchingState from "@/components/FetchingState";

import { fetchCategories } from "@/lib/api/categories";
import useCategories from "@/lib/hooks/useCategories";

import { useRef } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

function CategoriesOfProducts() {
  const ref = useRef<SwiperRef>(null);
  const { categories, catLoading, catError } = useCategories();
  return (
    <div className="flex flex-col gap-5 justify-center w-full lg:w-[80%]   items-start lg:items-start">
      <p className="text-2xl  font-semibold ">Search by Categories</p>

      <FetchingState
        className="w-full"
        skeletonCount={1}
        isLoading={catLoading}
        isError={catError}
        loading={<div className="text-shade-300">Loading Categories </div>}
        success={
          <div className="flex  items-center gap-1 md:gap-5 justify-center  w-full relative">
            <button
              className="category-slider-button left-5"
              onClick={() => ref.current?.swiper.slidePrev()}>
              <MdArrowBack className="text-lg md:text-xl" />
            </button>
            <Swiper
              ref={ref}
              className="w-full !grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 "
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

            <button
              className="category-slider-button right-5"
              onClick={() => ref.current?.swiper.slideNext()}>
              <MdArrowForward className="text-lg md:text-xl" />
            </button>
          </div>
        }
      />
    </div>
  );
}

export default CategoriesOfProducts;
