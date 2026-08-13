const express = require('express');
const app = express();

const path = require('node:path');

const indexRouter = require('./routes/indexRouter');
const messageRouter = require('./routes/messageRouter');

// Set up views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set up assets
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

// Middleware
app.use("/new", messageRouter);
app.use("/", indexRouter);


const port = 3000;
app.listen(port, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Message Board - Listening on port ${port}!`);
});