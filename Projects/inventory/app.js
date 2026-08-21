const express = require('express');
const path = require('node:path');
const indexRouter = require('./routers/indexRouter');
const morgan = require('morgan');

const app = express();
const port = 3000;

// General Middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// REQUEST HANDLERS
app.use("/", indexRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).render('error', { title: 'Page Not Found' });
});

// START THE SERVER
app.listen(port, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Bookstore Inventory - Running on http://localhost:${port}`);
});