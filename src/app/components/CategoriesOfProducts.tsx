import CategoryCard from "@/components/CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <div className="flex flex-col gap-5 justify-center w-full lg:w-[70%] 2xl:w-full   items-start lg:items-start">
      <p className="text-2xl  font-semibold ">Search by Categories</p>

      <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-1 lg:gap-5 justify-center  w-full ">
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
