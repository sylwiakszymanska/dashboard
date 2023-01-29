import { IUser } from "./usersSlice";

export const fetchUsers = async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
  );
  return response.json();
};

export const createUser = async (data: IUser) => {
  const response = await fetch(
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

export const patchUser = async (data: IUser) => {
  const response = await fetch(
    `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${data.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

export const removeUser = async (id: number) => {
  const response = await fetch(
    `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};
