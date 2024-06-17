import { url } from "../../../weburl";
import { Category } from "../types/category";
import { Product } from "../types/product";

export const fetchCategories = async (query?: string): Promise<Category[]> => {
    const queryString = query ? `?category_name=${query}` : '';
    const response = await fetch(`${url}api/categories/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };