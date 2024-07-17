"use client";
import { FetchOrderDetails } from "@/lib/api/orders";
import useOrders from "@/lib/hooks/useOrder";
import { useAppStore } from "@/lib/store/useAppStore";
import { Order } from "@/lib/types/order";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Tracker from "../components/Tracker";
import { useCurrency } from "@/context/CurrencyContext";
import OrderSummary from "../components/OrderSummary";
import OrderDetailCard from "../components/OrderDetailCard";
import OrderDetailCardSkeleton from "../components/DetailSkeleton";

function Page({ params }: { params: { id: string | number } }) {
  const { DBDetails, FBaseDetails } = useAppStore();

  const {
    data: order,
    isLoading,
    error,
  } = useQuery<Order>({
    queryKey: [`orders-${params.id}`],
    queryFn: () => {
      return FetchOrderDetails(Number(params?.id), DBDetails?.id);
    },
    enabled: !!DBDetails?.id && !!params.id,
  });

  const { currency } = useCurrency();

  return (
    <div className="py-10 px-5">
      <div className="flex space-x-4">
        <h6 className="text-3xl font-semibold">Order Details</h6>
        <p className="text-primary text-4xl font-semibold">#{params.id}</p>
      </div>
      <p> {order?.created_at ? order.created_at.toString() : "No date"}</p>

      {isLoading ? (
        <div className="flex flex-col ">
          {[...Array(3)].map((_, index) => (
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
          <section className="w-full flex justify-end mt-4">
            <OrderSummary currency={currency} order={order} />
          </section>
        </>
      )}
    </div>
  );
}

export default Page;
