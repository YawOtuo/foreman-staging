"use client";
import { useQuery } from "@tanstack/react-query"; // Importing useQuery from React Query
import { fetchProducts, fetchRelatedProducts } from "../api/products";

export const useGetRelatedProducts = (product_id: number) => {
  const queryKey = ["related-products", product_id];

  const queryFn = () => fetchRelatedProducts(product_id);

  const {
    data: relatedProducts,
    isLoading: isLoadingRelatedProducts,
    error: errorRelatedProducts,
  } = useQuery({
    queryKey,
    queryFn,
  });

  return {
    relatedProducts,
    isLoadingRelatedProducts,
    errorRelatedProducts,
  };
};
export const useProducts = (filter?: { [key: string]: any }) => {
  const queryKey = ["products", filter]; // Including filter in queryKey to manage cache

  const queryFn = () => fetchProducts(filter); // Fetch products using filter

  const {
    data: allProducts,
    isLoading: allProductsLoading,
    error: allProductsError,
  } = useQuery({
    queryKey,
    queryFn,
  });

  return {
    allProducts,
    allProductsLoading,
    allProductsError,
  };
};
