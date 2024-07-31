"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import OptimizedImage from "@/components/ui/OptimizedImage";
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";
import { fetchOneProduct } from "@/lib/api/products";
import { Product, ProductVariant, RelatedProduct } from "@/lib/types/product";
import { Plus, Minus } from "lucide-react";
import useCart from "@/lib/hooks/useCart";
import { useCurrency } from "@/context/CurrencyContext";
import { convertPrice } from "@/lib/utils/convertPrice";
import { Autoplay, EffectFlip } from "swiper/modules";

export default function ProductDetailPage({
  params,
}: {
  params: { product_id: string };
}) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  );
  const [quantity, setQuantity] = useState<number>(10);

  console.log("Quantity of Product:", quantity);

  const { exchangeRates, currency } = useCurrency();
  const { AddToCart } = useCart();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", params.product_id],
    queryFn: async () => fetchOneProduct(Number(params.product_id)),
  });

  useEffect(() => {
    if (product) {
      document.title = product.name;
      const initialVariant = product.variants[0];
      setSelectedVariant(initialVariant);
      setQuantity(
        initialVariant?.min_order_quantity
          ? parseInt(initialVariant.min_order_quantity, 10)
          : 10
      );
    }
  }, [product]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) =>
      prev ? prev + 1 : Number(selectedVariant?.min_order_quantity) || 10
    );
  };

  const decrementQuantity = () => {
    setQuantity((prev) =>
      prev && prev > Number(selectedVariant?.min_order_quantity)
        ? prev - 1
        : Number(selectedVariant?.min_order_quantity) || 10
    );
  };

  const handleAddToCart = () => {
    if (selectedVariant && product) {
      AddToCart({
        id: selectedVariant.id,
        product_variant: {
          // ...product_variant,
          id: selectedVariant.id,
          // variants: [selectedVariant],

          price: selectedVariant.price,
          name: selectedVariant.name,
          brief_description: selectedVariant.brief_description,
          availability: selectedVariant.availability,
          images: selectedVariant.images,
        },
        product_category: product.category,

        quantity,
      });
    }
  };

  const handleVariantChange = (value: string) => {
    const newVariant =
      product?.variants.find((v) => v.id.toString() === value) || null;
    setSelectedVariant(newVariant);
    setQuantity(
      newVariant?.min_order_quantity
        ? parseInt(newVariant.min_order_quantity, 10)
        : 10
    ); // Reset quantity when changing variants
  };

  const handleUnitChange = (value: string) => {
    const newUnit =
      product?.category.units_of_measurement.find((u) => u.unit === value) ||
      null;
    setSelectedUnit(newUnit);
  };
  if (!product && isLoading) {
    return (
      <div className="p-8 pt-8">
        <ProductLoadingSkeleton />
      </div>
    );
  }

  return (
    <main className="p-4 lg:p-8">
      <section className="flex flex-wrap md:flex-nowrap gap-8">
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Autoplay, EffectFlip]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full rounded-lg overflow-hidden border-2 transition-all duration-300"
            spaceBetween={5}
          >
            {selectedVariant?.images.map((image) => (
              <SwiperSlide key={image.id}>
                <OptimizedImage
                  src={`https://res.cloudinary.com/dajli9sqa/${image.image}`}
                  alt={selectedVariant?.name}
                  className="w-full  aspect-[4/3] bg-cover rounded-lg overflow-hidden"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>

          <Card className="mb-4">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Variants</h2>
              <Select
                onValueChange={handleVariantChange}
                value={selectedVariant?.id.toString()}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a variant" />
                </SelectTrigger>
                <SelectContent>
                  {product?.variants.map((variant) => (
                    <SelectItem key={variant.id} value={variant.id.toString()}>
                      {variant.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedVariant && (
                <div className="mt-4">
                  <p className="font-semibold">
                    Price: {currency}{" "}
                    {convertPrice(
                      +selectedVariant.price,
                      "GHS",
                      currency,
                      exchangeRates
                    )?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p>SKU: {selectedVariant.sku}</p>
                  <p>{selectedVariant.brief_description}</p>
                  <div className="flex items-center mt-4">
                    <label htmlFor="quantity" className="mr-2">
                      Quantity:
                    </label>
                    <div className="flex items-center">
                      <Button
                        onClick={decrementQuantity}
                        variant="outline"
                        size="icon"
                        className="h-10 w-10"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        id="quantity"
                        type="text"
                        min={
                          selectedVariant?.min_order_quantity
                            ? parseInt(selectedVariant.min_order_quantity, 10)
                            : 1
                        }
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-16 mx-2 text-center"
                      />
                      <Button
                        onClick={incrementQuantity}
                        variant="outline"
                        size="icon"
                        className="h-10 w-10"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="ml-4 capitalize">
                      {product?.category.units_of_measurement[0]?.unit}
                    </span>
                  </div>
                  {selectedVariant.min_order_quantity && (
                    <p className="text-sm text-gray-500">
                      Minimum order quantity:{" "}
                      {selectedVariant.min_order_quantity}
                    </p>
                  )}
                  <Button
                    onClick={handleAddToCart}
                    className="mt-4 rounded-sm px-5"
                  >
                    Add to Cart
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <p>{selectedVariant?.detailed_description}</p>
            </TabsContent>
            <TabsContent value="details">
              <p>Category: {product?.category.name}</p>
              <p>Availability: {product?.availability}</p>
              <p>
                Unit of Measurement:{" "}
                {product?.category.units_of_measurement[0]?.unit}
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {selectedVariant && selectedVariant.related_products.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {selectedVariant.related_products.map(
              (relatedProduct: RelatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={{
                    variants: [],
                    price: 0, // TODO: the price should be fetched from the API too
                    ...relatedProduct,
                  }}
                />
              )
            )}
          </div>
        </section>
      )}
    </main>
  );
}
