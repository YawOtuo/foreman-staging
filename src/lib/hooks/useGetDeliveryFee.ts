import { useQuery } from "@tanstack/react-query";
import { DeliveryFee } from "../types/delivery_fee";
import { FetchDeliveryFeeForArea } from "../api/delivery_fees";

function useGetDeliveryFee(area_id: number) {
  const {
    data: deliveryFees,
    isLoading: isDeliveryFeesLoading,
    error: isDeliveryFeesError,
  } = useQuery({
    queryKey: ["delivery-fee", area_id],
    queryFn: () => FetchDeliveryFeeForArea(area_id),
  });
  return {
    deliveryFees,
    isDeliveryFeesError,
    isDeliveryFeesLoading,
  };
}

export default useGetDeliveryFee;
