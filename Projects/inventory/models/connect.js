require('dotenv').config();
const { DATABASE_URL } = process.env;
const { Client, Pool } = require('@neondatabase/serverless');

module.exports = {
    client: new Client({ connectionString: DATABASE_URL }),
    pool: new Pool({ connectionString: DATABASE_URL })
};