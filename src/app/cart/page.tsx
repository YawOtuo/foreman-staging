"use client";
import useCart from "@/lib/hooks/useCart";
import CartCard from "./components/CartCard";
import { CartItem } from "@/lib/types/cart";
import CartSummary from "./components/CartSummary";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowLeft } from "react-icons/md";
import CardCartSkeleton from "./components/CartCardSkeleton";
import FetchingState from "@/components/FetchingState";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  // Function to handle going back to the previous page
  const goBack = () => {
    router.back();
  };
  const { isCartLoading, cartError, cartData } = useCart(2);
  return (
    <div className="w-full flex-col gap-2 px-5 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-7 w-full lg:gap-x-5 ">
        <div className="flex flex-col items-start gap-1 lg:col-start-2 lg:col-span-4">
          <Button
            onClick={goBack}
            variant={"ghost"}
            size={"lg"}
            className="!px-2">
            <MdKeyboardArrowLeft className="mr-2" />
            Back{" "}
          </Button>
          <p className="text-xl font-semibold">My Cart</p>
        </div>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-7 pt-5 gap-x-5  min-h-screen gap-y-5 ">
        <div className="lg:col-span-1 "></div>
        <div className="lg:col-span-4 flex flex-col gap-5">
          <FetchingState
            className={"flex flex-col gap-2"}
            success={cartData?.[1]?.["cart_items"]?.map((r: CartItem) => (
              <div className="" key={r?.id}>
                <CartCard data={r} />
              </div>
            ))}
            skeletonCount={4}
            loading={
              <div className="mb-5">
                <CardCartSkeleton />
              </div>
            }
            isLoading={isCartLoading}
            isError={cartError}
          />
        </div>
        <div className="lg:col-span-2">
          <CartSummary />
        </div>{" "}
      </div>
    </div>
  );
}

export default Page;
