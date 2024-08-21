import { OrderItem } from "@/lib/types/order";
import Image from "next/image";
import React from "react";

type DetailProps = {
  currency: string;
  item: OrderItem;
};

const OrderDetailCard = ({ item, currency }: DetailProps) => {
  return (
    <div className="w-full rounded-md border lg:p-5 hover:scale-[1.01] duration-300 cursor-pointer">
      <div className="hidden md:flex w-full items-center">
        <div className="flex items-center  w-1/2 gap-5 ">
          <Image
            src={`https://res.cloudinary.com/dajli9sqa/${item?.product_variant.images?.[0]?.image}`}
            alt={item?.product_variant.name}
            width={125}
            height={125}
            objectFit="cover"
            className="rounded-md hidden sm:block"
          />
          <p className="text-base font-semibold">{item.product_variant.name}</p>
        </div>
        <div className="w-1/2 flex justify-evenly">
          <p>{item.quantity} {item?.unit_of_measurement?.unit}</p>
          <p className="font-bold">
            {currency} {item.total_cost}
          </p>
        </div>
      </div>
      <div className="md:hidden flex flex-col items-start gap-3">
        <div className="flex flex-col items-start gap-3 w-full ">
          <div className="relative w-full aspect-[3/2] overflow-hidden rounded-md">
            <Image
              src={`https://res.cloudinary.com/dajli9sqa/${item?.product_variant.images?.[0]?.image}`}
              alt=""
              fill
              objectFit="cover"
              className=""
            />
          </div>
          <p className="text-base font-semibold px-3 pt-2">
            {item.product_variant.name}
          </p>
        </div>
        <div className="w-full flex flex-wrap items-start gap-5 px-3 pb-3">
          <p>
            Quantity: {item.quantity} {item?.unit_of_measurement?.unit}
          </p>
          <p>
            {currency} {item.total_cost}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailCard;
