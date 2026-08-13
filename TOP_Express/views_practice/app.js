const express = require('express');
const app = express();

const path = require('node:path');

// Set up views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set up assets
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
    res.render("index", { message: "EJS rocks!", links: links, users: users });
});

app.get("/about", (req, res) => {
    res.render("about", { links: links });
});

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port 3000!`);
});