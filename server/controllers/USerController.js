const UserService = require("../service/User.service");

exports.getAllUserController = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json({ message: "success", users });
  } catch (error) {
    res.status(500).json({ message: error.message, users: [] });
  }
};

exports.getOneUserController = async (req, res) => {
  try {
    const { id } = req.params; // Извлекаем ID из параметров URL

    if (!id) {
      return res.status(400).json({ message: "User ID is required" }); // Проверяем наличие ID
    }

    const user = await UserService.getOneUser(id); // Передаем ID в сервис

    if (!user) {
      return res.status(404).json({ message: "User not found" }); // Возвращаем 404, если пользователь не найден
    }

    return res.status(200).json({ message: "Success", user }); // Возвращаем пользователя
  } catch (error) {
    console.error("Error fetching user:", error); // Логируем ошибку на сервере
    return res.status(500).json({ message: "Server error", error: error.message }); // Возвращаем ошибку сервера
  }
};
