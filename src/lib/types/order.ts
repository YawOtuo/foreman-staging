import { CartItem } from "./cart";
import { AddressProps } from "./form";
import { ProductVariant } from "./product";
import { ShippingAddress } from "./shippingDetails";

export interface OrderItem {
  product_variant: ProductVariant;
  quantity: number;
  total_cost: number;
}
export interface Order {
  id: number;
  created_at?: Date;
  is_paid?: boolean;
  total_cost?: number;
  total_quantity?: number;
  items?: OrderItem[];
  status?: string;
  shipping_address : ShippingAddress

}

export interface CreateOrderArgs {
  total_order_cost: number;
  total_order_quantity: number;
  order_items: {
    product_id: number;
    quantity: number;
    totalCost: number;
  }[];
  shipping_address : ShippingAddress
}

export interface UpdateOrderArgs {
  order_id: string | number;
  orderData: {
    is_paid?: boolean; // Specify the correct type here for is_paid
    // Add other fields as needed for updating the order
  };
}
