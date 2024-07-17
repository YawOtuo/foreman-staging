import { url } from "../../../weburl";
import { DashboardData } from "../types/dashboardData";

export const FetchDashboardDetails = async (user_id: string | number): Promise<DashboardData> => {
    const response = await fetch(`${url}api/dashboard/general-details/users/${user_id}/`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };