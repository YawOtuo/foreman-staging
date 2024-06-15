"use client"
import { useQuery } from '@tanstack/react-query'; // Importing useQuery from React Query
import { fetchProducts } from '../api/products';

export const useProducts = (filter?: { [key: string]: any }) => {
  const queryKey = ["products", filter]; // Including filter in queryKey to manage cache

  const queryFn = () => fetchProducts(filter); // Fetch products using filter

  const { data: allProducts, isLoading: allProductsLoading, error: allProductsError } = useQuery({
    queryKey,
    queryFn,
  });

  return {
    allProducts,
    allProductsLoading,
    allProductsError,
  };
};