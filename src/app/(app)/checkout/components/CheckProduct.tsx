import { useCurrency } from "@/context/CurrencyContext";
import { CartItem } from "@/lib/types/cart";
import { convertPrice } from "@/lib/utils/convertPrice";
import Image from "next/image";
import React from "react";

interface CheckProductRowProps {
  cart_item: CartItem;
}

const CheckProduct: React.FC<CheckProductRowProps> = ({ cart_item }) => {
  const { currency, exchangeRates } = useCurrency();
  const convertedPrice = convertPrice(
    Number(cart_item.product_variant?.price),
    "GHS",
    currency,
    exchangeRates
  );
  return (
    <div className="w-full flex items-center flex-row justify-between text-sm sm:text-base border-2 py-5">
      <div className="flex flex-row justify-start relative sm:w-[50%] w-1/2 items-center gap-5">
        <div>
          <Image
            src={`https://res.cloudinary.com/dajli9sqa/${cart_item.product_variant?.images[0]?.image}`}
            alt={cart_item.product_variant.name}
            objectFit="cover"
            width={100}
            height={100}
          />
        </div>
        <div>
          <p className="font-semibold"> {cart_item.product_variant.name} </p>
        </div>
      </div>

      <div className="flex items-center w-[50%] justify-around">
        <div className="text-center flex flex-col sm:flex-row text-gray-500">
          {currency}
          <p className="sm:ml-1 ">
            {Number(convertedPrice)?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
          </p>
        </div>
        <div className="sm:ml-1">{cart_item.quantity}</div>
        <div className="text-center flex flex-col sm:flex-row">
          <p className="sm:ml-1 font-semibold">
            {currency}{" "}
            {(Number(convertedPrice) * cart_item.quantity)?.toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckProduct;
