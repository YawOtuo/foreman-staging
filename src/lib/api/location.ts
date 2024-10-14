import { url } from "../../../weburl";
import { Area } from "../types/location";

export interface ConstituencyAndAreas {
  id: number;
  name: string;
  areas: Area[];
}

export const FetchAllDeliveryLocations = async (
): Promise<ConstituencyAndAreas[]> => {
  const response = await fetch(`${url}api/locations/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
