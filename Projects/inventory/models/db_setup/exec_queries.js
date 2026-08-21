// File for messing around with executing the queries from the queries file.
const queries = require('../queries');

async function logResult() {
    let rows;
    rows = await queries.getAllBooks();
    console.log(rows);
};

logResult();
