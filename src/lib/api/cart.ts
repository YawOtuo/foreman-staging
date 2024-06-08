import { url } from "../../../weburl";
import { Cart } from "../types/cart";



interface ApiResponse<T> {
  data: T;
}

// Fetch cart by ID
export const FetchCart = async (cart_id: string | number): Promise<Cart[]> => {
  const response = await fetch(`${url}api/cart/${cart_id}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Add a product to the cart
export const AddToCart = async (cart_id: string | number, product_id: number): Promise<{ message : string}> => {
  const response = await fetch(`${url}api/cart/${cart_id}/`, {
    method: "POST",
    body: JSON.stringify({ product_id }),
    mode: "cors",
    headers: new Headers({ "content-type": "application/json" }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Delete a product from the cart
export const DeleteFromCart = async (cart_id: string | number, product_id: number): Promise<void> => {
  
  const response = await fetch(`${url}api/cart/${cart_id}/products/${product_id}`, {
    method: "DELETE",
    mode: "cors",
    headers: new Headers({ "content-type": "application/json" }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};
