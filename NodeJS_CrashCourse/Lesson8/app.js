// Express is a wrapper for the default node http class. It returns an object based on that http class, with a lot of nice additional features.
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// SETUP

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb://localhost:27017/nodetuts';
mongoose.connect(dbURI)
    .then((result) => { app.listen(3001) })
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.render('about', { title: 'About' });
});

// Blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result });
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
})

// 404 PAGE
// the .use method is fired for any url, but only if no other handlers are fired. It must go at the bottom of the js file;
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});