const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const morgan = require('morgan');
require("dotenv").config();

const app = express();
const port = 4343;

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
    res.status(err.statusCode || 500).render('404', { title: 'Page Not Found' });
});

// START THE SERVER
app.listen(port, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Mini Message Board - Running on http://localhost:${port}`);
});