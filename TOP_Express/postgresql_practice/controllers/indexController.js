const queries = require("../db/queries");

exports.usersGet = async (req, res) => {
    let search = req.query.search;
    const users = search ? await queries.getUsername(search) : await queries.getAllUsernames();
    res.render('index', { users });
};

exports.newGet = (req, res) => {
    res.render('new');
};

exports.newPost = async (req, res) => {
    const username = req.body.username;
    await queries.insertUsername(username);
    res.redirect("/");
};

exports.deleteGet = async (req, res) => {
    await queries.deleteAll();
    res.redirect("/");
}