import { url } from "../../../weburl";
import { Product, RelatedProduct } from "../types/product";

export const fetchProducts = async (filter?: {
  [key: string]: any;
}): Promise<Product[]> => {
  const queryString = filter
    ? `?${new URLSearchParams(filter).toString()}`
    : "";
  const response = await fetch(`${url}api/products/${queryString}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchOneProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`${url}api/products/${id}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchRelatedProducts = async (product_id: number): Promise<RelatedProduct[]> => {
  const response = await fetch(`${url}api/products/${product_id}/related-products`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const updateProduct = async (
  body: Partial<Product>,
  id: number
): Promise<Product> => {
  const response = await fetch(`${url}api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    mode: "cors",
    headers: new Headers({ "content-type": "application/json" }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const searchProduct = async (query: string): Promise<Product[]> => {
  const response = await fetch(
    `${url}api/products/search/search?keyword=${query}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
