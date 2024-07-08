import Image from "next/image";

import { IoCartSharp } from "react-icons/io5";
import LottieFileBuilder from "../LottieFileBuilder";
import animationData from "@/lotties/like1.json";
import { Product } from "@/lib/types/product";
import { Button } from "../ui/button";
import useLottie from "@/lib/hooks/useLottie";
import { FaRegHeart } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import useFavourites from "@/lib/hooks/useFavourites";

import { TiTick } from "react-icons/ti";
import { useCurrency } from "@/context/CurrencyContext";
import { convertPrice } from "@/lib/utils/convertPrice";
import Link from "next/link";
import useCart from "@/lib/hooks/useCart";

type Props = {
  product: Product;
};
function ProductCard({ product }: Props) {
  const { AddToCart } = useCart();
  const { play, setPlay } = useLottie();
  const { handleAddToFavourites } = useFavourites();
  const { currency, exchangeRates } = useCurrency();
  const convertedPrice = convertPrice(
    product.price,
    "GHS",
    currency,
    exchangeRates
  );

  return (
    <div className="group flex flex-col items-start justify-center border-[1px]  hover:scale-[1.02] duration-300 rounded-sm transition-all cursor-pointer">
      <Link
        href={`/product/${product.id}`}
        className="relative w-full aspect-[3/2] min-w-[200px] "
      >
        <Image
          src={`https://res.cloudinary.com/dajli9sqa/${product?.images[0]?.image}`}
          alt={product.description}
          fill
          objectFit="cover"
        />

        {product?.availability !== "available" && (
          <div className="bg-yellow-600 absolute top-3 left-3 capitalize rounded-md z-[50] px-2 py-1 flex items-center gap-1 text-white font-semibold text-[10px]">
            {/* <TiTick /> */}
            {product?.availability}
          </div>
        )}
        <div
          className="absolute bottom-2 left-2"
          onClick={() => {
            console.log(play);
            setPlay(true);
          }}
        >
          {/* <FaRegHeart color="red"/> */}
          <button onClick={() => handleAddToFavourites(product.id)}>
            <IoHeart
              size={30}
              className="stroke-shade-200 stroke-[40px] text-transparent transition-all hover:text-red-500 hover:stroke-red-500
            
            "
            />
          </button>
        </div>
      </Link>
      {/* TODO: do currency conversion here */}
      <div className="flex flex-col gap-5 px-3 py-3 w-full">
        <div className="flex items-start justify-between w-full gap-1">
          <div className="flex flex-col gap-0 w-full">
            <Link href={`/product/${product.id}`}>
              <div className="flex items-center gap-3 w-full justify-between">
                <p className="capitalize font-semibold">{product?.name}</p>
                <div className="border-shade-200/20 border-2 top-3 right-3 text-xs capitalize rounded-xs z-[50] px-2 py-1">
                  {product?.category?.name}
                </div>
              </div>
            </Link>
            <p className="text-sm text-shade-200">
              {product?.description || "No description"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 justify-between w-full">
          <p className=" font-semibold text-lg transition-all duration-500 bg-white">
            {currency} {Number(convertedPrice)?.toFixed(2)}
          </p>

          <Button
            variant={"secondary"}
            fontSize={"sm"}
            className="bg-primary-200 text-black"
            onClick={() =>
              AddToCart({
                id: product?.id,
                product: product,
                quantity: 1,
              })
            }
          >
            <IoCartSharp className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
