"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  FetchCart,
  DeleteFromCart,
  AddToCart,
  IncrementQuantity,
  DecrementQuantity,
} from "../api/cart";
import { useToast } from "@/components/ui/use-toast";
import { Cart } from "../types/cart";
import { useAppStore } from "../store/useAppStore";

interface AddToCartArgs {
  product_id: number;
}

interface DeleteFromCartArgs {
  product_id: number;
}

interface UpdateQuantityArgs {
  product_id: number;
}

function useCart() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { DBDetails, FBaseDetails } = useAppStore();

  const cart_id = DBDetails?.cart_id;
  const {
    data: cartData,
    isLoading: isCartLoading,
    error: cartError,
  } = useQuery<Cart[]>({
    queryKey: ["cart"],
    queryFn: () => FetchCart(Number(cart_id)),
    enabled: !!cart_id,
  });

  const addToCartMutation = useMutation({
    mutationFn: ({ product_id }: AddToCartArgs) =>
      AddToCart(Number(cart_id), product_id),
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message, // Assuming the response body contains a 'message' field
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteFromCartMutation = useMutation({
    mutationFn: ({ product_id }: DeleteFromCartArgs) =>
      DeleteFromCart(Number(cart_id), product_id),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Item removed from cart",
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const incrementQuantityMutation = useMutation({
    mutationFn: ({ product_id }: UpdateQuantityArgs) =>
      IncrementQuantity(Number(cart_id), product_id),
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message,
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const decrementQuantityMutation = useMutation({
    mutationFn: ({ product_id }: UpdateQuantityArgs) =>
      DecrementQuantity(Number(cart_id), product_id),
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message,
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleAddToCart = async (product_id: number) => {
    try {
      toast({
        title: "Loading",
        // description: data.message, // Assuming the response body contains a 'message' field
        variant: "success",
      });
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

  const handleIncrementQuantity = async (product_id: number) => {
    try {
      await incrementQuantityMutation.mutateAsync({ product_id });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecrementQuantity = async (product_id: number) => {
    try {
      await decrementQuantityMutation.mutateAsync({ product_id });
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
    handleIncrementQuantity,
    handleDecrementQuantity,
  };
}

export default useCart;
