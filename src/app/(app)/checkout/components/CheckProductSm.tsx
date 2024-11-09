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
    <div className="w-full flex flex-col items-start justify-between text-sm sm:text-base border-2 p-3">
      <div className="flex flex-row  justify-start relative w-full items-center gap-4">
        <Image
          src={`https://res.cloudinary.com/dajli9sqa/${cart_item.product_variant?.images[0]?.image}`}
          alt={cart_item.product_variant.name}
          width={100}
          height={100}
        />
        <div className="w-full space-y-2">
          <p className="text-base font-semibold">
            {cart_item.product_variant.name}
          </p>
          <div className="w-full flex sm:flex-row flex-col justify-start sm:gap-5">
            <div className="text-center flex flex-row whitespace-nowrap">
              Unit Price: {currency}&nbsp;
              <p className="text-gray-500">
                {Number(convertedPrice)?.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
              </p>
            </div>
            <span className="">Quantity: {cart_item.quantity}</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start pt-2">
        <p className="sm:ml-1 font-semibold">
          Total Cost: &nbsp;
          <span className="text-primary lg:text-black text-lg">
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
  );
};

export default CheckProductSm;
