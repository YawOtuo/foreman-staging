"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/ui/OptimizedImage";
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";
import { fetchOneProduct } from "@/lib/api/products";
import {  ProductVariant } from "@/lib/types/product";
import useCart from "@/lib/hooks/useCart";
import { Autoplay, EffectFlip } from "swiper/modules";
import { useToast } from "@/components/ui/use-toast";
import { UnitOfMeasurement } from "@/lib/types/unit_of_measurement";
import ProductDetailTabs from "./components/ProductDetailTabs";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const RelatedProducts = dynamic(() => import("./components/RelatedProducts"));
const QuantitySelection = dynamic(() => import("./components/QuantitySelection"));

const SelectVariant = dynamic(() => import("./components/SelectVariant"));

export default function ProductDetailPage({
  params,
}: {
  params: { product_id: string };
}) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null
  );

  const { cart, AddToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(10);

  const { toast } = useToast();
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", params.product_id],
    queryFn: async () => fetchOneProduct(Number(params.product_id)),
  });

  const [selectedUnitOfPricing, setselectedUnitOfPricing] = useState<{
    unit_of_measurement: UnitOfMeasurement | null;
    price: number;
    min_order_quantity: number;
    min_order_value: number;
  } | null>(null);
  // const [selectedPrice, setSelectedPrice] = useState<number | undefined>();

  useEffect(() => {
    if (product) {
      document.title = product.name;
      const initialVariant = product.variants[0];
      const existingItem = cart.items.find(
        (item) => item.product_variant.id === initialVariant.id
      );

      const inititialPricingData = existingItem
        ? {
            unit_of_measurement:
              existingItem.product_variant.unit_of_measurement,
            price: existingItem.product_variant.price,
            min_order_quantity: existingItem.product_variant.min_order_quantity,
            min_order_value: existingItem.product_variant.min_order_value,
          }
        : initialVariant?.price[0];

      setSelectedVariant(initialVariant);
      setselectedUnitOfPricing(inititialPricingData);
      if (existingItem) {
        setQuantity(existingItem.quantity);
      } else {
        setQuantity(
          inititialPricingData?.min_order_quantity
            ? Math.floor(inititialPricingData.min_order_quantity)
            : 10
        );
      }
    }
  }, [product]);

  useEffect(() => {
    if (selectedVariant && selectedUnitOfPricing) {
      // Find the price for the selected unit
      const priceEntry = selectedVariant.price.find(
        (price) =>
          price.unit_of_measurement.unit ===
          selectedUnitOfPricing.unit_of_measurement?.unit
      );
      priceEntry && setselectedUnitOfPricing(priceEntry);
    }
  }, [selectedVariant, selectedUnitOfPricing]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(0);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) =>
      prev ? prev + 1 : Number(selectedUnitOfPricing?.min_order_quantity) || 10
    );
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    // Ensure that the correct price and unit of measurement is selected
    const priceEntry = selectedVariant?.price.find(
      (price) =>
        price.unit_of_measurement.unit ===
        selectedUnitOfPricing?.unit_of_measurement?.unit
    );

    if (!priceEntry) {
      toast({
        title: "Error",
        description: "Please select a valid unit of measurement.",
        duration: 5000,
      });
      return;
    }

    // Ensure that the minimum order quantity is respected
    if (quantity < Number(priceEntry.min_order_quantity)) {
      toast({
        title: "Minimum Order Quantity",
        description: `The minimum order quantity for this product is ${Math.floor(
          Number(priceEntry.min_order_quantity)
        )}`,
        duration: 5000,
      });
      return;
    }

    // Now add to the cart using the updated pricing information
    if (selectedVariant && product) {
      console.log(priceEntry.price); // Make sure that the correct price entry is logged

      AddToCart({
        id: selectedVariant?.id,
        product_variant: {
          id: selectedVariant?.id,
          price: Number(priceEntry.price), // Use the latest price for the selected unit
          name: selectedVariant.name,
          brief_description: selectedVariant.brief_description,
          availability: selectedVariant.availability,
          images: selectedVariant.images,
          unit_of_measurement:
            priceEntry.unit_of_measurement as UnitOfMeasurement, // Correct unit of measurement
          min_order_quantity: Number(priceEntry.min_order_quantity),
          min_order_value: Number(priceEntry.min_order_value),
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
    // setQuantity(
    //   newVariant?.price?.[0]?.min_order_quantity
    //     ? newVariant?.price?.[0]?.min_order_quantity
    //     : 10
    // ); // Reset quantity when changing variants
  };

  const handleUnitChange = (value: string) => {
    const selectedPrice =
      selectedVariant?.price.find(
        (u) => u.unit_of_measurement.unit === value
      ) || null;
    setselectedUnitOfPricing(selectedPrice ? selectedPrice : null);
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
            spaceBetween={5}>
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
        <motion.div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>

          <Card className="mb-4">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Types</h2>

              <SelectVariant
                product={product}
                selectedVariant={selectedVariant}
                handleVariantChange={handleVariantChange}
              />
              {selectedVariant && (
                <QuantitySelection
                  product={product}
                  selectedVariant={selectedVariant}
                  // selectedPrice={se}
                  selectedUnitOfPricing={selectedUnitOfPricing}
                  decrementQuantity={decrementQuantity}
                  incrementQuantity={incrementQuantity}
                  handleAddToCart={handleAddToCart}
                  handleQuantityChange={handleQuantityChange}
                  handleUnitChange={handleUnitChange}
                  quantity={quantity}
                />
              )}
            </CardContent>
          </Card>

          <ProductDetailTabs
            product_variant={selectedVariant}
            category={product?.category.name}
          />
        </motion.div>
      </section>
      <RelatedProducts product={selectedVariant} />
    </main>
  );
}
