const express = require('express');
const path = require('node:path');
const morgan = require('morgan');

const { getErrorMessage } = require('./utils/utils');

const booksRouter = require('./routers/booksRouter');
const { CustomError } = require('./utils/customError');

const app = express();
const port = 3000;

// General Middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// REQUEST HANDLERS
app.use("/", booksRouter);

// ERROR HANDLERS
// No route matched -> throw 404 error
app.use((req, res, next) => {
    const error = new CustomError(`Not Found - ${req.originalUrl}`, 404);
    next(error);
});

// Handle all errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 404;
    res.status(statusCode).render('error', {
        statusCode: statusCode,
        message: getErrorMessage(err) || "An error occurred. Please view logs for more details",
        title: 'Error'
    });
})

// START THE SERVER
app.listen(port, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Bookstore Inventory - Running on http://localhost:${port}`);
});