import Image from "next/image";

import { IoCartSharp } from "react-icons/io5";
import LottieFileBuilder from "../LottieFileBuilder";
import animationData from "@/lotties/like1.json";
import useCart from "@/lib/hooks/useCart";
import { Product } from "@/lib/types/product";
import { Button } from "../ui/button";
import useLottie from "@/lib/hooks/useLottie";
import { FaRegHeart } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import useFavourites from "@/lib/hooks/useFavourites";

type Props = {
  product: Product;
};
function ProductCard({ product }: Props) {
  const { handleAddToCart } = useCart(2);
  const { play, setPlay } = useLottie();
  const { handleAddToFavourites } = useFavourites(1);
  return (
    <div className="group flex flex-col items-start justify-center border-[1px]  hover:scale-[1.02] transition-all cursor-pointer">
      <div className="relative w-full aspect-[3/2] min-w-[200px] ">
        <Image
          src={`https://res.cloudinary.com/daurieb51/${product?.images[0]?.image}`}
          alt={product.description}
          fill
          objectFit="cover"
        />

        <div
          className="absolute bottom-2 left-2"
          onClick={() => {
            console.log(play);
            setPlay(true);
          }}>
          {/* <FaRegHeart color="red"/> */}
          <button onClick={() => handleAddToFavourites(product.id)}>
            <IoHeart
              size={30}
              className="stroke-shade-200 stroke-[40px] text-transparent transition-all hover:text-red-500 hover:stroke-red-500
            
            "
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 px-3 py-3 w-full">
        <div className="flex items-start justify-between w-full gap-1">
          <div className="flex flex-col gap-0">
            <p className="capitalize font-semibold">{product?.name}</p>
            <p className="text-sm text-shade-200">
              {product?.description || "No description"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 justify-between w-full">
          <p className=" font-semibold text-lg transition-all duration-500 whi">
            GHS {product?.price}
          </p>

          <Button
            variant={"secondary"}
            fontSize={"sm"}
            className="bg-primary-200 text-black"
            onClick={() => handleAddToCart(product?.id)}>
            <IoCartSharp className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
