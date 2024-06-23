"use client";
import FetchingState from "@/components/FetchingState";
import useOrders from "@/lib/hooks/useOrder";
import OrderCard from "./components/OrderCard";
import { Button } from "@/components/ui/button";
import OrderCardSkeleton from "./components/OrderCardSkeleton";
import { Order } from "@/lib/types/order";

function Orders() {
  const { orderData, isOrderLoading, orderError } = useOrders();
  return (
    <div className="flex flex-col gap-5 px-5">
      <p className="text-xl font-semibold">My Orders</p>

      <div className="grid grid-cols-6 gap-x-5 text-sm text-primary font-semibold capitalize items-center px-5">
        <p>id</p>
        <p className="col-span-2">Date Created</p>
        <p>paid</p>
        <p>quantity of items</p>
        <p>cost of items</p>
      </div>
      <div className="w-full">
        <FetchingState
          className={"w-full flex flex-col gap-2"}
          success={orderData?.map((r: Order) => (
            <div className="" key={r?.id}>
              <OrderCard order={r} />
            </div>
          ))}
          skeletonCount={6}
          loading={
            <div className=" mb-5">
              <OrderCardSkeleton />
            </div>
          }
          nullComponent={
            orderData &&
            orderData?.length < 1 && (
              <div className=" flex flex-col gap-5 items-start">
                <p>No orders yet</p>

                <Button variant={"outline"}>Start Shopping</Button>
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
