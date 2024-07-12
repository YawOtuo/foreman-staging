export interface Image {
  id: number;
  image: string;
  is_main: boolean;
}

export interface Variant {
  id: number;
  sku: string;
  name: string;
  images: Image[];
  brief_description: string;
  detailed_description: string;
  size: string | null;
  length: number | null;
  width: number | null;
  price: string;
  availability: string;
  created_at: string;
  updated_at: string;
  product: number;
  related_products: RelatedProduct[];
}

export interface RelatedProduct {
  id: number;
  name: string;
  images: Image[];
  category: {
    id: number;
    name: string;
    image: string;
    units_of_measurement: {
      unit: string;
      description: string;
    }[];
  };
  description: string;
  availability: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  units_of_measurement: {
    unit: string;
    description: string;
  }[];
}

export interface Product {
  price: number;
  id: number;
  name: string;
  description: string;
  category: Category;
  availability: string;
  variants: Variant[];
  images: Image[];
}