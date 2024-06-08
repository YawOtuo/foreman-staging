import { ProductInterface } from "./product";

export interface Cart {
  id: number;
  cart_items: CartItem[]
}

export interface CartItem {
  id: number;
  quantity: number, 
  
  product: ProductInterface;
  // add other fields as necessary
}
