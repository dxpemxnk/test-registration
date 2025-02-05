// Импортируем функцию createAsyncThunk из reduxjs/toolkit для создания асинхронных thunk-функций
import { createAsyncThunk } from "@reduxjs/toolkit";

// Импортируем тип AxiosError из axios для обработки ошибок API
import { AxiosError } from "axios";

// Импортируем класс UserService из папки api для работы с API
import { UserService } from "../api";
import { UserListType, UserType } from ".";

// Определяем тип RejectValue для значения rejectWithValue
type RejectValue = {
  message: string;
};

// Создаем перечисление с префиксом типов для уникальных имен действий
enum USERS_THUNK_TYPES_PREFIX {
  INIT_USERS = "users/initUsers",
}

// Создаем асинхронную thunk-функцию 
export const getAllUsers = createAsyncThunk<
  UserListType,
  void,
  { rejectValue: RejectValue }
>(USERS_THUNK_TYPES_PREFIX.INIT_USERS, async (_, { rejectWithValue }) => {
  try {
    return await UserService.getAllUsers();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
export const getOneUser = createAsyncThunk<
  UserType,
  string,
  { rejectValue: RejectValue }
>("users/getOneUser", async (id, { rejectWithValue }) => {
  try {
    const user = await UserService.getOneUser(id);
    return user;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
