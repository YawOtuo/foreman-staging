"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCart from "@/lib/hooks/useCart";
import { CartItem } from "@/lib/types/cart";
import { useEffect, useRef, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

function CardQuantityControls({
  quantity,
  cart_item,
}: {
  quantity: number;
  cart_item: CartItem;
}) {
  const { updateItemQuantity } = useCart();
  const [inputValue, setInputValue] = useState(cart_item.quantity.toString());
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const validateAndUpdateQuantity = () => {
    const newQuantity = Number(inputValue);
    const minQuantity = Number(cart_item.product_variant.min_order_quantity);

    if (newQuantity >= minQuantity) {
      updateItemQuantity(cart_item.id, newQuantity);
    } else {
      setInputValue(minQuantity.toString());
    }
  };

  const handleIncrement = () => {
    const newQuantity = cart_item.quantity + 1;
    setInputValue(newQuantity.toString());
    updateItemQuantity(cart_item.id, newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(
      cart_item.quantity - 1,
      Number(cart_item.product_variant.min_order_quantity)
    );
    setInputValue(newQuantity.toString());
    updateItemQuantity(cart_item.id, newQuantity);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        validateAndUpdateQuantity();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputValue]);

  return (
    <div className="w-full lg:w-fit flex justify-end items-center lg:justify-center gap-2">
      <Button
        onClick={handleDecrement}
        variant={"outline"}
        size={"sm"}
        fontSize={"xs"}
      >
        <FaMinus />
      </Button>
      <Input
        ref={inputRef}
        className="w-[80px]  text-center px-3"
        value={inputValue}
        onBlur={validateAndUpdateQuantity}
        min={Number(cart_item.product_variant.min_order_quantity)}
        onChange={handleInputChange}
      />
      <Button
        onClick={handleIncrement}
        variant={"outline"}
        size={"sm"}
        fontSize={"xs"}
      >
        <IoMdAdd />
      </Button>

      <div>
        <p>{cart_item.product_variant.unit_of_measurement?.unit}</p>
      </div>
    </div>
  );
}

export default CardQuantityControls;
