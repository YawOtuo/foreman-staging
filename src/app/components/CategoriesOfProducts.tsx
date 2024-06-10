import CategoryCard from "@/components/CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
{/* 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 justify-center flex-wrap  w-full lg:w-[70vw]">
        {data.map((r, index) => (
          <div key={index}>
            <CategoryCard product={r} />
          </div>
        ))}
      </div> */}

      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          {data.map((r, index) => (
            <CarouselItem key={index}  className="md:basis-1/3 lg:basis-1/4">
              <CategoryCard product={r} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CategoriesOfProducts;
