const { client } = require('../connect');
const queries = require('../queries');
const { authors, genres, books } = require('./db_content');

const SQL = [
    ["Drop tables",
        `
        DROP TABLE IF EXISTS books;
        DROP TABLE IF EXISTS authors;
        DROP TABLE IF EXISTS genres;
        `
    ],
    ["Create authors table",
        `
        CREATE TABLE authors (
        author_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        author VARCHAR ( 255 )
        );
        `
    ],
    ["Create genres table",
        `
        CREATE TABLE genres (
        genre_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        genre VARCHAR ( 255 )
        );
        `
    ],
    ["Create books table",
        `
        CREATE TABLE books (
        book_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR ( 255 ),
        author_id INT,
        genre_id INT,
        CONSTRAINT fk_author
            FOREIGN KEY(author_id)
                REFERENCES authors(author_id),
        CONSTRAINT fk_genre
            FOREIGN KEY(genre_id)
                REFERENCES genres(genre_id)
        );
        `
    ],
    ["Insert author and genre for testing",
        `
        INSERT INTO authors (author)
        VALUES ('Jane Austen');

        INSERT INTO genres (genre)
        VALUES ('Romance');
        `
    ],
    ["Insert book for testing",
        `
        INSERT INTO books (title, author_id, genre_id)
        VALUES ('Pride and Prejudice', (SELECT author_id from authors WHERE author='Jane Austen'), (SELECT genre_id from genres WHERE genre='Romance'));
        `
    ]
];

async function fireQuery(q) {
    console.log(q[0]);
    await client.query(q[1]);
    console.log('> Succes');
};

async function main() {
    console.log("Initializing database...");
    await client.connect();
    for (const q of SQL) {
        await fireQuery(q);
    };
    await client.end();
    console.log("Done\n");
};

async function populate() {
    console.log("Populating database...");
    await queries.populateAuthorsTable(authors);
    await queries.populateGenresTable(genres);
    await queries.populateBooksTable(books);
    console.log("Done populating database");
}

async function init() {
    await main();
    await populate();
};

init();