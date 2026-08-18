const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.usersGet);
indexRouter.get("/new", indexController.newGet);
indexRouter.post("/new", indexController.newPost);
indexRouter.get("/delete", indexController.deleteGet)

module.exports = indexRouter;