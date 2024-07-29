import { url } from "../../../weburl";
import { Favourite } from "../types/favourite";

interface ApiResponse<T> {
  data: T;
}

// Fetch favourites by ID
export const FetchFavourites = async (user_id:  number): Promise<Favourite[]> => {
  const response = await fetch(`${url}api/favourites/users/${user_id}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Add a product to the favourites
export const AddToFavourites = async (user_id:  number, product_id: number): Promise<{ message: string }> => {
  const response = await fetch(`${url}api/favourites/users/${user_id}/`, {
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

// Delete a product from the favourites
export const DeleteFromFavourites = async (user_id:  number, product_id: number): Promise<void> => {
  const response = await fetch(`${url}api/favourites/users/${user_id}/`, {
    method: "DELETE",
    body: JSON.stringify({ product_id }),

    mode: "cors",
    headers: new Headers({ "content-type": "application/json" }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};
