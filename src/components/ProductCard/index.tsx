import Image from "next/image";

import { FaLongArrowAltRight } from "react-icons/fa";
import { Product, RelatedProduct } from "@/lib/types/product";
import useLottie from "@/lib/hooks/useLottie";
import { FaRegHeart } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";

import { GrMoney } from "react-icons/gr";
import { useCurrency } from "@/context/CurrencyContext";
import { convertPrice } from "@/lib/utils/convertPrice";
import Link from "next/link";
import useCart from "@/lib/hooks/useCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import useFavourites from "@/lib/hooks/useFavourites";

type Props = {
  product: Product | RelatedProduct;
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
    <div className="group flex flex-col items-start justify-center shadow-md  hover:scale-[1.02] duration-300 rounded-lg overflow-hidden transition-all cursor-pointer">
      <Link href={`/product/${product.id}`} className="w-full">
        <div className="relative w-full aspect-[3/2] min-w-[200px] ">
          <Swiper
            effect="fade"
            className="w-full h-full"
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}>
            {product?.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={`https://res.cloudinary.com/dajli9sqa/${image?.image}`}
                  alt={product.description}
                  fill
                  objectFit="cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Link>

      {product?.availability !== "available" && (
        <div className="bg-yellow-600 absolute top-3 left-3 capitalize rounded-md z-[50] px-2 py-1 flex items-center gap-1 text-white font-semibold text-[10px]">
          {/* <TiTick /> */}
          {product?.availability}
        </div>
      )}
      {/* TODO: do currency conversion here */}
      <div className="flex flex-col gap-5 px-3 py-3 w-full">
        <div className="flex items-start justify-between w-full gap-1">
          <div className="flex flex-col gap-0 w-full">
            <div className="flex items-center gap-3 w-full justify-between">
              <Link href={`/product/${product.id}`}>
                <p className="capitalize font-semibold">{product?.name}</p>
              </Link>

              <div className="flex items-center justify-center gap-1">
                <div
                  className="flex items-center justify-center"
                  onClick={() => {
                    console.log(play);
                    setPlay(true);
                  }}>
                  {/* <FaRegHeart color="red"/> */}
                  <button onClick={() => handleAddToFavourites(product.id)}>
                    <IoHeart
                      size={20}
                      className="stroke-shade-200 z-[1000] stroke-[40px] text-transparent transition-all hover:text-red-500 hover:stroke-red-500
              
              "
                    />
                  </button>
                </div>
                <div className="border-shade-200/20 border-2 top-3 right-3 text-xs capitalize rounded-md z-[50] px-1 py-1">
                  {product?.category?.name}
                </div>
              </div>
            </div>
            <Link href={`/product/${product.id}`}>
              <p className="text-xs text-shade-200">
                {product?.description || "No description"}
              </p>
            </Link>
          </div>
        </div>

        <Link
          href={`/product/${product.id}`}
          className="flex items-center gap-5 justify-between w-full">
          <div className="flex items-center justify-start gap-2">
            <GrMoney size={15} className="text-primary-300" />
            <p className=" whitespace-nowrap font-semibold text-lg transition-all duration-500 bg-white">
              {currency}{" "}
              {Number(convertedPrice).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              {/* {product.category.units_of_measurement[0]?.unit && (
                <p className="text-xs">per {product.category.units_of_measurement[0].unit}</p>
              )} */}
            </p>
          </div>

          <Link
            href={`/product/${product?.id}`}
            className="flex items-center justify-center gap-2 ">
            View
            <FaLongArrowAltRight className="text-primary" />
          </Link>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
