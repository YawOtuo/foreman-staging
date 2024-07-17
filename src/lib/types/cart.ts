import { Category } from "./category";
import { CartProductVariant, Product, ProductVariant } from "./product";

export interface Cart {
  id?: number;
  items: CartItem[];

  totalQuantity: number;
  totalCost: number;
}

export interface CartItem {
  id: number;
  quantity: number;
  product_category: Category; // Add this line to include the category separately

  product_variant: CartProductVariant;
  totalCost: number;
  // add other fields as necessary
}
