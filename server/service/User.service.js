const { User } = require("../db/models");

class UserService {
  static async getAllUsers() {
    try {
      const users = await User.findAll({
        order: [["id", "ASC"]],
      });

      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getOneUser(id) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;
