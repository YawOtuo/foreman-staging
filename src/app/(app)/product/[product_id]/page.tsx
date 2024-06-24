"use client";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { fetchOneProduct, fetchProducts } from "@/lib/api/products";
import { useQuery } from "@tanstack/react-query";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import ProductDetailsCard from "@/components/ProductDetails/DetailsCard";
import { Product } from "@/lib/types/product";
import OptimizedImage from "@/components/ui/OptimizedImage";
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductDetailPage({
  params,
}: {
  params: { product_id: string };
}) {
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", params.product_id],
    queryFn: async () => fetchOneProduct(Number(params.product_id)),
  });

  const { data: relatedProducts } = useQuery({
    queryKey: ["relatedProducts", product?.id],
    queryFn: async () =>
      fetchProducts({ category__name: product?.category?.name }),
  });

  if (isLoading) {
    return (
      <div className="p-8 pt-8">
        <ProductLoadingSkeleton />
      </div>
    );
  }

  return (
    <main>
      <section className=" flex pt-8 gap-8 flex-wrap md:flex-nowrap p-4">
        <div className=" w-full md:w-[50%]">
          <Swiper
            className="w-full h-full rounded-lg overflow-hidden border-2"
            spaceBetween={5}>
            {product?.images.map((image) => (
              <SwiperSlide key={image.id} className="">
                <OptimizedImage
                  src={`https://res.cloudinary.com/daurieb51/${image.image}`}
                  alt={product?.name}
                  className="w-full  aspect-[4/3] bg-cover rounded-lg overflow-hidden"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full md:w-[40%]">
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 capitalize">
            {product?.name}
          </h2>
          <p className="text-base  text-gray-600 py-2">
            {product?.description.length == 0
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, blanditiis non. Assumenda sequi nihil obcaecati, voluptas suscipit libero consequatur quas sint quos maxime! Fuga, voluptatibus non vero sequi debitis qui!"
              : product?.description}
          </p>

          <ProductDetailsCard product={product as Product} />
        </div>
      </section>
      <section className="flex flex-col gap-4 p-4">
        <h2 className="text-base lg:text-2xl font-semibold">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {relatedProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
