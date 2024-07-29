// hooks/useOrders.ts
"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { CreateOrderArgs, Order, UpdateOrderArgs } from "../types/order";
import { useAppStore } from "../store/useAppStore";
import {
  CreateOrder,
  DeleteOrder,
  FetchOrderDetails,
  FetchOrders,
  UpdateOrder,
} from "../api/orders";

function useOrders(orderNumber?: number) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { DBDetails, FBaseDetails } = useAppStore();

  const user_id = DBDetails?.id; // Replace with your actual user ID retrieval logic
  const {
    data: orderData,
    isLoading: isOrderLoading,
    error: orderError,
  } = useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: () => FetchOrders(Number(user_id)),
    enabled: !!DBDetails?.id,
  });

  const createOrderMutation = useMutation({
    mutationFn: (orderData: CreateOrderArgs) =>
      CreateOrder(Number(user_id), orderData),
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: "Order Created Successfully",
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateOrderMutation = useMutation({
    mutationFn: (orderData: UpdateOrderArgs) =>
      UpdateOrder(Number(user_id), orderData),
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: "Order Updated succesfully",
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteOrderMutation = useMutation({
    mutationFn: (order_id: string | number) =>
      DeleteOrder(Number(order_id), Number(user_id)),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Order deleted",
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  const handleCreateOrder = async (orderData: CreateOrderArgs) => {
    try {
      toast({
        title: "Loading",
        description: "Checking Out",
        variant: "success", //should be order
      });
      const result = await createOrderMutation.mutateAsync(orderData);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  const handleDeleteOrder = async (order_id: string | number) => {
    try {
      await deleteOrderMutation.mutateAsync(order_id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateOrder = async ({
    order_id,
    orderData,
  }: UpdateOrderArgs) => {
    try {
      await updateOrderMutation.mutateAsync({ order_id, orderData });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    orderData,
    isOrderLoading,
    orderError,
    handleCreateOrder,
    handleDeleteOrder,
    handleUpdateOrder,
  };
}

export default useOrders;
