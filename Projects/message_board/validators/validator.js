const { body, query } = require("express-validator");

exports.validateNewMessage = [
    body("username")
        .exists()
        .isLength({ min: 3 }).withMessage("Username must be at least 3 characters long.")
        .escape(),
    body("text")
        .exists()
        .isLength({ min: 3 }).withMessage("Your message must be at least 3 characters long.")
        .escape()
];

exports.validateMessageID = [
    query("id")
        .isInt()
        .escape()
];