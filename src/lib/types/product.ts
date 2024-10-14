import { Category } from "./category";
import { UnitOfMeasurement } from "./unit_of_measurement";

export interface Image {
  id: number;
  image: string;
  is_main: boolean;
}

export interface CartProductVariant {
  id: number;
  name: string;
  price: number;
  brief_description: string;
  availability: string;
  images: Image[];
  unit_of_measurement: UnitOfMeasurement | null;
  min_order_quantity: string | null;
}

export interface ProductVariant {
  id: number;
  sku: string;
  name: string;
  images: Image[];
  brief_description: string;
  detailed_description: string;
  size: string | null;
  length: number | null;
  width: number | null;
  price: { unit_of_measurement: UnitOfMeasurement; price: number }[];
  availability: string;
  created_at: string;
  updated_at: string;
  product: number;
  related_products: RelatedProduct[];
  min_order_value: string | null;
  min_order_quantity: string | null;
}

export interface RelatedProduct {
  id: number;
  name: string;
  images: Image[];
  category: {
    id: number;
    name: string;
    image: string;
    // units_of_measurement: UnitOfMeasurement[];
  };
  price: number;
  description: string;
  availability: string;
}

export interface Product {
  price: number;
  id: number;
  name: string;
  description: string;
  category: Category;
  availability: string;
  variants: ProductVariant[];
  images: Image[];
}
