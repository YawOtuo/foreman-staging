import Image from "next/image";

import { IoCartSharp } from "react-icons/io5";
import animationData from "@/lotties/like1.json";
import useCart from "@/lib/hooks/useCartOutdated";
import { Favourite } from "@/lib/types/favourite";
import { Button } from "@/components/ui/button";
import { MdDeleteOutline } from "react-icons/md";
import useFavourites from "@/lib/hooks/useFavourites";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";
import { convertPrice } from "@/lib/utils/convertPrice";

type Props = {
  data: Favourite;
};
function FavouriteCard({ data }: Props) {
  const { handleDeleteFromFavourites } = useFavourites();
  const {currency, exchangeRates} = useCurrency()

    let convertedPrice = 0;

    if (data.product.price) {
      convertedPrice = convertPrice(
        data.product.price,
        "GHS",
        currency,
        exchangeRates
      );
    }

  return (
    <div className="group flex flex-col items-start justify-center border-[1px]  hover:scale-[1.02] transition-all cursor-pointer ">
      <div className="relative w-full aspect-[3/2] min-w-[200px] ">
        <Image
          src={`https://res.cloudinary.com/dajli9sqa/${data?.product?.images[0]?.image}`}
          alt={data.product.description}
          fill
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col gap-5 px-3 py-3 w-full">
       <Link href={`/product/${data.product.id}`}>
          <div className="flex items-start justify-between w-full gap-1">
            <div className="flex flex-col gap-0">
              <p className="font-semibold capitalize">{data?.product.name}</p>
              <p className="text-sm text-shade-200">
                {data?.product?.description || "No description"}
              </p>
            </div>
          </div>
       </Link>

        <div className="flex  flex-col items-start gap-3 justify-between w-full">
          <p className="group-hover:text-primary font-semibold text-lg transition-all">{currency} {convertedPrice.toFixed(2)}</p>

          <Button 
            size={"sm"}
            variant={"secondary"}
            className="text-xs"
            onClick={() => handleDeleteFromFavourites(data?.product.id)}
           >
            <MdDeleteOutline size={20} className="mr-1" />
            Remove from favourites
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FavouriteCard;
