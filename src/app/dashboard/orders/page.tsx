"use client";
import FetchingState from "@/components/FetchingState";
import useOrders from "@/lib/hooks/useOrder";
import OrderCard from "./components/OrderCard";
import { Button } from "@/components/ui/button";
import OrderCardSkeleton from "./components/OrderCardSkeleton";
import { Order } from "@/lib/types/order";
import Link from "next/link";

function Orders() {
  const { orderData, isOrderLoading, orderError } = useOrders();
  return (
    <div className="flex flex-col gap-5 px-5 min-h-[500px]">
      <p className="text-xl font-semibold">My Orders</p>

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
          success={orderData?.map((r: Order) => (
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
    </div>
  );
}

export default Orders;
