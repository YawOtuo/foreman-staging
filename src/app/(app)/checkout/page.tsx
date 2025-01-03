/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "@/lib/hooks/useCart";
import { CartItem } from "@/lib/types/cart";
import CheckProduct from "./components/CheckProduct";
import CheckSummary from "./components/CheckSummary";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormFields } from "@/lib/types/form";
import CheckoutButton from "./components/CheckoutButton/CheckoutButton";
import useCheckout from "./useCheckout";
import { useAppStore } from "@/lib/store/useAppStore";
import CheckProductSm from "./components/CheckProductSm";
import dynamic from "next/dynamic";
import { AreaProvider } from "@/context/AreaContext";
const DeliveryAddressForm = dynamic(
  () => import("./components/DeliveryAddress")
);

export default function CheckOutPage() {
  const { cart, removeItemFromCart, updateItemQuantity } = useCart();
  const { checkout } = useCheckout();
  const { DBDetails } = useAppStore();

  const methods = useForm<FormFields>({
    defaultValues: {
      agreement: false,
    },
  });

  const {
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<FormFields> = async () => {
    const formValues = getValues();
    const selectedPaymentMethod = formValues.payment;

    console.log("Data:", formValues);
    if (selectedPaymentMethod === "pay_delivery") {
      checkout("delivery", formValues);
    } else if (selectedPaymentMethod === "pay_now") {
      checkout("now", formValues);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="md:w-[90%] ">
        <div className=" w-full flex-1 py-6 px-4">
          <div className="flex justify-between items-center flex-row w-full ">
            <h6 className="font-semibold text-3xl ">Checkout</h6>
            <div className="flex flex-row w-1/3 sm:w-1/6 md:w-[10%]  items-center justify-evenly text-gray-400"></div>
          </div>
        </div>
        <div className="flex flex-col px-4  lg:flex-row-reverse items-start lg:items-start justify-start lg:gap-10 lg:justify-center w-full">
          <div className="w-full md:w-[60%]">
            <div className="w-full sm:py-4 ">
              <h6 className="font-bold text-lg text-primary/80">My Orders</h6>
            </div>
            <div className="hidden mt-10 sm:mt-1 w-full lg:flex text-sm sm:text-base  uppercase ">
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
              <div className="mt-4 flex flex-col gap-5 md;gap-0">
                {cart?.items?.map((cart_item: CartItem, index) => (
                  <div className="w-full" key={index}>
                    <div className="lg:hidden w-full">
                      <CheckProductSm cart_item={cart_item} />
                    </div>
                    <div className="hidden lg:flex w-full">
                      <CheckProduct cart_item={cart_item} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full h-32 p-6 mt-6 text-gray-400 italic flex justify-center items-center border-y-[1px] border">
                <p>Add a product to your cart</p>
              </div>
            )}

            <div className="hidden w-full max-w-[500px] lg:flex justify-center items-center">
              <Link href={"/store"} className="w-full">
                <button className="mt-4 p-4 bg-black text-white rounded-md hover:bg-white hover:text-black  hover:border-[1px] hover:border-black transition-all w-full duration-300 ease-in flex items-center justify-center md:w-1/2">
                  <FaShoppingCart className="mr-2 text-xl" />
                  Cotinue Shopping
                </button>
              </Link>
            </div>
          </div>

          <FormProvider {...methods}>
            <form
              className="flex flex-col items-start flex-1 mt-6 w-full"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <AreaProvider>
                <div className="flex flex-col-reverse justify-between sm:gap-12">
                  <div>
                    <CheckSummary subTotal={cart.totalCost} />
                    <div className="mt-5 w-full sm:w-4/5 flex flex-col gap-3 justify-center items-center disabled:opacity-50 disabled:pointer-events-none disabled:cursor-wait">
                      <CheckoutButton disabled={isSubmitting} />

                      <Link
                        href="/flexi-plan"
                        className="text-shade-300 uppercase text-right mt-6 underline pb-10"
                      >
                        Try Flexi Plan
                      </Link>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center gap-5 justify-center sm:w-[500px]">
                    <DeliveryAddressForm />
                    <label className="space-y-1">
                      Can't find location? Please type the{" "}
                      <b>name of the area</b> and add a <b>popular landmark</b>
                      <input
                        type="text"
                        placeholder="Please enter location with closest landmark"
                        className="border rounded p-2 w-full h-10"
                        {...register("nearestLandmark")}
                      />
                    </label>
                    <label className="text-sm sm:text-base">
                      <input
                        type="checkbox"
                        {...register("agreement", {
                          required: "field is required *",
                        })}
                      />{" "}
                      I accept any price chages within 24 hours of placing this
                      order.{" "}
                      {errors.agreement && (
                        <div className="text-red-600">
                          {errors.agreement.message}
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </AreaProvider>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
