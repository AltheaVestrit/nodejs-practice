// Express is a wrapper for the default node http class. It returns an object based on that http class, with a lot of nice additional features.
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const morgan = require('morgan');

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
app.use(express.static('public')); // For telling express what the folder holding public files is called, so that its files can be referenced in the views
app.use(express.urlencoded({ extended: true })); // For encoding the form data and attaching it to the request body before sending it to a route
app.use(morgan('dev')); // For server logging

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

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' })
        })
        .catch(err => console.log(err));
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        })
        .catch(err => console.log(err));
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
})


// 404 PAGE
// the .use method is fired for any url, but only if no other handlers are fired. It must go at the bottom of the js file;
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});