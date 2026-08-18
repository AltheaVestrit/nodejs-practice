#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("@neondatabase/serverless");
const { PGURL } = process.env;

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);
DELETE FROM usernames;
SELECT setval('usernames_id_seq',1,false);
INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({ connectionString: PGURL });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
