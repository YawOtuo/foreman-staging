import { Product } from "./product";

export interface Cart {
  id: number;
  cart_items: CartItem[]
  total_items: number | string
  total_price: number | string
}

export interface CartItem {
  id: number;
  quantity: number, 
  
  product: Product;
  // add other fields as necessary
}
