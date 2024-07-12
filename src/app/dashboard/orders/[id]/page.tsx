"use client";
import { FetchOrderDetails } from "@/lib/api/orders";
import useOrders from "@/lib/hooks/useOrder";
import { useAppStore } from "@/lib/store/useAppStore";
import { Order } from "@/lib/types/order";
import { useQuery } from "@tanstack/react-query";

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

  return (
    <div className="py-10 px-5">
      OrderDetails
      <p className="text-primary text-4xl font-semibold">#{params.id}</p>
      <p>
        {" "}
        {order?.created_at ? order.created_at.toString() : "No date"}
      </p>
    </div>
  );
}

export default Page;
