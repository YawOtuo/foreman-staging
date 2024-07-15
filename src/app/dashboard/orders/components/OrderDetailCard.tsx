import Image from "next/image";
import React from "react";

type DetailProps = {
  currency: string;
  item: any;
};

const OrderDetailCard = ({ item, currency }: DetailProps) => {
  return (
    <>
      <div className="flex items-center space-x-3 w-1/2 ">
        <Image
          src={`https://res.cloudinary.com/dajli9sqa/${item?.product.images[0].image}`}
          alt=""
          width={100}
          height={100}
          className="rounded-md hidden sm:block"
        />
        <p className="text-base font-semibold">{item.product.name}</p>
      </div>
      <div className="w-1/2 flex justify-evenly">
        <p>{item.quantity}x</p>
        <p>
          {currency} {item.total_cost}
        </p>
      </div>
    </>
  );
};

export default OrderDetailCard;
