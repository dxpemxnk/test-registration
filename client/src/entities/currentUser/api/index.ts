import { axiosInstance } from "@/shared/lib/axiosInstance";
import { UserListType, UserType } from "@/entities/currentUser/model";

export class UserService {
  static async getAllUsers(): Promise<UserListType> {
    try {
      const response = await axiosInstance.get("/users");
      return response.data.users;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw new Error("Failed to fetch users");
    }
  }

  static async getOneUser(id: string): Promise<UserType> {
    try {
      const response = await axiosInstance.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw new Error("Failed to fetch user");
    }
  }
}
