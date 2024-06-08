"use client";
import useCart from "@/lib/hooks/useCart";
import CartCard from "./components/CartCard";
import { CartItem } from "@/lib/types/cart";
import CartSummary from "./components/CartSummary";

function Page() {
  const { cartData } = useCart(2);
  return (
    <div className="grid grid-cols-7 pt-5 gap-x-5 px-10 min-h-screen">
      <div className="col-span-1 "></div>
      <div className="col-span-4 flex flex-col gap-5">
        {cartData?.[1]?.["cart_items"]?.map((r: CartItem) => (
          <div className="" key={r?.id}>
            <CartCard data={r} />
          </div>
        ))}
      </div>
      <div className="col-span-2">
        <CartSummary />
      </div>{" "}
    </div>
  );
}

export default Page;
