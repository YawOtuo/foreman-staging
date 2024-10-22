import { useCurrency } from "@/context/CurrencyContext";
import { convertPrice } from "@/lib/utils/convertPrice";
import React from "react";
import { useFormContext } from "react-hook-form";
import Image from "next/image";
import useGetDeliveryFee from "@/lib/hooks/useGetDeliveryFee";
import { useArea } from "@/context/AreaContext";

interface CheckSummaryProps {
  subTotal: number;
}

const momoImages = [
  {
    id: 1,
    src: "/master-card.png",
    alt: "master card logo",
  },
  {
    id: 2,
    src: "/visa.png",
    alt: "visa card logo",
  },
  {
    id: 3,
    src: "/telecel.png",
    alt: "telecel logo",
  },
  {
    id: 4,
    src: "/airtelTigo.png",
    alt: "airtel tigo logo",
  },
  {
    id: 5,
    src: "/MTN-MoMo.png",
    alt: "mtn logo",
  },
];

const CheckSummary: React.FC<CheckSummaryProps> = ({ subTotal }) => {
  const { currency, exchangeRates } = useCurrency();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { areas, area } = useArea();
  const selectedArea = areas && areas.find((item) => item.name === area)?.id;

  const { deliveryFees, isDeliveryFeesError, isDeliveryFeesLoading } =
    useGetDeliveryFee(selectedArea!);

  if (isDeliveryFeesError) {
    return <p>An error occurred fetching delivery fees. Please retry again.</p>;
  }

  const Total = subTotal + Number(deliveryFees?.fee!);
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
    Number(deliveryFees?.fee!),
    "GHS",
    currency,
    exchangeRates
  );

  return (
    <>
      <div className=" flex flex-col w-full  sm:w-4/5 md:w-4/5 border-2 bg-secondary p-5 h-[400px] justify-center rounded-md">
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
                {isDeliveryFeesLoading ? "" : currency}{" "}
                <span>
                  {isDeliveryFeesLoading ? (
                    <p>---</p>
                  ) : (
                    Number(DeliveryConvertedPrice).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  )}
                </span>
              </p>
            </div>
            <div className="flex justify-between w-full border-y-[1px] border-white py-4">
              <p>Total</p>
              <p className="font-bold text-3xl text-primary">
                {isDeliveryFeesLoading ? "" : currency}{" "}
                <span>
                  {isDeliveryFeesLoading ? (
                    <p>---</p>
                  ) : (
                    Number(TotalConvertedPrice).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  )}
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

          <label className="flex space-x-2">
            <input
              type="radio"
              value="pay_now"
              {...register("payment", {
                required: "Please select a payment method",
              })}
            />{" "}
            <span className="text-gray-800 flex items-center space-x-2 ">
              <p>Pay Now</p>
              {momoImages.map((item) => (
                <div key={item.id}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    objectFit="cover"
                    width={40}
                    height={30}
                  />
                </div>
              ))}
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
