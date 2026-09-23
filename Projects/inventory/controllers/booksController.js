const queries = require('../models/queries');
const { validationResult } = require('express-validator');
const { CustomError } = require('../utils/customError');

exports.indexGet = async (req, res) => {
    const books = await queries.getAllBooks();
    const genres = await queries.getAllGenres();
    const authors = await queries.getAllAuthors();
    res.render('index', { books, genres, authors, title: 'Home' });
};

exports.genreGet = async (req, res) => {
    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
        const books = await queries.getBooksWithGenre(req.params.genre_id);
        const genre = await queries.getGenre(req.params.genre_id);
        return res.render('genre', { books, title: genre });
    } else {
        throw new CustomError('Invalid genre ID provided.', 404);
    }
};

exports.authorGet = async (req, res) => {
    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
        const books = await queries.getBooksWithAuthor(req.params.author_id);
        const author = await queries.getAuthor(req.params.author_id);
        return res.render('author', { books, title: author });
    } else {
        throw new CustomError('Invalid author ID provided.', 404);
    }
};