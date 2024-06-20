// components/ProductPrice.tsx
import { useCurrency } from "../context/CurrencyContext";
import { convertPrice } from "@/lib/utils/convertPrice";

interface ProductPriceProps {
  price: number;
}

const ProductPrice = ({ price }: ProductPriceProps) => {
  const { currency, exchangeRates } = useCurrency();
  const convertedPrice = convertPrice(price, "USD", currency, exchangeRates);

  return (
    <span className="text-lg font-bold">
      {currency} {convertedPrice.toFixed(2)}
    </span>
  );
};

export default ProductPrice;
