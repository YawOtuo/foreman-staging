import { url } from "../../../weburl";
import { CreateOrderArgs, Order, UpdateOrderArgs } from "../types/order";

// Fetch orders by user ID
export const FetchOrders = async (
  user_id: string | number
): Promise<Order[]> => {
  const response = await fetch(`${url}api/orders/users/${user_id}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Fetch details of a specific order by order ID
export const FetchOrderDetails = async (
  order_id: string | number,
  user_id: string | number
): Promise<Order> => {
  const response = await fetch(
    `${url}api/orders/${order_id}/users/${user_id}/`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Create a new order for the user
export const CreateOrder = async (
  user_id: string | number,
  orderData: CreateOrderArgs
): Promise<Order> => {
  const response = await fetch(`${url}api/orders/users/${user_id}/`, {
    method: "POST",
    body: JSON.stringify(orderData),
    mode: "cors",
    headers: new Headers({ "content-type": "application/json" }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Update an order's payment status by order ID

export const UpdateOrder = async (
  user_id: string | number,
  updateData: UpdateOrderArgs
): Promise<{ message: string }> => {
  const response = await fetch(
    `${url}api/orders/${updateData.order_id}/users/${user_id}/`,
    {
      method: "PUT",
      body: JSON.stringify(updateData.orderData),
      mode: "cors",
      headers: new Headers({ "content-type": "application/json" }),
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Delete an order by order ID
export const DeleteOrder = async (order_id: string | number, user_id: string  | number): Promise<void> => {
  const response = await fetch(`${url}api/orders/${order_id}/users/${user_id}/`, {
    method: "DELETE",
    mode: "cors",
    headers: new Headers({ "content-type": "application/json" }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};
