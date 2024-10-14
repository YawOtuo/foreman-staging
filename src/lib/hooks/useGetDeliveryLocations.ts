import { useQuery } from "@tanstack/react-query";
import { DeliveryFee } from "../types/delivery_fee";
import { FetchDeliveryFeeForArea } from "../api/delivery_fees";
import { FetchAllDeliveryLocations } from "../api/location";

function useGetDeliveryLocations() {
  const {
    data: deliveryLocations,
    isLoading: isDeliveryLocationsLoading,
    error: isDeliveryLocationsError,
  } = useQuery({
    queryKey: ["delivery-locations"],
    queryFn: () => FetchAllDeliveryLocations(),
  });
  return {
    deliveryLocations,
    isDeliveryLocationsError,
    isDeliveryLocationsLoading,
  };
}

export default useGetDeliveryLocations;
