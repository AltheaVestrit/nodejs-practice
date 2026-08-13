const { Router } = require('express');

const messageRouter = Router();

messageRouter.get("/", (req, res) => res.send("Create a new message"));

module.exports = messageRouter;