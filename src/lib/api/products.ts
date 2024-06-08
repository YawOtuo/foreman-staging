import { url } from "../../../weburl";

export const fetchProducts = async (query) => {
  const queryString = query ? `?page=${query}` : ''; // Construct the query string conditionally
  const response = await fetch(`${url}api/products/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

//Fetch a single product by ID
export const fetchOneProduct = async (id) => {
  const response = await fetch(`${url}api/products/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Add a new product
// export const addProduct = async (body) => {
//   const response = await fetch(`${url}products`, {
//     method: "POST",
//     body: JSON.stringify(body),
//     mode: "cors",
//     headers: new Headers({'content-type': 'application/json'}),
//   });
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// Update an existing product by ID
export const updateProduct = async (body, id) => {
  const response = await fetch(`${url}products/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    mode: "cors",
    headers: new Headers({'content-type': 'application/json'}),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Search for products based on a keyword
export const searchProduct = async (query) => {
  const response = await fetch(`${url}products/search/search?keyword=${query}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};


