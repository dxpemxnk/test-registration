import { createSlice } from "@reduxjs/toolkit";
import { UserListType, UserType } from ".";
import { getAllUsers, getOneUser } from "./curUserThunk";

// Определяем тип состояния для хранилища пользователя
type UsersState = {
  users: UserListType;
  currentUser: UserType | null;
  error: string | null;
  loading: boolean;
};

// Устанавливаем начальное состояние
const initialState: UsersState = {
  users: [],
  currentUser: null,
  error: null,
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Get users

      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Get all users: fail";
      })

      //get one

      .addCase(getOneUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getOneUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Get one user: fail";
      });
  },
});

export default usersSlice.reducer;
