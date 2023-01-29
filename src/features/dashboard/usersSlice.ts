import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchUsers } from "./usersAPI";

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

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.usersList = action.payload;
    },
    addUser: (state, action: PayloadAction<IUser>) => {
      state.usersList = state.usersList.concat(action.payload);
    },
    editUser: (state, action: PayloadAction<IUser>) => {
      const index = state.usersList.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.usersList[index] = { ...state.usersList[index], ...action.payload };
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      const filteredUsers = state.usersList.filter(
        (user) => user.id !== action.payload
      );
      state.usersList = filteredUsers;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.usersList = action.payload;
    });
  },
});

export const { setUsers, addUser, editUser, deleteUser } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;
export const selectById = (state: RootState, id: number) =>
  state.users.usersList.find((user) => user.id === id);

export default usersSlice.reducer;
