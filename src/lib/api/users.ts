import { url } from "../../../weburl";
import { User } from "../types/user";

export const fetchUsers = async (filter?: {
  [key: string]: any;
}): Promise<User[]> => {
  const queryString = filter
    ? `?${new URLSearchParams(filter).toString()}`
    : "";
  const response = await fetch(`${url}api/users/${queryString}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchOneUser = async (id: number): Promise<User> => {
  const response = await fetch(`${url}api/users/${id}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchOrCreateUserByUid = async (
  body: Partial<User>
): Promise<User> => {
  const response = await fetch(`${url}api/users/get-or-create-user-by-uid/`, {
    method: "POST",
    body: JSON.stringify(body),
    mode: "cors",
    headers: new Headers({ "content-type": "application/json" }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const AddUser = async (body: Partial<User>): Promise<User> => {
  const response = await fetch(`${url}api/users/`, {
    method: "POST",
    body: JSON.stringify(body),
    mode: "cors",
    headers: new Headers({ "content-type": "application/json" }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const updateUser = async (
  body: Partial<User>,
  id: number
): Promise<User> => {
  const response = await fetch(`${url}api/users/${id}/`, {
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

export const searchUser = async (query: string): Promise<User[]> => {
  const response = await fetch(
    `${url}api/users/search/search?keyword=${query}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
