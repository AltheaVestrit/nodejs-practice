const { pool } = require("./connect");
const { CustomError } = require('../utils/customError');

// CREATE
exports.addAuthor = async (author) => {
    await pool.query(`
        INSERT INTO authors (author)
        VALUES ('${author}');
    `);
};

exports.addGenre = async (genre) => {
    await pool.query(`
        INSERT INTO genres (genre)
        VALUES ('${genre}');
    `);
};

exports.addBook = async (title, author, genre) => {
    await pool.query(`
        INSERT INTO books (title, author_id, genre_id) 
        VALUES ('${title}',
            (SELECT author_id from authors WHERE author='${author}'), 
            (SELECT genre_id from genres WHERE genre='${genre}'));
    `);
};

// READ
exports.getAllAuthors = async () => {
    const { rows } = await pool.query(`
        SELECT * FROM authors;
    `);
    return rows;
};

exports.getAllGenres = async () => {
    const { rows } = await pool.query(`
        SELECT * FROM genres;
    `);
    return rows;
};

exports.getSingleBook = async (book_id) => {
    const { rows } = await pool.query(`
        SELECT book_id, title, author, genre FROM books 
        JOIN authors ON books.author_id=authors.author_id 
        JOIN genres ON books.genre_id=genres.genre_id
        WHERE book_id='${book_id}'; 
    `);
    return rows;
};

exports.getBooksWithAuthor = async (author_id) => {
    const { rows } = await pool.query(`
        SELECT book_id, title, author, genre FROM books 
        JOIN authors ON books.author_id=authors.author_id 
        JOIN genres ON books.genre_id=genres.genre_id
        WHERE authors.author_id='${author_id}'; 
    `);
    return rows;
};

exports.getBooksWithGenre = async (genre_id) => {
    const { rows } = await pool.query(`
        SELECT book_id, title, author, genre FROM books 
        JOIN authors ON books.author_id=authors.author_id 
        JOIN genres ON books.genre_id=genres.genre_id
        WHERE genres.genre_id=${genre_id}; 
    `);
    return rows;
};

exports.getAllBooks = async () => {
    const { rows } = await pool.query(`
        SELECT book_id, title, author, genre FROM books 
        JOIN authors ON books.author_id=authors.author_id 
        JOIN genres ON books.genre_id=genres.genre_id;
        `);
    return rows;
};

exports.getGenre = async (genre_id) => {
    const { rows } = await pool.query(`
        SELECT genre
        FROM genres
        WHERE genre_id='${genre_id}';
    `);
    if (rows.length > 0) {
        return rows[0].genre;
    } else {
        throw new CustomError('Requested genre does not exist.', 501);
    }
};

exports.getAuthor = async (author_id) => {
    const { rows } = await pool.query(`
        SELECT author
        FROM authors
        WHERE author_id='${author_id}';
    `);
    if (rows.length > 0) {
        return rows[0].author;
    } else {
        throw new CustomError('Requested author does not exist.', 501);
    }
};

// UPDATE
exports.updateGenre = async (genre_id, genre) => {
    await pool.query(`
        UPDATE genres
        SET genre='${genre}'
        WHERE genre_id='${genre_id}';
    `);
};

exports.updateAuthor = async (author_id, author) => {
    await pool.query(`
        UPDATE authors
        SET author='${author}'
        WHERE author_id='${author_id}';
    `);
};

exports.updateBook = async (book_id, { title, author, genre }) => {
    let SQLarray = [];
    if (title) { SQLarray.push(`title='${title}'`) };
    if (author) { SQLarray.push(`author_id=(SELECT author_id from authors WHERE author='${author}')`) };
    if (genre) { SQLarray.push(`genre_id=(SELECT genre_id from genres WHERE genre='${genre}')`) };
    const SQL = `
        UPDATE books
        SET ${SQLarray.join(', ')}
        WHERE book_id='${book_id}';
    `;
    await pool.query(SQL);
};

// DELETE
exports.deleteBook = async (book_id) => {
    await pool.query(`
       DELETE FROM books
       WHERE book_id='${book_id}'; 
    `);
};

exports.deleteAuthor = async (author_id) => {
    await pool.query(`
       DELETE FROM authors
       WHERE author_id='${author_id}'; 
    `);
};

exports.deleteGenre = async (genre_id) => {
    await pool.query(`
       DELETE FROM genres
       WHERE genre_id='${genre_id}'; 
    `);
};


