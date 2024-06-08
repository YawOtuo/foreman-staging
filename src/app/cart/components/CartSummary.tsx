import { Button } from "@/components/ui/button";
import PayStackPay from "./PayStackPay";

function CartSummary() {
  return (
    <div className="flex flex-col gap-5 items-start py-4 px-4 border h-fit">
      <p className="text-base font-semibold">CART SUMMARY</p>

      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col text-sm">
          <p>Number of Items</p>
          <p>Subtotal</p>
        </div>

        <div className="flex flex-col items-end font-semibold">
          <p className="">3</p>
          <p>GHS 200</p>
        </div>
      </div>

      <Button className="mt-4 uppercase w-full" size={"lg"}>
        Checkout
      </Button>
      {/* <PayStackPay /> */}
    </div>
  );
}

export default CartSummary;