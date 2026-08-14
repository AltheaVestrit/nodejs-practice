const { Router } = require('express');

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date().toLocaleString(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date().toLocaleString(),
    }
];

indexRouter.get("/", (req, res) => res.render('index', { title: 'Mini Messageboard', messages }));

indexRouter.get("/new", (req, res) => res.render('new', { title: 'New Message' }));

indexRouter.post("/new", (req, res) => {
    const newMessage = { text: req.body.text, user: req.body.user, added: new Date().toLocaleString() };
    messages.push(newMessage);
    res.redirect('/');
});

indexRouter.get('/:id', (req, res) => {
    if (messages[req.params.id]) {
        res.render('message', { title: 'View Message', message: messages[req.params.id] })
    } else {
        res.status(404).render('404', { title: '404 | Not Found' })
    }
});

module.exports = indexRouter;