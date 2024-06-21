"use client"
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import useCart from "@/lib/hooks/useCart";
import CartCard from "./CartCard";
import CartSummary from "./CartSummary";

function CartPage() {
  const router = useRouter();

  // Function to handle going back to the previous CartPage
  const goBack = () => {
    router.back();
  };
  const { cart } = useCart();
  return (
    <div className="w-full flex-col gap-2 px-5 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-7 w-full lg:gap-x-5 ">
        <div className="flex flex-col items-start gap-1 lg:col-start-2 lg:col-span-4">
          <button
            onClick={goBack}
            variant={"ghost"}
            size={"lg"}
            className="!px-2">
            <MdKeyboardArrowLeft className="mr-2" />
            Back{" "}
          </button>
          <p className="text-xl font-semibold">My Cart</p>
        </div>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-7 pt-5 gap-x-5  min-h-screen gap-y-5 ">
        <div className="lg:col-span-1 "></div>
        <div className="lg:col-span-4 flex flex-col gap-5">
          {cart?.items?.map((r: CartItem) => (
            <div className="" key={r?.id}>
              <CartCard data={r} />
            </div>
          ))}
        </div>
        <div className="lg:col-span-2">
          {cart && <CartSummary navigation={() => router.push("/checkout")} />}
        </div>{" "}
      </div>
    </div>
  );
}

export default CartPage;
