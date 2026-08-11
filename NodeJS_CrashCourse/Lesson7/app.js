// Express is a wrapper for the default node http class. It returns an object based on that http class, with a lot of nice additional features.
const express = require('express');
const morgan = require('morgan');

// SETUP

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews'); // set a different location for the views, in case you're not using the default name

// listen for requests
app.listen(3000);

// MIDDLEWARE
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method, '\n');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

app.use(express.static('public'));
app.use(morgan('dev'));

// REQUEST HANDLERS
app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' }
    ]
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
})

// 404 PAGE
// the .use method is fired for any url, but only if no other handlers are fired. It must go at the bottom of the js file;
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});