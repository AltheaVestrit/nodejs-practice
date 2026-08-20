// File for messing with executing the queries in the queries file.

const queries = require('../queries');

async function logResult() {
    const rows = await queries.getAllBooks();
    console.log(rows);
};

logResult();