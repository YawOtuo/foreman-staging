import { Button } from "@/components/ui/button";
import PayStackPay from "./PayStackPay";
import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";
import { convertPrice } from "@/lib/utils/convertPrice";
import { useAppStore } from "@/lib/store/useAppStore";

type CartSummaryProps = {
  navigation: () => void;
};

function CartSummary({ navigation }: CartSummaryProps) {
  const { cart } = useCart();
  const { DBDetails } = useAppStore();
  const { currency, exchangeRates } = useCurrency();
  const convertedPrice = convertPrice(
    cart?.totalCost,
    "GHS",
    currency,
    exchangeRates
  );
  return (
    <div className="flex flex-col gap-5 items-start py-4 px-4 border h-fit">
      <p className="text-base font-semibold">CART SUMMARY</p>

      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col text-sm">
          <p>Number of Items</p>
          <p>Subtotal</p>
        </div>

        <div className="flex flex-col items-end font-semibold">
          <p className="">{cart?.totalQuantity}</p>
          <p>
            {currency}{" "}
            {Number(convertedPrice).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>{" "}
        </div>
      </div>
      <Link
        href={`${DBDetails?.email ? "/checkout" : "/login?redirect-url=checkout"}`}
        className="w-full">
        <Button className="mt-4 uppercase w-full" size={"lg"}>
          Checkout
        </Button>
      </Link>
      {/* <PayStackPay /> */}
    </div>
  );
}

export default CartSummary;
