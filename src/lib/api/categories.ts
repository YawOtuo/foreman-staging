import { url } from "../../../weburl";
import { Product } from "../types/product";

export const fetchCategories = async (query?: string): Promise<Product[]> => {
    const queryString = query ? `?name=${query}` : '';
    const response = await fetch(`${url}api/categories/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };