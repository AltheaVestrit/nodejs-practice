const { pool } = require("./connect");

exports.getAllMessages = async () => {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
};

exports.addMessage = async ({ text, username, added }) => {
    await pool.query("INSERT INTO messages (text, username, added) VALUES ($1, $2, $3);", [text, username, added]);
};

exports.getSingleMessage = async (id) => {
    const { rows } = await pool.query(`SELECT * FROM messages WHERE id=${id}`);
    return rows[0];
}