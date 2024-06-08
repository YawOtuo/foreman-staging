"use client"
import { useQuery } from '@tanstack/react-query'; // Importing useQuery from React Query
import { fetchProducts } from '../api/products';

export const useProducts = () => {
  // Using useQuery with an object argument instead of an array
  const { data: allProducts, isLoading: allProductsLoading, error: allProductsError } = useQuery({
    queryKey: ["products"], // Providing the queryKey as an array
    queryFn: () => fetchProducts(), // Defining the queryFn to fetch products
  });

  return {
    allProducts,
    allProductsLoading,
    allProductsError,
  };
};
