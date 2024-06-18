import { Button } from "@/components/ui/button";
import PayStackPay from "./PayStackPay";
import useCart from "@/lib/hooks/useCart";

type CartSummaryProps = {
  navigation: () => void;
};

function CartSummary({ navigation }: CartSummaryProps) {
  const { cartData } = useCart();
  return (
    <div className="flex flex-col gap-5 items-start py-4 px-4 border h-fit">
      <p className="text-base font-semibold">CART SUMMARY</p>

      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col text-sm">
          <p>Number of Items</p>
          <p>Subtotal</p>
        </div>

        <div className="flex flex-col items-end font-semibold">
          <p className="">{cartData?.[2]?.["total_items"]}</p>
          <p>GHS {cartData?.[2]?.["total_price"]}</p>
        </div>
      </div>

      <Button
        className="mt-4 uppercase w-full"
        size={"lg"}
        onClick={navigation}
      >
        Checkout
      </Button>
      {/* <PayStackPay /> */}
    </div>
  );
}

export default CartSummary;
