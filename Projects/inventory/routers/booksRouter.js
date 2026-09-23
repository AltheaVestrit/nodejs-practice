const { Router } = require('express');
const booksController = require('../controllers/booksController');
const validationController = require('../controllers/validationController');

const booksRouter = Router();

booksRouter.get("/genre/:genre_id", validationController.genreId, booksController.genreGet);
booksRouter.get("/author/:author_id", validationController.authorId, booksController.authorGet);
booksRouter.get("/", booksController.indexGet);

module.exports = booksRouter;