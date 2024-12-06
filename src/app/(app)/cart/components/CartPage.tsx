"use client";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import CartSummary from "./CartSummary";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/lib/types/cart";
import Link from "next/link";
import useCart from "@/lib/hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";
import CartCardBg from "./CartCardBg";
import CartCartSm from "./CartCardSm";

function CartPage() {
  const router = useRouter();

  // Function to handle going back to the previous CartPage
  const goBack = () => {
    router.back();
  };
  const { cart } = useCart();
  return (
    <div className="w-full flex-col gap-2 px-5 lg:px-10">
      <div className="flex flex-col w-full lg:gap-5 ">
        <div className="flex flex-col items-start gap-1 lg:col-start-2 lg:col-span-4">
          <Button
            onClick={goBack}
            variant={"ghost"}
            size={"lg"}
            className="!px-2"
          >
            <MdKeyboardArrowLeft className="mr-2" />
            Back{" "}
          </Button>
          <p className="text-xl font-semibold">My Cart</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center w-full pt-5 gap-x-5  min-h-screen gap-y-5 ">
        <div className="w-full flex flex-col gap-5 basis-[70%] shrink-0">
          {cart?.items?.map((r: CartItem) => (
            <div className="" key={r?.id}>
              <>
                <div className="hidden lg:block">
                  <CartCardBg data={r} />
                </div>
                <div className="lg:hidden">
                  <CartCartSm data={r} />
                </div>
              </>
            </div>
          ))}
          {cart?.items?.length < 1 && (
            <div className="flex flex-col gap-5">
              No Items in cart
              <Link href="/store">
                <Button variant={"outline"}>Start Shopping</Button>
              </Link>
            </div>
          )}

          {cart?.items?.length > 1 && (
            <Link href="/store">
              <Button variant={"black"} size={"lg"} fontSize={"sm"}>
                <FaShoppingCart className="mr-2 text-xl" />
                Continue Shopping
              </Button>
            </Link>
          )}
        </div>
        <div className="w-full basis">
          {cart && <CartSummary navigation={() => router.push("/checkout")} />}
        </div>{" "}
      </div>
    </div>
  );
}

export default CartPage;
