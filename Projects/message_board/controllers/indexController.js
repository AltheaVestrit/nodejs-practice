const queries = require('../models/queries');

exports.messagesGet = async (req, res) => {
    const messages = await queries.getAllMessages();
    res.render('index', { title: 'Mini Messageboard', messages });
};

exports.newGet = async (req, res) => {
    res.render('new', { title: 'New Message' })
};

exports.newPost = async (req, res) => {
    const newMessage = { text: req.body.text, username: req.body.username, added: new Date() };
    queries.addMessage(newMessage);
    res.redirect('/');
};

exports.singleMessageGet = async (req, res) => {
    const messageID = req.params.id;
    const message = await queries.getSingleMessage(messageID);
    if (message) {
        res.render('message', { title: 'View Message', message })
    } else {
        res.status(404).render('404', { title: '404 | Not Found' })
    }
};