import useCart from "@/lib/hooks/useCart";
import { CartItem } from "@/lib/types/cart";
import { Product } from "@/lib/types/product";
import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

interface ProductRowProps {
  cart_item: CartItem;
}

const ProductRow: React.FC<ProductRowProps> = ({ cart_item }) => {
  const { cart, removeItemFromCart, updateItemQuantity } = useCart();

  // const handleQuantityChange = (newQuantity: number) => {
  //   if (newQuantity >= 0) {
  //     setQuantity(newQuantity);
  //     updateQuantity(newQuantity);
  //   }
  // };

  // const removeItemFromCart = () => {
  //   onDelete();
  // };

  return (
    <div className="flex items-center flex-row justify-between text-sm sm:text-base border-y-[1px] border-gray-500 py-5 pr-3 ">
      <div className="flex flex-row text-center justify-start relative   sm:w-[50%] w-1/3 gap-3 items-center">
        <div className="sm:ml-3 absolute sm:relative sm:top-0 sm:left-0 -top-6 left-0 hover:cursor-pointer ml-2 hover:bg-gray-300 transition-all rounded-full duration-300 ease-in p-[2px]">
          <MdCancel
            color="gray"
            className="text-lg sm:text-2xl "
            onClick={() => removeItemFromCart(cart_item.id)}
          />
        </div>
        <div className="flex-1 flex justify-between gap-2 sm:gap-5 ml-3 sm:ml-0 sm:justify-center">
          <div className="flex flex-col justify-center">
            <p className="font-semibold"> {cart_item.product.name} </p>
            {/* <p className="text-gray-500">{product.size} </p> */}
          </div>

          <div className=" text-center">
            <p className="font-semibold">
              Size:{" "}
              <span className="font-normal text-gray-500">
                {/* {cart_item.product.size} */}
              </span>{" "}
            </p>
            <p className="font-semibold">
              {" "}
              Unit:{" "}
              <span className="font-normal text-gray-500">
                {/* {cart_item.product.unit} */}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center w-[53%] md:w-[47%] justify-between sm:justify-evenly">
        <div className="text-center flex flex-col sm:flex-row">
          GHS{" "}
          <p className="ml-1">
            {Number(cart_item.product?.price)?.toFixed(2)}{" "}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-2 ">
          <button
            onClick={() =>
              updateItemQuantity(cart_item.id, cart_item.quantity - 1)
            }
            className="w-full sm:w-8 text-2xl rounded-md bg-gray-300">
            -
          </button>
          <input
            type="number"
            className="w-16 text-center border rounded"
            value={cart_item.quantity}
            onChange={(e) =>
              updateItemQuantity(cart_item.id, Number(e.target.value))
            }
          />
          <button
            onClick={() =>
              updateItemQuantity(cart_item.id, cart_item.quantity + 1)
            }
            className="w-full sm:w-8 text-2xl rounded-md bg-gray-300">
            +
          </button>
        </div>
        <div className="text-center flex flex-col sm:flex-row">
          GHS
          <p className="ml-1">
            {(cart_item.product.price * cart_item.quantity)?.toFixed(2)}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
