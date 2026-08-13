const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Home Page"));
indexRouter.get("/about", (req, res) => res.send("About"));
indexRouter.get("/contact", (req, res) => res.send("Contact"));
indexRouter.post("/contact", (req, res) => res.send("You've successfully sent the contact form"));
indexRouter.use((req, res, next) => res.status(404).send("404 | Page not found"));

module.exports = indexRouter;