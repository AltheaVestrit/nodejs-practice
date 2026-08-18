const { body, validationResult } = require("express-validator");

exports.validateNewMessage = () => {
    return [
        body("username")
            .notEmpty()
            .escape()
            .isLength({ min: 3 }).withMessage("Username must be at least 3 characters long."),
        body("text")
            .notEmpty()
            .escape()
            .isLength({ min: 3 }).withMessage("Your message must be at least 3 characters long")
    ]
};

// helper for extracting errors from defualt response
exports.validatorMapper = (errors = []) => {
    let message = {};
    errors.forEach((error) => {
        if (!message[error.path]) {
            message[error.path] = [];
        }
        message[error.path].push(error.msg);
    });
    return message;
};

// middleware used for enhancing response
exports.validateRequest = (req, res, next) => {
    console.log(req.body);
    const result = validationResult(req)
    console.log(result)
    if (result.isEmpty()) {
        return next();
    } else {
        const errors = validatorMapper(result.errors)
        console.log(errors)
        return res.status(400).json({
            statusCode: res.statusCode,
            errors,
        });
    }
};