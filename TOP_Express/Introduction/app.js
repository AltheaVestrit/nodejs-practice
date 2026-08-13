const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile('/views/index.html', { root: __dirname }));
app.get("/about", (req, res) => res.sendFile('/views/about.html', { root: __dirname }));
app.get("/contact-me", (req, res) => res.sendFile('/views/contact-me.html', { root: __dirname }));
app.use((req, res, next) => res.status(404).sendFile('/views/404.html', { root: __dirname }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    // This is important!
    // Without this, any startup errors will silently fail
    // instead of giving you a helpful error message.
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
});