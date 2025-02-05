const router = require("express").Router();
const {
  getAllUserController,
  getOneUserController,
} = require("../controllers/USerController");

router.route("/").get(getAllUserController);

router.route("/:id").get(getOneUserController);

module.exports = router;
