import OptimizedImage from "@/components/ui/OptimizedImage";
import { useCurrency } from "@/context/CurrencyContext";
import useCart from "@/lib/hooks/useCart";
import { CartItem } from "@/lib/types/cart";
import { convertPrice } from "@/lib/utils/convertPrice";
import Image from "next/image";
import React from "react";

interface CheckProductSmRowProps {
  cart_item: CartItem;
}

const CheckProductSm: React.FC<CheckProductSmRowProps> = ({ cart_item }) => {
  const { currency, exchangeRates } = useCurrency();
  const convertedPrice = convertPrice(
    Number(cart_item.product_variant?.price),
    "GHS",
    currency,
    exchangeRates
  );
  return (
    <div className="w-full flex  flex-col  items-start justify-between text-sm sm:text-base border-2 py-0  px-0  rounded-xl overflow-hidden">
      <div className="flex flex-col  justify-start relative l w-full items-start  gap-2 lg:gap-5">
        <OptimizedImage
          src={`https://res.cloudinary.com/dajli9sqa/${cart_item.product_variant?.images[0]?.image}`}
          alt={cart_item.product_variant.name}
          className="aspect-[3/2]  lg:max-w-[150px] lg:aspect-[4/3] "
        />
        <div className="px-4 pt-1 ">
          <p className="text-xl font-semibold">
            {" "}
            {cart_item.product_variant.name}{" "}
          </p>
          {/* <p className="text-gray-500"> {cart_item.product.size} {cart_item.product.unit} </p> */}

          {/* placeholder for the size and units of products */}
          {/* <p className="text-gray-500">100 pieces</p> */}
        </div>
      </div>

      <div className="flex flex-col items-start  w-full   gap-1 px-4 lg:px-0 pb-5 ">
        <div className="text-center flex flex-row whitespace-nowrap">
          Unit Price: &nbsp;
          {currency} &nbsp;
          <p className="sm:ml-1 text-gray-500 ">
            {Number(convertedPrice)?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
          </p>
        </div>
        <div className="sm:ml-1">
          <span className="">Quantity:</span> {cart_item.quantity}
        </div>
        <div className="w-full flex justify-end">
          <p className="sm:ml-1 font-semibold">
            Total Cost: &nbsp;
            <span className="text-primary lg:text-black text-xl">
              {currency}{" "}
              {(Number(convertedPrice) * cart_item.quantity)?.toLocaleString(
                undefined,
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              )}{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckProductSm;
