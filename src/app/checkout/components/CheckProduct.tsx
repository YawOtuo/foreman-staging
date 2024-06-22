import { useCurrency } from "@/context/CurrencyContext";
import useCart from "@/lib/hooks/useCart";
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
    cart_item.product?.price,
    "GHS",
    currency,
    exchangeRates
  );
  return (
    <div className="flex items-center flex-row justify-between text-sm sm:text-base border-y-[1px] border-gray-500 py-5">
      <div className="flex flex-row justify-start relative sm:w-[50%] w-1/2 items-center gap-5">
        <div>
          <Image
            src={`https://res.cloudinary.com/daurieb51/${cart_item.product?.images[0]?.image}`}
            alt={cart_item.product.description}
            objectFit="cover"
            width={100}
            height={100}
          />
        </div>
        <div>
          <p className="font-semibold"> {cart_item.product.name} </p>
          {/* <p className="text-gray-500"> {cart_item.product.size} {cart_item.product.unit} </p> */}

          {/* placeholder for the size and units of products */}
          <p className="text-gray-500">100 pieces</p>
        </div>
      </div>

      <div className="flex items-center w-[50%] justify-around">
        <div className="text-center flex flex-col sm:flex-row text-gray-500">
          {currency}
          <p className="sm:ml-1 ">{Number(convertedPrice)?.toFixed(2)} </p>
        </div>
        <div className="sm:ml-1 text-gray-500">{cart_item.quantity}</div>
        <div className="text-center flex flex-col sm:flex-row">
          {currency}
          <p className="sm:ml-1 font-semibold">
            {(Number(convertedPrice) * cart_item.quantity)?.toFixed(2)}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckProduct;
