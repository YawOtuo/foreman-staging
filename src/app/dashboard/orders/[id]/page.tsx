"use client";
import { FetchOrderDetails } from "@/lib/api/orders";
import { useAppStore } from "@/lib/store/useAppStore";
import { Order } from "@/lib/types/order";
import { useQuery } from "@tanstack/react-query";
import Tracker from "../components/Tracker";
import { useCurrency } from "@/context/CurrencyContext";
import OrderSummary from "../components/OrderSummary";
import OrderDetailCard from "../components/OrderDetailCard";
import OrderDetailCardSkeleton from "../components/DetailSkeleton";
import OrderShippingDetailSummary from "../components/OrderShippingDetailSummary";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils/formatDate";

function Page({ params }: { params: { id: string | number } }) {
  const { DBDetails, FBaseDetails } = useAppStore();

  const router = useRouter();

  // Function to handle going back to the previous page
  const goBack = () => {
    router.back();
  };

  const {
    data: order,
    isLoading,
    error,
  } = useQuery<Order>({
    queryKey: [`orders-${params.id}`],
    queryFn: () => {
      return FetchOrderDetails(Number(params?.id), Number(DBDetails?.id));
    },
    enabled: !!DBDetails?.id && !!params.id,
  });

  const { currency } = useCurrency();

  return (
    <div className="py-10 px-5">
      <div className="flex flex-col items-start lg:gap-x-5 ">
        <Button
          onClick={goBack}
          variant={"ghost"}
          size={"lg"}
          className="!px-2"
        >
          <MdKeyboardArrowLeft className="mr-2" />
          Back{" "}
        </Button>
        <div className="flex space-x-4">
          <h6 className="text-3xl font-semibold">Order Details</h6>
          <p className="text-primary text-4xl font-semibold">#{params.id}</p>
        </div>
      </div>
      <p> {order?.created_at ? formatDate(order?.created_at) : "No date"}</p>

      {!order && isLoading ? (
        <div className="flex flex-col ">
          {[...Array(4)].map((_, index) => (
            <OrderDetailCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="mt-24">
            <div className="flex w-full my-8 justify-center flex-col items-center">
              <Tracker orderConfirmed={order?.status} />
            </div>
            <section className="mt-12">
              <header className="text-base font-semibold mb-4">
                Items ordered
              </header>
              {order?.items?.map((item, index) => (
                <div
                  className="flex  w-full  mt-3 items-center justify-start"
                  key={index}
                >
                  <OrderDetailCard currency={currency} item={item} />
                </div>
              ))}
            </section>
          </div>
          <section className="w-full flex justify-between flex-col md:flex-row mt-4 gap-5">
            <OrderShippingDetailSummary order={order} />
            <OrderSummary currency={currency} order={order} />
          </section>
        </>
      )}
    </div>
  );
}

export default Page;
