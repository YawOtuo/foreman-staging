import { addCommasToNumber } from "@/lib/utils/numberFormatter";
import React from "react";

type Props = {
  currency: string;
  order?: any;
};

const OrderSummary = ({ order, currency }: Props) => {
  // temporal
  const shipFee = 50.0;
  return (
    <>
      <div className="w-4/5 sm:w-1/2  md:w-1/3 border rounded-md p-4 space-y-4">
        <div className="w-full flex justify-between">
          <p className="font-semibold text-">Product Total</p>
          <p className="font-bold">
            {currency}{" "}
            {addCommasToNumber(
              order?.total_cost ? order?.total_cost - shipFee : shipFee
            )}
          </p>
        </div>
        <div className="w-full flex justify-between">
          <p className="font-semibold">Shipping Fee</p>
          <p className="font-bold">
            {currency} {shipFee}
          </p>
        </div>
        <div className="w-full flex justify-between">
          <p className="font-semibold">Total</p>
          <p className="text-[#F5B42A] text-2xl font-bold">
            {currency} {addCommasToNumber(order?.total_cost)}
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
