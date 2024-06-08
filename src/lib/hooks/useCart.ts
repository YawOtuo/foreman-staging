"use client"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FetchCart, DeleteFromCart, AddToCart } from "../api/cart";
import { useToast } from "@/components/ui/use-toast";
import { Cart } from "../types/cart";

interface AddToCartArgs {
  product_id: number;
}

interface DeleteFromCartArgs {
  product_id: number;
}

function useCart(cart_id: string | number) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const {
    data: cartData,
    isLoading: isCartLoading,
    error: cartError,
  } = useQuery<Cart[]>({
    queryKey: ["cart"],
    queryFn: () => FetchCart(cart_id),
  });

  const addToCartMutation = useMutation({
    mutationFn: ({ product_id }: AddToCartArgs) =>
      AddToCart(cart_id, product_id),
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message, // Assuming the response body contains a 'message' field
        variant: "success",
      });
    },
    onError: (error: Error) => {
      toast({ title: "Error", description: error.message, variant: "error" });
    },
  });

  const deleteFromCartMutation = useMutation({
    mutationFn: ({ product_id }: DeleteFromCartArgs) =>
      DeleteFromCart(cart_id, product_id),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Item removed from cart",
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error: Error) => {
      toast({ title: "Error", description: error.message, variant: "error" });
    },
  });

  const handleAddToCart = async (product_id: number) => {
    try {
      await addToCartMutation.mutateAsync({ product_id });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFromCart = async (product_id: number) => {
    try {
      await deleteFromCartMutation.mutateAsync({ product_id });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    cartData,
    isCartLoading,
    cartError,
    handleAddToCart,
    handleDeleteFromCart,
  };
}

export default useCart;