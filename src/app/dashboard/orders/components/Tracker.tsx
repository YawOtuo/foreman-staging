import React from "react";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber2Filled,
  TbCircleNumber3,
  TbCircleNumber3Filled,
} from "react-icons/tb";
import { TbCircleNumber1Filled } from "react-icons/tb";

type TrackerProps = {
  orderConfirmed?: string;
  shipping_address?: string;
};

const Tracker = ({ orderConfirmed }: TrackerProps) => {
  return (
    <>
      <div className="w-4/5 flex justify-evenly items-center ">
        <div className="flex flex-1 items-center">
          <TbCircleNumber1Filled
            className={`${
              orderConfirmed === "pending"
                ? "text-gray-500"
                : orderConfirmed === "confirmed" || orderConfirmed === "shipped"
                ? "text-primary"
                : "text-red-600"
            }`}
            size={30}
          />

          <div className="w-full h-[1px] bg-gray-300" />
        </div>
        <div className="flex flex-1 items-center">
          <TbCircleNumber2Filled
            className={`${
              orderConfirmed === "pending"
                ? "text-gray-500"
                : orderConfirmed === "shipped" || orderConfirmed === "delivered"
                ? "text-primary"
                : "text-red-600"
            }`}
            size={30}
          />
          <div className="w-full h-[1px] bg-gray-300" />
        </div>
        <div className="flex items-center ">
          <TbCircleNumber3Filled
            className={`${
              orderConfirmed === "pending"
                ? "text-gray-500"
                : orderConfirmed === "delivered"
                ? "text-primary"
                : "text-red-600"
            }`}
            size={30}
          />
        </div>
      </div>
      <div className="w-4/5 flex justify-center mt-5 ">
        <div className="flex-1 ">
          <p className="uppercase md:text-base font-medium sm:text-sm text-xs text-pretty">
            Order Confirmed
          </p>
        </div>
        <div className="flex-1">
          <p className="uppercase md:text-base font-medium sm:text-sm text-xs text-pretty">
            Shipping
          </p>
        </div>
        <div className="">
          <p className="uppercase md:text-base font-medium sm:text-sm text-xs text-pretty">
            To deliver
          </p>
        </div>
      </div>
    </>
  );
};

export default Tracker;
