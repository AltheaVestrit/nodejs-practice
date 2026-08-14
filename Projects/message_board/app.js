const express = require('express');
const app = express();

const path = require('node:path');

const indexRouter = require('./routes/indexRouter');

// MIDDLEWARE
// Set up views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set up assets
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

// Set up access to form content
app.use(express.urlencoded({ extended: true }));

// REQUEST HANDLERS
app.use("/", indexRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

// START THE SERVER
const port = 3000;
app.listen(port, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Mini Message Board - Listening on port ${port}!`);
});