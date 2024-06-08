import { Product } from "./product";

export interface Cart {
  id: number;
  cart_items: CartItem[]
}

export interface CartItem {
  id: number;
  quantity: number, 
  
  product: Product;
  // add other fields as necessary
}
