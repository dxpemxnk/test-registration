import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { AuthPage, RegPage, NotFound, HomePage } from "@/pages";

export enum CLIENT_ROUTES {
  HOME = "/",
  AUTH = "/auth",
  REG = "/registration",
  NOT_FOUND = "*", // Поймать все остальные пути
}

export const router = createBrowserRouter([
  {
    path: CLIENT_ROUTES.HOME, // Основной маршрут
    element: <Layout />,
    children: [
      {
        path: CLIENT_ROUTES.AUTH,
        element: <AuthPage />,
      },
      {
        path: CLIENT_ROUTES.REG,
        element: <RegPage />,
      },
      {
        path: CLIENT_ROUTES.HOME, 
        element: <HomePage />, 
      },
      {
        path: CLIENT_ROUTES.NOT_FOUND, // Обработка несуществующих маршрутов
        element: <NotFound />,
      },
    ],
  },
]);