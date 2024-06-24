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
import CheckoutButton from "./components/CheckoutButton/CheckoutButton";
import AuthLayout from "../(auth)/layout";
import LoginComponent from "../(auth)/login/components/LoginComponent";
import { Modal } from "@/components/ui/dialog";
import useCheckout from "./useCheckout";
import { useAppStore } from "@/lib/store/useAppStore";
import CheckProductSm from "./components/CheckProductSm";

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
    setError,
    handleSubmit,
    getFieldState,
    getValues,
    formState: { errors, isSubmitting, isValid },
  } = methods;

  const [deliveryCharge, setDeliveryCharge] = useState(50.0);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const formValues = getValues();
    const selectedPaymentMethod = formValues.payment;

    if (selectedPaymentMethod === "pay_delivery") {
      checkout("delivery");
    } else if (selectedPaymentMethod === "pay_now") {
      checkout("now");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="md:w-[90%] flex-1 ">
        <div className=" w-full flex-1 py-6 px-4">
          <div className="flex justify-between items-center flex-row w-full ">
            <h6 className="font-semibold text-3xl ">Checkout</h6>
            <div className="flex flex-row w-1/3 sm:w-1/6 md:w-[10%]  items-center justify-evenly text-gray-400"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row px-4">
          <div className=" md:w-[60%]">
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
                <div className="w-full" key={index} >
                    <div className="lg:hidden w-full">
                      <CheckProductSm cart_item={cart_item}  />
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
              className="flex flex-col sm:justify-center items-center flex-1 mt-6 md:mt-24"
              onSubmit={methods.handleSubmit(onSubmit)}>
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
                  I accept any price chages within 24 hours of placing this
                  order.{" "}
                  {errors.agreement && (
                    <div className="text-red-600">
                      {errors.agreement.message}
                    </div>
                  )}
                </label>
              </div>
              <div className="mt-5 w-full sm:w-4/5 flex flex-col gap-3 justify-center items-center">
                {DBDetails.email ? (
                  <CheckoutButton
                    disabled={isSubmitting} // Disable button if form is not valid
                  />
                ) : (
                  <Modal
                    size={"5xl"}
                    className="h-[90vh] max-h-[500px] overflow-y-scroll"
                    trigger={<CheckoutButton />}
                    body={
                      <div>
                        <AuthLayout>
                          <LoginComponent />
                        </AuthLayout>
                      </div>
                    }
                    // header={<div></div>}
                  />
                )}{" "}
                <Link
                  href="/warehousing"
                  className="text-shade-300 uppercase text-right mt-6 underline">
                  Try warehousing
                </Link>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
