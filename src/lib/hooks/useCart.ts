// hooks/useCart.ts

import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { Cart, CartItem } from "../types/cart";

const initialCart: Cart = {
  items: [],
  totalQuantity: 0,
  totalCost: 0,
};

const useCart = () => {
  let cart: Cart = initialCart; // Initialize cart with initialCart
  let setCart: (cart: Cart) => void;

  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    [cart, setCart] = useLocalStorage<Cart>("foreman-cart", initialCart);
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

  const AddToCart = (item: CartItem) => {
    const existingItem = cart.items.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
      existingItem.totalCost =
        existingItem.quantity * existingItem.product.price;
    } else {
      cart.items.push({
        ...item,
        totalCost: item.quantity * item.product.price,
      });
    }

    setCart({ ...cart });
  };

  const updateItemQuantity = (itemId: string | number, quantity: number) => {
    const item = cart.items.find((cartItem) => cartItem.id === itemId);

    if (item) {
      item.quantity = quantity;
      item.totalCost = item.quantity * item.product.price;
      setCart({ ...cart });
    }
  };

  const removeItemFromCart = (itemId: string | number) => {
    const updatedItems = cart.items.filter(
      (cartItem) => cartItem.id !== itemId
    );
    setCart({ ...cart, items: updatedItems });
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
