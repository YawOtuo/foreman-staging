import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Area } from "@/lib/types/location";
import useGetDeliveryLocations from "@/lib/hooks/useGetDeliveryLocations";
import { ConstituencyAndAreas } from "@/lib/api/location";

interface AreaContextType {
  areas: Area[] | undefined;
  area: string | undefined;
  setArea: (area: string) => void | undefined;
  getAreas: (city: string) => Area[] | undefined;
  deliveryLocations: ConstituencyAndAreas[] | undefined;
}

const AreaContext = createContext<AreaContextType | undefined>(undefined);

export const AreaProvider = ({ children }: { children: ReactNode }) => {
  const [areas, setAreas] = useState<Area[]>([]);

  const [area, setArea] = useState<string | undefined>();

  const { deliveryLocations } = useGetDeliveryLocations();

  const getAreas = (city: string) => {
    try {
      if (deliveryLocations) {
        deliveryLocations.find((item) => {
          if (item.name === city) {
            setAreas(item.areas);
          }
        });
      }
      return areas;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AreaContext.Provider
      value={{ areas, getAreas, deliveryLocations, area, setArea }}
    >
      {children}
    </AreaContext.Provider>
  );
};

export const useArea = () => {
  const context = useContext(AreaContext);
  if (!context) {
    throw new Error("useArea must be used within a currency provider");
  }
  return context;
};
