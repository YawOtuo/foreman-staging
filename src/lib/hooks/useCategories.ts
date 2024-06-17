import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/categories";
import { Category } from "../types/category";

function useCategories() {
  const {
    data: categories,
    isLoading: catLoading,
    error: catError,
  } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
  return {
    categories,
    catError,
    catLoading,
  };
}

export default useCategories;
