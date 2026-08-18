const { Router } = require('express');
const indexController = require('../controllers/indexController');
const validator = require("../models/validator");

const indexRouter = Router();

indexRouter.get("/", indexController.messagesGet);
indexRouter.get("/new", indexController.newGet);
indexRouter.post("/new", indexController.newPost);
indexRouter.get('/:id', indexController.singleMessageGet);

module.exports = indexRouter;