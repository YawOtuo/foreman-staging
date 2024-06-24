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
    cart_item.product?.price,
    "GHS",
    currency,
    exchangeRates
  );
  return (
    <div className="flex lg:items-center flex-col lg:flex-row items-start justify-between text-sm sm:text-base border-2 py-0 lg:py-5 px-0 lg:px-2">
      <div className="flex flex-col  lg:flex-row justify-start relative lg:w-[50%] w-full items-start lg:items-center gap-2 lg:gap-5">
        <OptimizedImage
          src={`https://res.cloudinary.com/daurieb51/${cart_item.product?.images[0]?.image}`}
          alt={cart_item.product.description}
          className="aspect-square  lg:max-w-[150px] lg:aspect-[4/3] "
        />
        <div className="px-5 lg:px-0">
          <p className="text-xl lg:text-base font-semibold"> {cart_item.product.name} </p>
          {/* <p className="text-gray-500"> {cart_item.product.size} {cart_item.product.unit} </p> */}

          {/* placeholder for the size and units of products */}
          {/* <p className="text-gray-500">100 pieces</p> */}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-[50%] lg:justify-around gap-1 lg:gap-5 px-5 lg:px-0 pb-5 lg:pb-0">
        <div className="text-center flex flex-row whitespace-nowrap">
          <span className="lg:hidden">Unit Price: &nbsp; </span>
          {currency} &nbsp;
          <p className="sm:ml-1 text-gray-500 ">
            {Number(convertedPrice)?.toFixed(2)}{" "}
          </p>
        </div>
        <div className="sm:ml-1"><span className="">Quantity:</span> {cart_item.quantity}</div>
        <div className="text-center flex-row">
          <p className="sm:ml-1 font-semibold">
            <span className="lg:hidden">Total Cost: </span>
            <span className="text-primary lg:text-black text-xl">
              {currency}{" "}
              {(Number(convertedPrice) * cart_item.quantity)?.toFixed(2)}{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckProductSm;
