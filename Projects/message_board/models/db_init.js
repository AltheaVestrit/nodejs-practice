const { client } = require("./connect");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 3000 ),
    username VARCHAR ( 255 ),
    added TIMESTAMP
);
DELETE FROM messages;
SELECT setval('messages_id_seq',1,false);
INSERT INTO messages (text, username, added)
VALUES
    ('Hi there!', 'Amando', '${new Date().toLocaleString()}'),
    ('Hello World!', 'Charles', '${new Date().toLocaleString()}');
`;

async function main() {
    console.log("Initializing database...");
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Done");
};

main();