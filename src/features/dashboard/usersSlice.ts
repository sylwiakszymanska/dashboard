import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchUsers, createUser, patchUser, removeUser } from "./usersAPI";

interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: IAddress;
  phone?: string;
  website?: string;
  company?: ICompany;
}

export interface UsersState {
  usersList: IUser[];
}

const initialState: UsersState = {
  usersList: [],
};

export const getUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = (await fetchUsers()) as IUser[];
  return response;
});

export const postUser = createAsyncThunk(
  "users/postUser",
  async (data: IUser) => {
    const response = await createUser(data);
    return response;
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async (data: IUser) => {
    const response = await patchUser(data);
    return response;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: number) => {
    const response = await removeUser(id);
    return { response, id };
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.usersList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.usersList = action.payload;
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.usersList = state.usersList.concat(action.payload);
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      const index = state.usersList.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.usersList[index] = { ...state.usersList[index], ...action.payload };
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      const filteredUsers = state.usersList.filter(
        (user) => user.id !== action.payload.id
      );
      state.usersList = filteredUsers;
    });
  },
});

export const { setUsers } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;
export const selectById = (state: RootState, id: number) =>
  state.users.usersList.find((user) => user.id === id);

export default usersSlice.reducer;
