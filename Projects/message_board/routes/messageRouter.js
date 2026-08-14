const { Router } = require('express');

const messageRouter = Router();

messageRouter.get("/", (req, res) => res.render('new', { title: 'New Message' }));

messageRouter.post("/",)

module.exports = messageRouter;