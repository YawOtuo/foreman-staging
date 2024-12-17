import { Button } from "@/components/ui/button";
import { CartItem } from "@/lib/types/cart";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import CardQuantityControls from "./CardQuantityControls";
import useCart from "@/lib/hooks/useCart";
import useFavourites from "@/lib/hooks/useFavourites";
import { useCurrency } from "@/context/CurrencyContext";
import { convertPrice } from "@/lib/utils/convertPrice";
import { useCartPageStore } from "../useCartPageStore";
import { useEffect } from "react";

type Props = {
  data: CartItem;
};

function CartCartSm({ data }: Props) {
  const { removeItemFromCart } = useCart();
  const { handleAddToFavourites } = useFavourites();
  const { setCartValid } = useCartPageStore();
  const { currency, exchangeRates } = useCurrency();

  const convertedPrice = convertPrice(
    Number(data.product_variant.price),
    "GHS",
    currency,
    exchangeRates
  );

  const convertedTotalPrice = convertPrice(
    data.totalCost,
    "GHS",
    currency,
    exchangeRates
  );

  useEffect(() => {
    // Check if the quantity is less than the minimum required
    if (data.quantity < data.product_variant.min_order_quantity) {
      setCartValid(false);
    } else {
      setCartValid(true);
    }
  }, [data.quantity, data.product_variant.min_order_quantity, setCartValid]);

  return (
    <div className="flex flex-col gap-5 w-full border px-5 py-3 capitalize">
      <div className="flex">
        <div className="relative">
          <Image
            src={`https://res.cloudinary.com/dajli9sqa/${data.product_variant?.images[0]?.image}`}
            alt={data.product_variant.name}
            width={150}
            height={150}
            className="pr-3"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col">
            <h4 className="font-semibold">{data.product_variant.name}</h4>
            <p className="text-shade-200 text-xs">
              {data.product_variant.brief_description}
            </p>
          </div>
          {/* this is the quantity control and total and Unit price section for tablet view */}
          <div className="sm:flex flex-row w-full  gap-20 pt-4 hidden lg:hidden">
            <div className="">
              <p className="whitespace-nowrap font-bold text-base">
                {currency}{" "}
                {Number(convertedTotalPrice).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p className="whitespace-nowrap text-sm">
                Unit Price: {currency}{" "}
                {Number(convertedPrice).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="">
              <CardQuantityControls quantity={data.quantity} cart_item={data} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* this is the quantity control and total and unit price section for mobile view */}
        <div className="flex flex-row justify-between w-full pb-4 sm:hidden">
          <div className="w-1/2">
            <p className="whitespace-nowrap w-full truncate font-bold text-base">
              {currency}{" "}
              {Number(convertedTotalPrice).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="whitespace-nowrap text-xs">
              Unit Price: {currency}{" "}
              {Number(convertedPrice).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="">
            <CardQuantityControls quantity={data.quantity} cart_item={data} />
          </div>
        </div>
        <div className="flex items-start lg:items-center gap-1 lg:gap-5 ">
          <Button
            onClick={() => removeItemFromCart(Number(data.id))}
            className="text-primary-100"
            variant={"ghost"}
            size={"sm"}
            fontSize={"sm"}
          >
            <MdDeleteOutline size={20} className="mr-1" />
            Remove
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            fontSize={"sm"}
            onClick={() => handleAddToFavourites(data.product_variant.id)}
          >
            <FaRegHeart className="mr-2" />
            Add To Favourites
          </Button>
        </div>
        <div>
          {data.quantity < data.product_variant.min_order_quantity && (
            <p className="text-red-500 text-xs font-semibold">
              Minimum quantity for {data.product_variant.name} is{" "}
              {data.product_variant.min_order_quantity}{" "}
              {data.product_variant.unit_of_measurement?.unit}
            </p>
          )}
        </div>
        <div className="hidden lg:flex">
          <CardQuantityControls quantity={data.quantity} cart_item={data} />
        </div>
      </div>
    </div>
  );
}

export default CartCartSm;
