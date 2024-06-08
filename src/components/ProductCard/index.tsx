import Image from "next/image";

import { IoCartSharp } from "react-icons/io5";
import LottieFileBuilder from "../LottieFileBuilder";
import animationData from "@/lotties/like1.json";
import useCart from "@/lib/hooks/useCart";

type Props = {
  product: {
    id: number,
    name: string;
    price: number;
    image: string;
    description: string;
  };
};
function ProductCard({ product }: Props) {
  const { handleAddToCart } = useCart(2);
  return (
    <div className="flex flex-col items-start justify-center border-[1px]  hover:scale-[1.02] transition-all cursor-pointer">
      <div className="relative w-full aspect-[3/2] min-w-[200px] ">
        <Image
          src={"/concrete_blocks.jpeg"}
          alt="Logo"
          fill
          objectFit="cover"
        />

        <div className="absolute bottom-0 left-0">
          <LottieFileBuilder
            animationData={animationData}
            width={80}
            height={80}
            loop={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 px-3 py-3 w-full">
        <div className="flex items-start justify-between w-full gap-1">
          <div className="flex flex-col gap-0">
            <p className="font-semibold">{product?.name}</p>
            <p className="text-sm text-shade-200">
              {product?.description || "No description"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 justify-between w-full">
          <p className=" font-semibold text-lg">GHS {product?.price}</p>

          <button 
          onClick={() => handleAddToCart(product?.id)}
          className="flex items-center justify-center gap-2 text-sm bg-primary-200 text-black px-4 py-2 hover:scale-[1.02] transition-all">
            <IoCartSharp />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
