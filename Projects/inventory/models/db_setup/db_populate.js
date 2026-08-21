const { pool } = require("../connect");

exports.populateAuthorsTable = async (authors) => {
    console.log("Populating authors table");
    let SQL = authors.reduce((acc, curr) => {
        return acc + `('${curr.author}'), `;
    },
        `INSERT INTO authors (author) VALUES `
    ).slice(0, -2) + `;`;
    await pool.query(SQL);
    console.log("> Success");
};

exports.populateGenresTable = async (genres) => {
    console.log("Populating genres table");
    let SQL = genres.reduce((acc, curr) => {
        return acc + `('${curr.genre}'), `;
    },
        `INSERT INTO genres (genre) VALUES `
    ).slice(0, -2) + `;`;
    await pool.query(SQL);
    console.log("> Success");
};

exports.populateBooksTable = async (books) => {
    console.log("Populating books table");
    let SQL = books.reduce((acc, curr) => {
        return acc + `('${curr.title}', (SELECT author_id from authors WHERE author='${curr.author}'), (SELECT genre_id from genres WHERE genre='${curr.genre}')), `;
    },
        `INSERT INTO books (title, author_id, genre_id) VALUES `
    ).slice(0, -2) + `;`;
    await pool.query(SQL);
    console.log("> Success");
};