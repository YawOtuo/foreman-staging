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
    image: "/test4.png",
    description: "Powerful cement mixer for efficient mixing of concrete.",
    category: "Construction Equipment",
    material: "Metal",
    dimensions: "20 gallon capacity",
  },
  {
    name: "Lumber",
    price: 59.99,
    image: "/test2.png",
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
    image: "/test3.png",
    description: "Powerful cement mixer for efficient mixing of concrete.",
    category: "Construction Equipment",
    material: "Metal",
    dimensions: "20 gallon capacity",
  },
];

import ProductCard from "@/components/ProductCard";

function Store() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col gap-5 justify-center">
        <p className="text-2xl font-semibold">Store</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 justify-center flex-wrap  w-full lg:max-w-[70vw]">
          {mockProducts?.map((r, index) => (
            <ProductCard key={index} product={r} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
