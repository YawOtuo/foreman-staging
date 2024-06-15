"use client";
import FetchingState from "@/components/FetchingState";
import ProductCard from "@/components/ProductCard";
import PCSkeleton from "@/components/ProductCard/PCSkeleton";
import { useProducts } from "@/lib/hooks/useProducts";
import { useAppStore } from "@/lib/store/useAppStore";
import { Product } from "@/lib/types/product";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { useStoreStore } from "../store/components/useStoreStore";

const mockProducts = [
  {
    name: "Concrete Blocks",
    price: 45.99,
    image: "/concrete_blocks.jpeg",
    description:
      "High-quality concrete blocks for various construction projects.",
    category: "Building Materials",
    material: "Concrete",
    dimensions: "8x8x16 inches",
  },
  {
    name: "Brick Pavers",
    price: 32.99,
    image: "/brick_pavers.jpeg",
    description: "Beautiful brick pavers for landscaping and outdoor projects.",
    category: "Landscaping",
    material: "Clay",
    dimensions: "4x8 inches",
  },
  {
    name: "Lumber",
    price: 59.99,
    image: "/lumber.jpeg",
    description: "High-quality lumber for framing and structural support.",
    category: "Building Materials",
    material: "Wood",
    dimensions: "2x4 inches, 8 feet long",
  },
  {
    name: "Roof Shingles",
    price: 89.99,
    image: "/roof_shingles.jpeg",
    description:
      "Durable roof shingles for residential and commercial roofing projects.",
    category: "Roofing",
    material: "Asphalt",
    dimensions: "12x12 inches",
  },
  {
    name: "Cement Mixer",
    price: 349.99,
    image: "/cement_mixer.jpeg",
    description: "Powerful cement mixer for efficient mixing of concrete.",
    category: "Construction Equipment",
    material: "Metal",
    dimensions: "20 gallon capacity",
  },
];

function FeaturedProducts() {
  

  const { allProductsError, allProductsLoading, allProducts } = useProducts();
  return (
    <div className="group/root w-full flex flex-col gap-5 justify-center items-start  lg:max-w-[70%] ">
      <p className="text-2xl font-semibold">Our Products</p>

      <FetchingState
        className={
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 justify-center flex-wrap  w-full"
        }
        success={allProducts?.map((r: Product) => (
          <ProductCard key={r?.id} product={r} />
        ))}
        skeletonCount={6}
        loading={<PCSkeleton />}
        isLoading={allProductsLoading}
        isError={allProductsError}
      />

      <Link
        href={"/store"}
        className="flex items-center justify-center gap-5 hover:text-brand-100">
        Show all
        <FaArrowRightLong />
      </Link>
    </div>
  );
}

export default FeaturedProducts;
