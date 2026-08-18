require('dotenv').config();
const { PGURL } = process.env;
const { Pool } = require('@neondatabase/serverless');

module.exports = new Pool({ connectionString: PGURL });