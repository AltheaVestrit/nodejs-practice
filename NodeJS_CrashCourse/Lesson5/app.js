// Express is a wrapper for the default node http class. It returns an object based on that http class, with a lot of nice additional features.
const express = require('express');

// SETUP

// express app
const app = express();

// listen for requests
app.listen(3000);

// REQUEST HANDLERS
app.get('/', (req, res) => {
    // res.send('<p>Home page</p>');
    // ^ .send automatically sets the correct content-type header and the status code. It also ends the connection automatically when it's done.

    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.sendFile('./views/about.html', { root: __dirname })
});

// REDIRECTS
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 PAGE
// the .use method is fired for any url, but only if no other handlers are fired. It must go at the bottom of the js file;
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});