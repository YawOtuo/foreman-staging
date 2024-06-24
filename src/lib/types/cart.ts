import { Product } from "./product";

export interface Cart {
  id?: number;
  items: CartItem[];

  totalQuantity: number;
  totalCost: number;
}

export interface CartItem {
  id: number;
  quantity: number;

  product: Product;
  totalCost: number;
  // add other fields as necessary
}
