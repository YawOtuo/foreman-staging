"use client";
import FetchingState from "@/components/FetchingState";
import useOrders from "@/lib/hooks/useOrder";
import Link from "next/link";
import OrderCard from "../orders/components/OrderCard";
import OrderCardSkeleton from "../orders/components/OrderCardSkeleton";
import { Order } from "@/lib/types/order";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/context/CurrencyContext";

function PendingOrders() {
  const { orderData, isOrderLoading, orderError } = useOrders();

  return (
    <div className="flex flex-col gap-5 ">
      <p className="text-xl font-semibold text-slate-600">My Orders</p>

      <div className="hidden lg:grid grid-cols-6 gap-x-5 text-sm text-primary font-semibold capitalize items-center px-5">
        <p>id</p>
        <p className="col-span-2">Date Created</p>
        <p>paid</p>
        <p>quantity of items</p>
        <p>cost of items</p>
      </div>
      <div className="w-full">
        <FetchingState
          className={"w-full flex flex-col gap-5"}
          success={orderData?.slice(0, 4).map((r: Order) => (
            <Link href={`/dashboard/orders/${r?.id}`} className="" key={r?.id}>
              <OrderCard order={r} />
            </Link>
          ))}
          skeletonCount={6}
          loading={
            <div className=" mb-1">
              <OrderCardSkeleton />
            </div>
          }
          nullComponent={
            orderData &&
            orderData?.length < 1 && (
              <div className=" flex flex-col gap-2 justify-center h-[70vh] items-center bg-slate-50">
                <p className="text-lg">You have no orders yet</p>

                {/* <Button>Continue Shopping</Button> */}
              </div>
            )
          }
          isLoading={isOrderLoading}
          isError={orderError}
        />
      </div>
      <div>
        <Link href={"/dashboard/orders"}>
          <Button variant={"link"}>
            See All
            <FaLongArrowAltRight className="ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PendingOrders;
