import ProductCard from "@/components/ProductCard";

const mockProducts = [
  {
    name: "Product 1",
    price: 10.99,
    image: "/test2.png",
  },
  {
    name: "Product 2",
    price: 12.99,
    image: "/test3.png",
  },
  {
    name: "Product 3",
    price: 15.99,
    image: "/test1.png",
  },
  {
    name: "Product 4",
    price: 19.99,
    image: "/test5.png",
  },
  {
    name: "Product 5",
    price: 9.99,
    image: "/test4.png",
  },
];

function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 justify-center flex-wrap py-20 w-full lg:max-w-[70vw]">
      {mockProducts?.map((r, index) => (
        <ProductCard key={index} product={r} />
      ))}
    </div>
  );
}

export default FeaturedProducts;
