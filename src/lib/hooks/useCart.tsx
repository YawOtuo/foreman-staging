// hooks/useCart.ts

import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { Cart, CartItem } from "../types/cart";
import { useToast } from "@/components/ui/use-toast";
import { useAppStore } from "../store/useAppStore";
import Link from "next/link";

const initialCart: Cart = {
  items: [],
  totalQuantity: 0,
  totalCost: 0,
};

const useCart = () => {
  let cart: Cart = initialCart; // Initialize cart with initialCart
  let setCart: (cart: Cart) => void;
  const { toast } = useToast();
  const { DBDetails } = useAppStore();

  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    [cart, setCart] = useLocalStorage<Cart>(`foreman-cart`, initialCart);
  }

  useEffect(() => {
    const calculateTotals = () => {
      const totalQuantity = cart.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const totalCost = cart.items.reduce(
        (sum, item) => sum + item.totalCost,
        0
      );
      setCart({ ...cart, totalQuantity, totalCost });
    };
    calculateTotals();
  }, [cart.items]);

  const AddToCart = (item: Omit<CartItem, "totalCost">) => {
    const existingItem = cart.items.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedItems = cart.items.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              ...item,
              // quantity: cartItem.quantity + item.quantity,
              totalCost:
                (cartItem.quantity + item.quantity) *
                Number(item.product_variant.price),
            }
          : cartItem
      );
      setCart({ ...cart, items: updatedItems });
    } else {
      setCart({
        ...cart,
        items: [
          ...cart.items,
          {
            ...item,
            totalCost: item.quantity * Number(item.product_variant.price),
          },
        ],
      });
    }

    const { dismiss } = toast({
      title: "Success",
      description: (
        <div className="flex flex-col gap-0 items-start">
          <p>{item?.product_variant.name} added to cart successfully</p>
          <Link
            href="/cart"
            className="uppercase font-bold"
            onClick={() => dismiss()}
          >
            View Cart
          </Link>
        </div>
      ),
      variant: "success",
    });
  };

  const updateItemQuantity = (itemId: number, quantity: number) => {
    const item = cart.items.find((cartItem) => cartItem.id === itemId);

    console.log("update quantity");

    if (item) {
      item.quantity = quantity;
      item.totalCost = item.quantity * Number(item.product_variant.price);
      setCart({ ...cart });
    }
    toast({
      title: "Success",
      description: "Item quantity updated in cart",
      variant: "success",
      className: "z-[999]",
    });
  };

  const removeItemFromCart = (itemId: number) => {
    const updatedItems = cart.items.filter(
      (cartItem) => cartItem.id !== itemId
    );
    setCart({ ...cart, items: updatedItems });
    toast({
      title: "Success",
      description: "Item removed from cart",
      variant: "success",
    });
  };

  const clearCart = () => {
    setCart(initialCart);
  };

  return {
    cart,
    AddToCart,
    updateItemQuantity,
    removeItemFromCart,
    clearCart,
  };
};

export default useCart;
