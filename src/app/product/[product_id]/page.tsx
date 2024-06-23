"use client";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { fetchOneProduct, fetchProducts } from "@/lib/api/products";
import { useQuery } from "@tanstack/react-query";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import ProductDetailsCard from "@/components/ProductDetails/DetailsCard";
import { Product } from "@/lib/types/product";

export default function ProductDetailPage({ params }: { params: { product_id: string } }) {
    const { data: product, isLoading } = useQuery({
        queryKey: ["product", params.product_id],
        queryFn: async () => fetchOneProduct(Number(params.product_id)),
    });

    const { data: relatedProducts } = useQuery({
        queryKey: ["relatedProducts", product?.id],
        queryFn: async () => fetchProducts({ category__name: product?.category?.name }),
    });

    if (isLoading) {
        return <section>Loading...</section>;
    }


    return <main>
        <section className=" flex pt-8 gap-8 flex-wrap md:flex-nowrap p-4">
            <div className="image-carousel-galery w-full md:w-[60%]">
                <Flicking className="w-full h-full" gap={5}>
                    {product?.images.map((image) => (
                        <>
                            <img className="w-full bg-cover rounded-lg" key={image.id} src={`https://res.cloudinary.com/daurieb51/${image.image}`} alt={product?.name} />
                        </>
                    ))}
                </Flicking>
            </div>
            <div className="w-full md:w-[40%]">
                <h2 className="text-3xl font-semibold text-gray-800 capitalize"
                >{product?.name}</h2>
                <p className="text-lg text-gray-600 py-2">{product?.description.length == 0 ?
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, blanditiis non. Assumenda sequi nihil obcaecati, voluptas suscipit libero consequatur quas sint quos maxime! Fuga, voluptatibus non vero sequi debitis qui!"
                    : product?.description}</p>

                    <ProductDetailsCard product={product as Product} />
            </div>
        </section>
        <section className="flex flex-col gap-4 p-4">
            <h2 className="text-2xl font-semibold">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {relatedProducts?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    </main>
}