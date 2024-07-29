import { useCurrency } from "@/context/CurrencyContext";
import { convertPrice } from "@/lib/utils/convertPrice";
import Link from "next/link";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FaShoppingCart } from "react-icons/fa";

interface CheckSummaryProps {
  subTotal: number;
  deliveryCharge: number;
  // payment: <Reco
}

const CheckSummary: React.FC<CheckSummaryProps> = ({
  subTotal,
  deliveryCharge,
}) => {
  const { currency, exchangeRates } = useCurrency();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const Total = subTotal + deliveryCharge;
  const TotalConvertedPrice = convertPrice(
    Total,
    "GHS",
    currency,
    exchangeRates
  );
  const SubTotalConvertedPrice = convertPrice(
    subTotal,
    "GHS",
    currency,
    exchangeRates
  );
  const DeliveryConvertedPrice = convertPrice(
    deliveryCharge,
    "GHS",
    currency,
    exchangeRates
  );

  return (
    <>
      <div className=" flex flex-col w-full  sm:w-3/5 md:w-4/5 border-2 bg-secondary p-5 h-[400px] justify-center rounded-md">
        {/* Summary side */}
        <div className="h-1/2 flex flex-col justify-center">
          <div className="space-y-3">
            <h6 className="font-semibold text-base">Summary</h6>
            <div className="flex justify-between w-full">
              <p>Sub Total</p>
              <p>
                {currency}{" "}
                <span>
                  {Number(SubTotalConvertedPrice).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </p>
            </div>
            <div className="flex justify-between w-full">
              <p>Delivery</p>
              <p>
                {currency}{" "}
                <span>
                  {Number(DeliveryConvertedPrice).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </p>
            </div>
            <div className="flex justify-between w-full border-y-[1px] border-white py-4">
              <p>Total</p>
              <p className="font-bold text-3xl text-primary">
                {currency}{" "}
                <span>
                  {Number(TotalConvertedPrice).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Payment options side */}
        <div className="h-1/2 flex flex-col justify-evenly">
          <h6 className="font-semibold text-base">Payment Options</h6>
          {/* 
          <label>
            <input
              type="radio"
              value="card_payment"
              {...register("payment", {
                required: "Please select a payment method",
              })}
            />{" "}
            
          </label> */}

          <label>
            <input
              type="radio"
              value="pay_now"
              {...register("payment", {
                required: "Please select a payment method",
              })}
            />{" "}
            Pay Now{" "}
            <span className="text-gray-800">
              (Card Payment -Visa/ Mastercard) (Mobile Money -MTN/ AirtelTigo/
              Voda)
            </span>
          </label>

          <label>
            <input
              type="radio"
              value="pay_delivery"
              {...register("payment", {
                required: "Please select a payment method",
              })}
            />{" "}
            Payment on Delivery
          </label>
          {errors.payment?.message &&
            typeof errors.payment.message === "string" && (
              <p className="text-red-500">{errors.payment.message}</p>
            )}
        </div>
      </div>
    </>
  );
};

export default CheckSummary;
