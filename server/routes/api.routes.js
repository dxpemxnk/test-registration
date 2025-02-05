const router = require("express").Router();
const apiAuthRouter = require("./api.auth.routes");
const apiUsers = require("./api.users.routes");

router.use("/auth", apiAuthRouter);
router.use("/users", apiUsers);

module.exports = router;
