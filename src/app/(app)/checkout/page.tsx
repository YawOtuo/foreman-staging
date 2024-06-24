"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "@/lib/hooks/useCart";
import { CartItem } from "@/lib/types/cart";
import CheckProduct from "./components/CheckProduct";
import CheckSummary from "./components/CheckSummary";
import { Button } from "@/components/ui/button";
import DeliveryAddressForm from "./components/DeliveryAddress";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormFields } from "@/lib/types/form";

export default function CheckOutPage() {
  const { cart, removeItemFromCart, updateItemQuantity } = useCart();

  const methods = useForm<FormFields>({
    defaultValues: {
      agreement: false,
    },
  });

  const {
    register,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const [deliveryCharge, setDeliveryCharge] = useState(50.0);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    // try{
    // } catch(error){
    //   console.log(error)
    // }
  };

  return (
    <div className="w-full flex-1">
      <div className="bg-[#e8e8e8] w-full flex-1 py-6 px-4">
        <div className="flex justify-between items-center flex-row w-full ">
          <h6 className="font-semibold text-3xl ">Checkout</h6>
          <div className="flex flex-row w-1/3 sm:w-1/6 md:w-[10%]  items-center justify-evenly text-gray-400"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-4">
        <div className="py-4 md:w-[60%]">
          <div className="w-full sm:py-4 ">
            <h6 className="font-bold text-lg">Your Orders</h6>
          </div>
          <div className="mt-10 sm:mt-16 w-full flex text-sm sm:text-base font-bold ">
            <div className=" w-1/2 flex justify-start items-center">
              <p className="text-center">Products</p>
            </div>
            <div className="flex-1 flex justify-evenly items-center flex-row w-[40%]">
              <div className="flex flex-col sm:flex-row gap-1">
                Unit <span>Price</span>
              </div>
              <p>Quantity</p>
              <p>Total</p>
            </div>
          </div>
          {cart?.items?.length > 0 ? (
            <div className="mt-4">
              {cart?.items?.map((cart_item: CartItem, index) => (
                <CheckProduct cart_item={cart_item} key={index} />
              ))}
            </div>
          ) : (
            <div className="w-full h-32 p-6 mt-6 text-gray-400 italic flex justify-center items-center border-y-[1px] border-gray-500">
              <p>Add a product to your cart</p>
            </div>
          )}
        </div>

        <FormProvider {...methods}>
          <form
            className="flex flex-col sm:justify-start items-center flex-1 mt-6 md:mt-24"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <CheckSummary
              deliveryCharge={deliveryCharge}
              subTotal={cart.totalCost}
            />
            <div className="mt-6 w-full flex flex-col items-center gap-5 justify-center sm:w-3/5 md:w-4/5 ">
              <DeliveryAddressForm />
              <label className="text-xs sm:text-base">
                <input
                  type="checkbox"
                  {...register("agreement", {
                    required: "field is required *",
                  })}
                />{" "}
                I accept any price chages within 24 hours of placing this order.{" "}
                {errors.agreement && (
                  <div className="text-red-600">{errors.agreement.message}</div>
                )}
              </label>
            </div>
            <div className="mt-5 w-full flex justify-center">
              {
                <Button
                  className="w-1/2 uppercase bg-orange-300 hover:bg-white hover:text-orange-400 hover:border-[1px] border-orange-400 disabled:bg-opacity-80 disabled:pointer-events-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Placing Order..." : "Place Order"}
                </Button>
              }
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
