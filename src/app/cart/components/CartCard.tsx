import { Button } from "@/components/ui/button";
import { CartItem } from "@/lib/types/cart";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import useCart from "@/lib/hooks/useCart";
import CardQuantityControls from "./CardQuantityControls";
import useFavourites from "@/lib/hooks/useFavourites";
import { useCurrency } from "@/context/CurrencyContext";
import { convertPrice } from "@/lib/utils/convertPrice";

type Props = {
  data: CartItem;
};

function CartCard({ data }: Props) {
  const { removeItemFromCart } = useCart();
  const { handleAddToFavourites } = useFavourites();

  const { currency, exchangeRates } = useCurrency();

  const convertedPrice = convertPrice(
    data.product.price,
    "GHS",
    currency,
    exchangeRates
  );

  return (
    <div className="group flex flex-col gap-5 w-full border px-5 py-3 capitalize hover:scale-[1.01] transition-all cursor-pointer">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center w-full gap-5">
        <div className="relative w-full aspect-[3/2] lg:max-w-[150px] ">
          <Image
            src={`https://res.cloudinary.com/daurieb51/${data.product?.images[0]?.image}`}
            alt={data.product.description}
            fill
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex items-center justify-between w-full">
            <h4 className="font-semibold">{data.product.name}</h4>
            <div className="lg:hidden">
              <CardQuantityControls quantity={data.quantity} cart_item={data} />
            </div>{" "}
          </div>
          <p className="text-shade-200 text-sm">{data.product.description}</p>
        </div>{" "}
        <div className="flex items-start lg:items-center gap-1">
          <p className="whitespace-nowrap font-bold text-2xl group-hover:text-primary-100 transition-all">
            {currency} {Number(convertedPrice).toFixed(2)}
          </p>
        </div>{" "}
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="flex items-start lg:items-center gap-1 lg:gap-5 ">
          <Button
            onClick={() => removeItemFromCart(data.id)}
            className="text-primary-100"
            variant={"ghost"}
            size={"sm"}
            fontSize={"xs"}
          >
            <MdDeleteOutline size={20} className="mr-1" />
            Remove
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            fontSize={"xs"}
            onClick={() => handleAddToFavourites(data.product.id)}
          >
            <FaRegHeart className="mr-2" />
            Move To Favourites
          </Button>
        </div>
        <div className="hidden lg:flex">
          <CardQuantityControls quantity={data.quantity} cart_item={data} />
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default CartCard;
