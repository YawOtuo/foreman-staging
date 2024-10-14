import { url } from "../../../weburl";
import { DeliveryFee } from "../types/delivery_fee";



export const FetchDeliveryFeeForArea = async (area_id: number): Promise<DeliveryFee> => {
    const response = await fetch(`${url}api/delivery-fees/area/${area_id}/`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };