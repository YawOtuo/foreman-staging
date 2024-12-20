import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { fetchExchangeRates } from "@/lib/api/fetchXRates";

interface CurrencyContextType {
  currency: string;
  exchangeRates: Record<string, number>;
  setCurrency: (currency: string) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const storedCurrency = window.localStorage.getItem("selectedCurrency");
      return storedCurrency || "GHS";
    }
    return "GHS";
  });
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    const fetchRates = async () => {
      const rates = await fetchExchangeRates();
      setExchangeRates(rates);
    };
    fetchRates();
  }, [currency]);

  useEffect(() => {
    window.localStorage.setItem("selectedCurrency", currency);
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, exchangeRates, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be within a currency provider");
  }
  return context;
};
