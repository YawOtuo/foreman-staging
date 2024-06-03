import CategoryCard from "@/components/CategoryCard";

const data = [
  {
    name: "cement",
    url: "/store/cement",
    image: "/categories/bricks.png",
  },
  {
    name: "protective clothing",
    url: "/store/cement",
    image: "/categories/bricks.png",
  },
  {
    name: "sand",
    url: "/store/cement",
    image: "/categories/helmet.png",
  },
  {
    name: "cement",
    url: "/store/cement",
    image: "/categories/ironrods.png",
  },
  {
    name: "cement",
    url: "/store/cement",
    image: "/categories/bricks2.png",
  },
  {
    name: "cement",
    url: "/store/cement",
    image: "/categories/helmet.png",
  },
  {
    name: "cement",
    url: "/store/cement",
    image: "/categories/ironrods.png",
  },
];

function CategoriesOfProducts() {
  return (
    <div className="flex flex-col gap-5 justify-center w-ful items-centerl">
      <p className="text-2xl font-semibold">Our Categories</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 justify-center flex-wrap  w-full lg:w-[70vw]">
        {data.map((r, index) => (
          <div key={index}>
            <CategoryCard product={r} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesOfProducts;
