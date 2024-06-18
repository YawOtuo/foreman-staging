import { Category } from "./category";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string
  category: Category
  images: ProductImages[]
  availability: string
}


interface ProductImages {
  id: number
  image: string 
  is_main: boolean
}