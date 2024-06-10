export interface Product {
  id: number;
  name: string;
  price: number;
  description: string
  images: ProductImages[]
}


interface ProductImages {
  id: number
  image: string 
  is_main: boolean
}