import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";


type Props = {
  product: {
    name: string;
    url: string;
    image: string;
  };
};

function CategoryCard({ product }: Props) {
  return (
    <div className=" relative flex flex-col items-start justify-center border-[1px] rounded-md hover:scale-[1.02] transition-all cursor-pointer">
      <div className="relative w-full aspect-[3/2] min-w-[200px] ">
        <Image src={product?.image} alt="Logo" fill objectFit="cover" />
      </div>
      <div className=" absolute bottom-0 bg-transprent text-white bg-black/40 flex flex-col gap-5 px-3 
      py-2 w-full">
        <div className="flex items-start justify-between w-full gap-1">
          <div className="flex  gap-0 items-center justify-between w-full">
            <p className="font-semibold capitalize">{product?.name}</p>
            <FaArrowRightLong className="text-brand-100"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
