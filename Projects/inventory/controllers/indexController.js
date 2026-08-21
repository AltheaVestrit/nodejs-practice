const queries = require('../models/queries');

exports.indexGet = async (req, res) => {
    const books = await queries.getAllBooks();
    // const books = [{ title: 'book1', author: 'author1', genre: 'genre1' }, { title: 'book2', author: 'author2', genre: 'genre2' }, { title: 'book3', author: 'author3', genre: 'genre3' }];
    res.render('index', { books });
};