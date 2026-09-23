const queries = require('../models/queries');
const { validationResult } = require('express-validator');

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
    }
};